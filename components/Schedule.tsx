
import React from 'react';
import { SCREENINGS, MOVIES } from '../constants';

const Schedule: React.FC = () => {
  return (
    <section id="schedule" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif italic mb-4">Programación</h2>
            <p className="text-zinc-500 max-w-xl">
              Explora las proyecciones diarias en nuestras sedes oficiales. Recomendamos llegar 15 minutos antes de cada función.
            </p>
          </div>
          <div className="flex gap-4">
            {['Lun 15', 'Mar 16', 'Mié 17'].map(day => (
              <button 
                key={day}
                className="px-6 py-2 rounded-full border border-white/10 text-sm font-semibold hover:border-amber-500 hover:text-amber-500 transition-all"
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-px bg-white/10 border border-white/10 overflow-hidden rounded-xl">
          {SCREENINGS.map((s) => {
            const movie = MOVIES.find(m => m.id === s.movieId);
            return (
              <div key={s.id} className="grid md:grid-cols-[100px_1fr_200px_150px] items-center bg-black hover:bg-zinc-900 transition-colors p-6 gap-6">
                <div className="text-2xl font-bold text-amber-500">{s.time}</div>
                <div>
                  <h4 className="text-lg font-bold mb-1">{movie?.title}</h4>
                  <p className="text-zinc-500 text-xs uppercase tracking-widest">{movie?.genre.join(' / ')}</p>
                </div>
                <div className="flex items-center gap-2 text-zinc-400 text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {s.venue}
                </div>
                <div className="flex justify-end">
                  {s.isSoldOut ? (
                    <span className="px-4 py-1 rounded bg-zinc-800 text-zinc-500 text-[10px] font-bold uppercase tracking-widest border border-zinc-700">Agotado</span>
                  ) : (
                    <button className="bg-white text-black px-4 py-2 rounded text-[10px] font-bold uppercase tracking-widest hover:bg-amber-500 transition-colors">Reservar</button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
