import { useState } from "react";

const NosCreations = () => {
  const creations = [
    {
      id: 1,
      title: "Robe de Soirée",
      description: "Robe élégante pour occasions spéciales, confectionnée avec des tissus de luxe et des finitions impeccables",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Robe de Soirée",
      featured: true
    },
    {
      id: 2,
      title: "Costume Sur Mesure",
      description: "Costume d'affaires personnalisé pour un style professionnel impeccable et une élégance intemporelle",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Costume",
      featured: false
    },
    {
      id: 3,
      title: "Robe de Mariée",
      description: "Robe de mariée unique et romantique pour votre jour J, créée avec passion et savoir-faire",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Robe de Mariée",
      featured: false
    },
    {
      id: 4,
      title: "Tenue de Cocktail",
      description: "Tenue sophistiquée pour événements et réceptions, alliant élégance et confort",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Cocktail",
      featured: false
    },
    {
      id: 5,
      title: "Vêtements de Jour",
      description: "Tenues élégantes et confortables pour la vie quotidienne, créées avec des matières nobles",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Prêt-à-Porter",
      featured: false
    },
    {
      id: 6,
      title: "Accessoires",
      description: "Accessoires personnalisés pour compléter votre tenue et sublimer votre style",
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Accessoires",
      featured: false
    }
  ];

  const [selectedCreation, setSelectedCreation] = useState(null);

  return (
    <section id="nos-creations" className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Texture de fond subtile */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-5 lg:px-10 xl:px-10 relative z-10">
        {/* En-tête de section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-wide"
              style={{ fontFamily: 'Playfair Display, serif' }}>
            Nos{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600">
              Créations
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed tracking-wide"
             style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
            Découvrez notre collection de créations uniques et élégantes, 
            fruit de notre passion pour l'excellence et le savoir-faire
          </p>
        </div>

        {/* Création mise en avant */}
        {creations.filter(c => c.featured).map((creation) => (
          <div key={creation.id} className="mb-20">
            <div className="relative group overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-yellow-500/20">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-96 lg:h-full overflow-hidden">
                  <img 
                    src={creation.image} 
                    alt={creation.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                
                {/* Contenu */}
                <div className="p-12 lg:p-16 flex flex-col justify-center">
                  <div className="mb-6">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-amber-700 to-yellow-600 text-white text-sm font-medium rounded-full tracking-wide"
                          style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {creation.category}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    {creation.title}
                  </h3>
                  
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed"
                     style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                    {creation.description}
                  </p>
                  
                  <button onClick={() => setSelectedCreation(creation)} className="group/btn inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-700 to-yellow-600 text-white rounded-full font-semibold text-lg tracking-wide transition-all duration-300 hover:from-amber-600 hover:to-yellow-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/25"
                          style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}>
                    <span>Découvrir cette création</span>
                    <svg className="w-5 h-5 ml-3 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Grille des autres créations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {creations.filter(c => !c.featured).map((creation) => (
            <div 
              key={creation.id}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/10"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={creation.image} 
                  alt={creation.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay au survol */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button onClick={() => setSelectedCreation(creation)} className="px-6 py-3 bg-white/90 text-black rounded-full font-semibold text-sm tracking-wide hover:bg-white transition-colors duration-300"
                          style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}>
                    Voir les détails
                  </button>
                </div>
              </div>
              
              {/* Contenu */}
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-sm text-yellow-400 font-medium tracking-wide"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {creation.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 leading-tight"
                    style={{ fontFamily: 'Playfair Display, serif' }}>
                  {creation.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-6"
                   style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                  {creation.description}
                </p>
                
                <button onClick={() => setSelectedCreation(creation)} className="w-full py-3 border-2 border-yellow-400/60 text-yellow-400 rounded-xl font-medium text-sm tracking-wide hover:bg-yellow-400/10 hover:border-yellow-400 transition-all duration-300 group/btn"
                        style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}>
                  <span className="group-hover/btn:text-yellow-300 transition-colors duration-300">
                    Voir la création
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modale d'affichage de la création sélectionnée */}
        {selectedCreation && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={() => setSelectedCreation(null)}>
            <div className="relative bg-black rounded-3xl shadow-2xl max-w-2xl w-full mx-4" onClick={e => e.stopPropagation()}>
              <button onClick={() => setSelectedCreation(null)} className="absolute top-4 right-4 text-white text-2xl font-bold bg-black/60 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/80 transition-colors" aria-label="Fermer">
                &times;
              </button>
              <img src={selectedCreation.image} alt={selectedCreation.title} className="w-full h-96 object-cover rounded-t-3xl" />
              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>{selectedCreation.title}</h3>
                <p className="text-lg text-gray-300" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>{selectedCreation.description}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default NosCreations; 