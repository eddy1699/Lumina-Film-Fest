
import React from 'react';
import { FESTIVAL_NAME } from '../constants';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="text-2xl font-serif italic cursor-pointer flex items-center gap-2"
          onClick={() => onNavigate('hero')}
        >
          <span className="text-amber-500 font-bold">L</span>
          <span>{FESTIVAL_NAME}</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => onNavigate('movies')} className="text-sm font-semibold hover:text-amber-500 transition-colors">Películas</button>
          <button onClick={() => onNavigate('schedule')} className="text-sm font-semibold hover:text-amber-500 transition-colors">Horarios</button>
          <button onClick={() => onNavigate('ai-assistant')} className="text-sm font-semibold hover:text-amber-500 transition-colors">CineBot AI</button>
          <button onClick={() => onNavigate('about')} className="text-sm font-semibold hover:text-amber-500 transition-colors">Festival</button>
        </nav>

        <button className="bg-amber-500 text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20">
          Entradas
        </button>
      </div>
    </header>
  );
};

export default Header;
