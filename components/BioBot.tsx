import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { sendMessageToBioBot } from '../services/gemini';
import { ChatMessage } from '../types';

export const BioBot: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: 'Olá! Sou o BioBot, assistente virtual da Prof. Janielly. Posso te ajudar com dúvidas de biologia, desde a célula até os ecossistemas. O que você quer aprender hoje?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Prepare history for API (excluding the very last user message which is sent as prompt, 
    // although for chat session we usually send history + new msg. 
    // The service handles history. Here we pass the context so far.)
    // Note: In a real app, you might want to limit history token usage.
    const apiHistory = messages.map(m => ({ role: m.role, text: m.text }));
    
    const responseText = await sendMessageToBioBot(userMessage.text, apiHistory);

    const botMessage: ChatMessage = {
      role: 'model',
      text: responseText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMessage]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="biobot" className="py-20 bg-gradient-to-br from-bio-900 via-bio-800 to-teal-900 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full mix-blend-overlay blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-400 rounded-full mix-blend-overlay blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-sm rounded-xl mb-4 border border-white/20 shadow-xl">
             <Bot className="h-8 w-8 text-bio-300" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">BioBot Inteligente</h2>
          <p className="text-bio-100 max-w-lg mx-auto">
            Tire suas dúvidas instantaneamente com nossa IA treinada em biologia. 
            Pergunte sobre mitocôndrias, fotossíntese ou qualquer outro tema!
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 shadow-2xl h-[500px] flex flex-col">
          {/* Chat Header */}
          <div className="bg-black/20 p-4 flex items-center gap-3 border-b border-white/10">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="font-medium text-sm text-bio-50">Online • Respondendo sobre Biologia</span>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex max-w-[85%] sm:max-w-[75%] gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${msg.role === 'user' ? 'bg-teal-600' : 'bg-bio-600'}`}>
                    {msg.role === 'user' ? <User size={16} /> : <Sparkles size={16} />}
                  </div>
                  <div className={`p-3.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-teal-600/90 text-white rounded-tr-none' 
                      : 'bg-white/90 text-slate-800 rounded-tl-none'
                  }`}>
                    {msg.text.split('\n').map((line, i) => (
                        <p key={i} className="mb-1 last:mb-0">{line}</p>
                    ))}
                    <span className={`text-[10px] mt-1 block opacity-70 ${msg.role === 'user' ? 'text-teal-100' : 'text-slate-500'}`}>
                        {msg.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-bio-600 flex items-center justify-center">
                        <Sparkles size={16} />
                    </div>
                    <div className="bg-white/90 p-3.5 rounded-2xl rounded-tl-none">
                        <Loader2 className="h-5 w-5 text-bio-600 animate-spin" />
                    </div>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <div className="p-4 bg-black/20 border-t border-white/10">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ex: Qual a função do complexo de Golgi?"
                className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl py-3 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-bio-400 focus:bg-white/20 transition-all"
                disabled={isLoading}
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 p-2 bg-bio-500 hover:bg-bio-400 rounded-lg text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
              </button>
            </div>
            <div className="text-center mt-2">
                 <p className="text-[10px] text-white/40 flex items-center justify-center gap-1">
                    <AlertCircle size={10} />
                    A IA pode cometer erros. Verifique informações importantes com a professora.
                 </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};