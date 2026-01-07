
import React, { useState, useRef, useEffect } from 'react';
import { getMovieRecommendation } from '../services/geminiService';
import { Message } from '../types';

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: '¡Hola! Soy LuminaBot. Cuéntame, ¿qué tipo de emociones buscas hoy en el cine? Puedo recomendarte la película perfecta de nuestra selección.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    const recommendation = await getMovieRecommendation(userMessage);
    
    setMessages(prev => [...prev, { role: 'assistant', content: recommendation }]);
    setIsLoading(false);
  };

  return (
    <section id="ai-assistant" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif italic mb-4">Encuentra tu próximo favorito</h2>
          <p className="text-zinc-400">Nuestro CineBot utiliza IA de última generación para recomendarte películas según tu estado de ánimo.</p>
        </div>

        <div className="bg-zinc-900 border border-white/5 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px]">
          <div className="bg-zinc-800/50 p-4 border-b border-white/5 flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold uppercase tracking-widest text-zinc-400">LuminaBot AI</span>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-amber-600 text-white rounded-tr-none' 
                    : 'bg-zinc-800 text-zinc-300 rounded-tl-none'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 p-4 rounded-2xl rounded-tl-none flex gap-1">
                  <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce delay-75"></span>
                  <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce delay-150"></span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-zinc-800/30 border-t border-white/5">
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ej: Busco algo que me haga pensar y sea visualmente bello..."
                className="flex-1 bg-black/40 border border-white/10 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-amber-500/50 transition-colors"
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="bg-amber-500 text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-amber-400 transition-all disabled:opacity-50"
              >
                Preguntar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
