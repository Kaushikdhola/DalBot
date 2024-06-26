// src/components/ChatbotIcon.js
import React from 'react';
import './ChatbotIcon.css';

const ChatbotIcon = ({ onClick }) => {
  return (
    <div className="chatbot-icon" onClick={onClick}>
      <span>&#x1F916;</span> {/* Chatbot icon unicode */}
    </div>
  );
};

export default ChatbotIcon;
