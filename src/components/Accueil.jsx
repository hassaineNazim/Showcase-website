import { useState, useEffect } from 'react';

import bg from '../assets/bg-accueil.png';

const Accueil = () => {
  
  useEffect(() => {
    // Ajouter les polices Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Montserrat:wght@300;400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Image de fond immersive */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-gray-900/80 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${bg})`,
            filter: 'brightness(0.3) contrast(1.2)'
          }}
        ></div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-20 container mx-auto px-5 lg:px-10 xl:px-10 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Titre principal avec typographie élégante */}
          <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-tight tracking-wide" 
              style={{ fontFamily: 'Playfair Display, serif' }}>
            Bienvenue chez{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600">
              Lamsset Lawkhiyat
            </span>
          </h1>

           {/*Sous-titre avec typographie raffinée */}
          <p className="text-xl lg:text-2xl xl:text-3xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed tracking-wide"
             style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
            Découvrez notre expertise et nos créations exceptionnelles dans l'art de la couture et du design vestimentaire
          </p>
          

          {/* Boutons CTA harmonisés */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Bouton principal - Or riche et sophistiqué */}
            <button 
              className="group relative px-10 py-4 bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700 text-white rounded-full font-semibold text-lg tracking-wide transition-all duration-300 hover:from-amber-600 hover:to-yellow-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/25"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
              onClick={() => {
                const section = document.querySelector('#nos-creations');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              <span className="relative z-10">Découvrir nos créations</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button> 
            

            {/* Bouton secondaire - Style ghost élégant */}
            
            <button 
              className="px-10 py-4 border-2 border-yellow-400/60 text-yellow-400 rounded-full font-medium text-lg tracking-wide hover:bg-yellow-400/10 hover:border-yellow-400 transition-all duration-300 group"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
              onClick={() => {
                const section = document.querySelector('#contact');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              <span className="group-hover:text-yellow-300 transition-colors duration-300">
                Nous contacter
              </span>
            </button>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accueil; 