
import React from 'react';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="group relative bg-zinc-900 rounded-lg overflow-hidden transition-transform duration-500 hover:-translate-y-2">
      <div className="aspect-[2/3] overflow-hidden relative">
        <img 
          src={movie.posterUrl} 
          alt={movie.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold border border-white/20">
          {movie.rating}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {movie.genre.map(g => (
            <span key={g} className="text-[10px] uppercase font-bold text-amber-500 tracking-widest">{g}</span>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-1">{movie.title}</h3>
        <p className="text-zinc-500 text-sm mb-4">Dir. {movie.director} • {movie.year}</p>
        <p className="text-zinc-400 text-sm line-clamp-2 mb-6 leading-relaxed">
          {movie.synopsis}
        </p>
        
        <button className="w-full py-3 border border-zinc-700 rounded text-sm font-semibold hover:bg-white hover:text-black hover:border-white transition-all">
          Detalles y Entradas
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
