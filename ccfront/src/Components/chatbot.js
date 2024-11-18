import React, { useState } from 'react';
import { MessageSquareHeart, ChevronDown } from 'lucide-react';

const ChatBot = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    return (
        <div className='ml-64'>

            {/* Chatbot Toggle Icon */}
            <div
                onClick={toggleChat}
                className="fixed bottom-5 right-5 cursor-pointer p-4 rounded-full shadow-lg bg-black text-white"
                title="Chat with us!"
            >
                {isChatOpen ? <ChevronDown size={24} /> : <MessageSquareHeart size={24} />}
            </div>

            {/* Chatbot iframe - visible only if chat is open */}
            {isChatOpen && (
                <div
                    className="fixed bottom-24 right-5 bg-white border rounded-lg shadow-lg"
                    style={{ width: '400px', height: '650px' }}
                >
                    <iframe
                        src="https://www.chatbase.co/chatbot-iframe/8n3zzLvtsZJCCtpwfqe1F"
                        width="100%"
                        height="100%"
                        title="Chatbot"
                    ></iframe>
                </div>
            )}
        </div>
    );
};

export default ChatBot;
