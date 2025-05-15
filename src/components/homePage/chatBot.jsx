import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      {/* Floating Chat Button */}
<button
  onClick={toggleChat}
  aria-label="Open chat"
  className="fixed bottom-6 right-4 sm:right-6 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition z-[9999]"
>
  <MessageCircle className="w-6 h-6" />
</button>


      {/* Chatbot Iframe */}
      {isOpen && (
        <iframe
         src="https://www.chatbase.co/chatbot-iframe/iKCQZZyJH0tBXVNCu0I-R"
         title="Chatbase Bot"
         className="fixed bottom-20 right-4 w-[90vw] max-w-[370px] h-[500px] rounded-lg shadow-xl z-[9999]"
         style={{ border: 'none' }}
         allow="clipboard-write"
         />

      )}
    </>
  );
};

export default ChatbotWidget;
