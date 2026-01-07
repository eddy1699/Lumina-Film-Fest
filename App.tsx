
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MovieCard from './components/MovieCard';
import Schedule from './components/Schedule';
import AIAssistant from './components/AIAssistant';
import { MOVIES, FESTIVAL_NAME } from './constants';

const App: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Header onNavigate={scrollToSection} />
      
      <main>
        <Hero />
        
        {/* Featured Movies Section */}
        <section id="movies" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif italic mb-4">Selección Oficial</h2>
              <p className="text-zinc-500 max-w-xl">
                Una curaduría exclusiva de las mejores piezas del cine independiente y experimental de todo el mundo.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-zinc-900 border border-white/5 rounded text-xs font-bold uppercase tracking-widest">Todos</button>
              <button className="px-4 py-2 text-zinc-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">Drama</button>
              <button className="px-4 py-2 text-zinc-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">Sci-Fi</button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOVIES.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>

        <Schedule />

        <AIAssistant />

        {/* About Section */}
        <section id="about" className="py-24 bg-white text-black">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/about-cin/800/1000" 
                alt="Festival venue" 
                className="w-full h-[600px] object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-amber-500 p-8 flex flex-col justify-end text-white rounded-lg hidden lg:flex">
                <span className="text-5xl font-serif italic mb-2">12</span>
                <span className="text-sm font-bold uppercase tracking-widest">Edición Consecutiva</span>
              </div>
            </div>
            <div>
              <span className="text-amber-600 font-bold tracking-widest uppercase text-sm block mb-6">— El Festival</span>
              <h2 className="text-5xl font-serif italic mb-8 leading-tight">Más que cine, es una visión del mundo.</h2>
              <div className="space-y-6 text-zinc-700 leading-relaxed text-lg">
                <p>
                  Fundado en 2013, {FESTIVAL_NAME} se ha consolidado como un faro para la expresión artística sin límites. Nuestra misión es simple: conectar a los creadores más audaces con una audiencia que busca ser desafiada.
                </p>
                <p>
                  Este año, presentamos 42 estrenos internacionales, paneles de expertos y talleres técnicos, convirtiendo a la ciudad en el epicentro global del séptimo arte por una semana inolvidable.
                </p>
              </div>
              <div className="mt-12 flex gap-12">
                <div>
                  <h4 className="text-3xl font-bold text-black mb-1">45+</h4>
                  <p className="text-zinc-500 text-sm">Países</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-black mb-1">120</h4>
                  <p className="text-zinc-500 text-sm">Proyecciones</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-black mb-1">15k</h4>
                  <p className="text-zinc-500 text-sm">Asistentes</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-zinc-950 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-serif italic mb-6">{FESTIVAL_NAME}</h2>
            <p className="text-zinc-500 max-w-sm mb-8">
              Suscríbete a nuestra newsletter para recibir primicias sobre entradas y estrenos exclusivos.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="tu@email.com" 
                className="bg-zinc-900 border border-white/5 rounded px-4 py-2 text-sm flex-1 focus:outline-none focus:border-amber-500/50" 
              />
              <button className="bg-white text-black px-6 py-2 rounded text-sm font-bold hover:bg-amber-500 transition-colors">Unirse</button>
            </div>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-zinc-400">Navegación</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><button onClick={() => scrollToSection('movies')} className="hover:text-amber-500">Películas</button></li>
              <li><button onClick={() => scrollToSection('schedule')} className="hover:text-amber-500">Horarios</button></li>
              <li><button onClick={() => scrollToSection('about')} className="hover:text-amber-500">Prensa</button></li>
              <li><button className="hover:text-amber-500">Sponsors</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-zinc-400">Síguenos</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-amber-500">Instagram</a></li>
              <li><a href="#" className="hover:text-amber-500">Twitter (X)</a></li>
              <li><a href="#" className="hover:text-amber-500">Vimeo</a></li>
              <li><a href="#" className="hover:text-amber-500">Letterboxd</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-zinc-600 text-[10px] uppercase tracking-widest font-bold">
          <p>© 2025 Lumina Film Foundation. Todos los derechos reservados.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacidad</a>
            <a href="#" className="hover:text-white">Términos</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
