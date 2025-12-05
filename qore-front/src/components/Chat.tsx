'use client';

import React, { useState, useRef, useEffect } from 'react';
import './Chat.css';
import { useChat } from '@/app/context/ChatContext';
import { usePathname } from 'next/navigation';

interface Message {
  sender: 'qore' | 'user';
  content: string;
  timestamp?: Date;
}

export const ChatComponent: React.FC = () => {
  const { isVisible, openChat, closeChat, toggleChat } = useChat();
  const pathname = usePathname();

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'qore',
      content: 'Hello! I\'m Qore AI assistant. I can help you navigate through universities, programs, and answer your questions about studying in Kazakhstan. How can I assist you today?',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Only allow chat to be visible on /universities (including slug pages) and /compare
  const isAllowedPath = pathname?.startsWith('/universities') || pathname === '/compare';

  // If chat is opened on a disallowed page, close it automatically
  useEffect(() => {
    if (!isAllowedPath && isVisible) {
      closeChat();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (chatEndRef.current && isVisible) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, isVisible]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      sender: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const resp = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage.content }),
      });

      if (!resp.ok) {
        const txt = await resp.text();
        throw new Error(`Server error: ${txt}`);
      }

      const data = await resp.json();

      // The API returns a `text` field (may be raw string). Try to extract readable text.
      let aiText: string = '';
      if (data?.text) {
        aiText = typeof data.text === 'string' ? data.text : JSON.stringify(data.text);
      } else if (typeof data === 'string') {
        aiText = data;
      }

      // Sometimes the model output may be JSON encoded inside the text; attempt safe parse
      try {
        const parsed = JSON.parse(aiText);
        if (typeof parsed === 'string') aiText = parsed;
        else if (parsed?.choices?.[0]?.text) aiText = parsed.choices[0].text;
        else aiText = JSON.stringify(parsed);
      } catch (e) {
        // not JSON, keep as-is
      }

      const aiMessage: Message = {
        sender: 'qore',
        content: aiText.trim() || 'Sorry, I could not generate a response.',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      const aiMessage: Message = {
        sender: 'qore',
        content: 'Произошла ошибка при подключении к AI сервису. Попробуйте позже.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const toggleLocal = () => {
    toggleChat();
  };

  const closeLocal = () => {
    closeChat();
  };

  if (!isAllowedPath) {
    // Render nothing on disallowed pages
    return null;
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        className={`chat-toggle-btn ${isVisible ? 'hidden' : ''}`}
        onClick={toggleLocal}
        aria-label="Open chat"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="chat-toggle-badge"></span>
      </button>

      {/* Chat Overlay */}
      {isVisible && (
        <div
          className="chat-overlay"
          onClick={closeLocal}
          style={{ opacity: 1, pointerEvents: 'auto' }}
        />
      )}

      {/* Chat Window */}
      <div className={`chat-wrapper ${isVisible ? 'open' : ''}`}>
        <div className="chat-header">
          <div className="chat-header-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18ZM12 3L1 9L12 15L21 10.09V17H23V9L12 3Z" fill="#000000"/>
            </svg>
          </div>
          <div className="chat-header-info">
            <h2 className="chat-header-title">Qore AI</h2>
            <p className="chat-header-status">
              {isLoading ? 'Thinking...' : 'Online'}
            </p>
          </div>
          <button className="chat-close-btn" onClick={closeLocal} aria-label="Close chat">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="chat-container">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`message-wrapper ${msg.sender === 'user' ? 'message-user' : 'message-ai'}`}
            >
              <div className="message-avatar">
                {msg.sender === 'user' ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18ZM12 3L1 9L12 15L21 10.09V17H23V9L12 3Z" fill="currentColor"/>
                  </svg>
                )}
              </div>
              <div className="message-bubble">
                <p className="message-content">{msg.content}</p>
                {msg.timestamp && (
                  <span className="message-time">
                    {msg.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                )}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="message-wrapper message-ai">
              <div className="message-avatar">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18ZM12 3L1 9L12 15L21 10.09V17H23V9L12 3Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="message-bubble">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        <div className="chat-input-wrapper">
          <textarea
            ref={textareaRef}
            className="chat-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message... (Enter to send, Shift+Enter for new line)"
            rows={1}
            disabled={isLoading}
          />
          <button
            className="chat-send-btn"
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            aria-label="Send message"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
