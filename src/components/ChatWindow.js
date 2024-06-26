// src/components/ChatWindow.js
import React, { useState } from 'react';
import './ChatWindow.css';

const ChatWindow = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      const newMessages = [...messages, { text: input, sender: 'user' }];
      setMessages(newMessages);
      setInput('');

      // Simulate bot response
      setTimeout(() => {
        const botMessage = { text: 'This is a simulated response from the bot.', sender: 'bot' };
        setMessages([...newMessages, botMessage]);
      }, 1000);
    }
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <span>DalBot</span>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      </div>
      <div className="chat-body">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <div className="message-content">{msg.text}</div>
          </div>
        ))}
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
