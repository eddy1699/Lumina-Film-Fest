
import React from 'react';
import { FESTIVAL_NAME, FESTIVAL_DATES } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background with video-like feel (using an image) */}
      <div className="absolute inset-0 opacity-40">
        <img 
          src="https://picsum.photos/seed/cinema/1920/1080" 
          alt="Cinema background" 
          className="w-full h-full object-cover filter grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
      </div>

      <div className="relative z-10 text-center px-6">
        <p className="text-amber-500 font-bold tracking-[0.3em] uppercase mb-4 animate-pulse">
          Gran Premiere Mundial
        </p>
        <h1 className="text-6xl md:text-9xl font-serif italic mb-6 leading-tight">
          {FESTIVAL_NAME}
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 mb-10 max-w-2xl mx-auto font-light tracking-wide">
          Celebrando el arte cinematográfico en el corazón de la ciudad. {FESTIVAL_DATES}.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-md hover:bg-zinc-200 transition-colors text-lg">
            Ver Programación
          </button>
          <button className="w-full sm:w-auto px-8 py-4 border border-white/30 backdrop-blur-sm text-white font-bold rounded-md hover:bg-white/10 transition-colors text-lg">
            Saber Más
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
