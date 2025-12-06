'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChatComponent } from './Chat';
import './Header.css';
import { useChat } from '@/app/context/ChatContext';

interface HeaderProps {
  showChat?: boolean;
}

export default function Header({ showChat = false }: HeaderProps) {
  const { isVisible, toggleChat } = useChat();

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="header-logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18ZM12 3L1 9L12 15L21 10.09V17H23V9L12 3Z" fill="#00FF88"/>
            </svg>
            <span className="logo-text">QORE</span>
          </div>
          
          <nav className="header-nav">
            <Link href="/universities" className="nav-link">Universities</Link>
            <Link href="/programs" className="nav-link">Programs</Link>
            <Link href="/tours" className="nav-link">Tours</Link>
            <Link href="/compare" className="nav-link">Compare</Link>
            <Link href="/about" className="nav-link">About</Link>
          </nav>
          
          <div className="header-actions">
            <button
              className={`header-chat-btn`}
              onClick={(e) => {
                e.preventDefault();
                toggleChat();
              }}
              aria-label={isVisible ? 'Close chat' : 'Open chat'}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <Link href="/sign-in" className="login-link">Login</Link>
            <Link href="/sign-up" className="get-started-btn">Get Started</Link>
          </div>
        </div>
      </header>
      {showChat && <ChatComponent />}
    </>
  );
}

