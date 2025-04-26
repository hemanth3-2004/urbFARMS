import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(prev => !prev);
  };

  // Lock/unlock body scroll based on chat visibility
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto'; // Cleanup in case component unmounts
    };
  }, [isOpen]);

  return (
    <>
      {/* Floating Chat Icon */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition z-[9999]"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chatbase iframe */}
      {isOpen && (
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/iKCQZZyJH0tBXVNCu0I-R"
          title="Chatbase Bot"
          className="fixed bottom-20 right-6 w-[370px] h-[500px] rounded-lg shadow-xl z-[9999]"
          style={{ border: 'none' }}
          allow="clipboard-write"
        ></iframe>
      )}
    </>
  );
};

export default ChatbotWidget;
