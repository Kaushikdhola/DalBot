import React, { useState } from 'react';
import ChatbotIcon from './components/ChatbotIcon';
import ChatWindow from './components/ChatWindow';
import './App.css';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="App">
      {isChatOpen ? (
        <ChatWindow onClose={() => setIsChatOpen(false)} />
      ) : (
        <ChatbotIcon onClick={toggleChat} />
      )}
    </div>
  );
}

export default App;
