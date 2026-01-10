'use client';

import React, { createContext, useContext, useState } from 'react';

type ChatContextType = {
  isVisible: boolean;
  openChat: () => void;
  closeChat: () => void;
  toggleChat: () => void;
  setVisible: (v: boolean) => void;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const openChat = () => setIsVisible(true);
  const closeChat = () => setIsVisible(false);
  const toggleChat = () => setIsVisible((s) => !s);

  return (
    <ChatContext.Provider value={{ isVisible, openChat, closeChat, toggleChat, setVisible: setIsVisible }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error('useChat must be used within ChatProvider');
  return ctx;
};

export default ChatProvider;
