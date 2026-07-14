import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserChat, sendChatMessage } from '../../redux/actions/chatActions';
import { MessageCircle, Send, X, Minimize2, HelpCircle, Mail, Phone, Clock } from 'lucide-react';

const HelpSupport = () => {
    const dispatch = useDispatch();
    const messagesEndRef = useRef(null);
    const [chatOpen, setChatOpen] = useState(false);
    const [newMessage, setNewMessage] = useState('');

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const chatDetails = useSelector((state) => state.chatDetails);
    const { loading, chat, error } = chatDetails;

    useEffect(() => {
        if (userInfo && !userInfo.isAdmin) {
            dispatch(fetchUserChat());
        }
    }, [dispatch, userInfo]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (userInfo && !userInfo.isAdmin) {
                dispatch(fetchUserChat());
            }
        }, 8000);

        return () => clearInterval(interval);
    }, [dispatch, userInfo]);

    useEffect(() => {
        scrollToBottom();
    }, [chat]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleSend = (e) => {
        e.preventDefault();
        if (!newMessage.trim() || !chat) return;

        dispatch(sendChatMessage(chat._id, newMessage));
        setNewMessage('');
    };

    const faqs = [
        {
            question: 'How can I track my order?',
            answer: 'You can track your order from the "My Orders" section in your profile. Click on any order to see detailed tracking information.'
        },
        {
            question: 'What is your return policy?',
            answer: 'We offer a 30-day return policy for most items. Products must be unused and in original packaging. Contact support to initiate a return.'
        },
        {
            question: 'How long does shipping take?',
            answer: 'Standard shipping typically takes 3-5 business days. Express shipping is available for 1-2 day delivery.'
        },
        {
            question: 'Do you offer international shipping?',
            answer: 'Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location.'
        },
        {
            question: 'How can I change my order?',
            answer: 'If your order hasn\'t shipped yet, you can modify it by contacting our support team immediately.'
        }
    ];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h2 className="text-3xl font-bold text-[#2564E5] mb-2">Help & Support</h2>
                <p className="text-gray-600 font-medium">Get assistance with your orders and account</p>
            </div>

            {/* Contact Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-[#2564E5] transition-colors">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-[#2564E5] mb-6">
                        <MessageCircle size={24} />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Live Chat</h3>
                    <p className="text-sm text-gray-600 mb-4">Chat with our support team in real-time</p>
                    <button
                        onClick={() => setChatOpen(true)}
                        className="w-full px-4 py-2 bg-[#2564E5] text-white rounded-lg hover:bg-blue-700 font-medium text-sm"
                    >
                        Start Chat
                    </button>
                </div>

                <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-[#2564E5] transition-colors">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-[#2564E5] mb-6">
                        <Mail size={24} />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Email Support</h3>
                    <p className="text-sm text-gray-600 mb-4">Get help via email within 24 hours</p>
                    <a
                        href="mailto:support@wideprinters.com"
                        className="block w-full px-4 py-2 bg-[#2564E5] text-white rounded-lg hover:bg-blue-700 font-medium text-sm text-center"
                    >
                        Send Email
                    </a>
                </div>

                <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-[#2564E5] transition-colors">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-[#2564E5] mb-6">
                        <Clock size={24} />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Support Hours</h3>
                    <p className="text-sm text-gray-600 mb-2">Monday - Saturday</p>
                    <p className="text-sm font-bold text-gray-900">8:00 AM - 7:00 PM</p>
                </div>
            </div>

            {/* FAQs */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
                <h3 className="text-2xl font-bold text-[#2564E5] mb-6 flex items-center gap-2">
                    <HelpCircle size={28} className="text-[#2564E5]" />
                    Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <details key={index} className="group">
                            <summary className="flex items-center justify-between cursor-pointer list-none p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors font-semibold text-gray-900">
                                <span>{faq.question}</span>
                                <span className="text-gray-400 group-open:rotate-180 transition-transform">
                                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </summary>
                            <div className="p-4 text-gray-700 text-base font-medium">
                                {faq.answer}
                            </div>
                        </details>
                    ))}
                </div>
            </div>

            {/* Live Chat Widget */}
            {chatOpen && (
                <div className="fixed bottom-4 right-4 w-96 h-[500px] bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col z-50 max-w-[calc(100vw-2rem)]">
                    {/* Chat Header */}
                    <div className="bg-[#2564E5] text-white p-6 rounded-t-xl flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                <MessageCircle size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold">Support Chat</h4>
                                <p className="text-xs text-white/80">We're here to help!</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setChatOpen(false)}
                            className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-3 bg-gray-50">
                        {loading ? (
                            <div className="text-center text-gray-400 py-10">Loading chat...</div>
                        ) : error ? (
                            <div className="text-center text-red-500 py-10">{error}</div>
                        ) : chat && chat.messages && chat.messages.length > 0 ? (
                            chat.messages.map((msg, index) => {
                                const isUser = msg.sender.toString() === userInfo._id;
                                return (
                                    <div key={index} className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
                                        <div className={`max-w-[80%] rounded-xl px-4 py-2 text-sm ${isUser
                                            ? 'bg-[#2564E5] text-white rounded-tr-none'
                                            : 'bg-white text-gray-700 rounded-tl-none border border-gray-200'
                                            }`}>
                                            <p>{msg.message}</p>
                                            <div className={`text-[10px] mt-1 text-right ${isUser ? 'text-blue-100' : 'text-gray-400'}`}>
                                                {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="text-center text-gray-400 py-10">
                                <MessageCircle size={48} className="mx-auto mb-3 opacity-50" />
                                <p className="text-lg font-bold">Start a conversation with our support team!</p>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="p-4 bg-white border-t border-gray-200 rounded-b-xl">
                        <form onSubmit={handleSend} className="flex gap-3">
                            <input
                                type="text"
                                className="flex-1 bg-white border border-gray-300 rounded-full px-5 py-3 text-base font-medium focus:ring-2 focus:ring-[#2564E5] outline-none"
                                placeholder="Type your message..."
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="p-3 bg-[#2564E5] text-white rounded-full hover:bg-blue-700 transition-colors shrink-0"
                            >
                                <Send size={22} />
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HelpSupport;
