const NotreSavoirFaire = () => {
  const expertises = [
    {
      id: 1,
      title: "Couture Sur Mesure",
      description: "Création de vêtements personnalisés selon vos mesures et votre style, avec une attention particulière portée à chaque détail",
      icon: "✂️",
      skills: ["Patronage", "Tissage", "Finitions", "Essayages"],
      color: "from-amber-600 to-yellow-500"
    },
    {
      id: 2,
      title: "Robe de Mariée",
      description: "Conception et réalisation de robes de mariée uniques et romantiques, créées avec passion et savoir-faire",
      icon: "👗",
      skills: ["Dentelle", "Soie", "Broderies", "Volants"],
      color: "from-yellow-500 to-amber-600"
    },
    {
      id: 3,
      title: "Costume Homme",
      description: "Costumes d'affaires et de cérémonie sur mesure pour hommes, alliant élégance et confort",
      icon: "👔",
      skills: ["Laine", "Lin", "Doublure", "Boutons"],
      color: "from-amber-700 to-yellow-600"
    },
    {
      id: 4,
      title: "Retouches & Modifications",
      description: "Service de retouche et modification de vêtements existants pour une seconde vie élégante",
      icon: "🪡",
      skills: ["Ourlets", "Taille", "Réparations", "Personnalisation"],
      color: "from-yellow-600 to-amber-500"
    },
    {
      id: 5,
      title: "Accessoires",
      description: "Création d'accessoires personnalisés pour compléter vos tenues et sublimer votre style",
      icon: "👜",
      skills: ["Sacs", "Écharpes", "Gants", "Bijoux"],
      color: "from-amber-500 to-yellow-500"
    },
    {
      id: 6,
      title: "Consultation Style",
      description: "Conseils personnalisés pour votre garde-robe et votre style, adaptés à votre personnalité",
      icon: "💎",
      skills: ["Couleurs", "Silhouettes", "Tendances", "Harmonie"],
      color: "from-yellow-500 to-amber-600"
    }
  ];

  return (
    <section id="notre-savoir-faire" className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
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
            Notre{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600">
              Savoir-Faire
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed tracking-wide"
             style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
            Expertise en couture et design pour créer des vêtements uniques et élégants, 
            fruit de notre passion pour l'excellence et le savoir-faire traditionnel
          </p>
        </div>

        {/* Grille des expertises */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {expertises.map((expertise) => (
            <div 
              key={expertise.id}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/10"
            >
              {/* Icône avec effet de gradient */}
              <div className="p-8">
                <div className={`w-20 h-20 bg-gradient-to-r ${expertise.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-3xl filter drop-shadow-lg">
                    {expertise.icon}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-yellow-400 transition-colors duration-300"
                    style={{ fontFamily: 'Playfair Display, serif' }}>
                  {expertise.title}
                </h3>
                
                <p className="text-gray-300 text-base leading-relaxed mb-6"
                   style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                  {expertise.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {expertise.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-yellow-400/30 text-yellow-300 rounded-full text-sm font-medium tracking-wide hover:bg-yellow-400/20 hover:border-yellow-400 transition-all duration-300"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Effet de brillance au survol */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          ))}
        </div>

        {/* Section "Pourquoi nous choisir" */}
        <div className="relative">
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-yellow-500/20 rounded-3xl p-12 lg:p-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight"
                  style={{ fontFamily: 'Playfair Display, serif' }}>
                Pourquoi nous choisir ?
              </h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
                 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                Notre engagement envers l'excellence et notre passion pour la création 
                font de nous votre partenaire de confiance pour vos projets vestimentaires
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="relative w-20 h-20 bg-gradient-to-r from-amber-700 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white font-bold text-2xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                    5+
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-yellow-500 rounded-full opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                </div>
                <h4 className="text-white font-semibold mb-3 text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Années d'expérience
                </h4>
                <p className="text-gray-300 text-base leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                  Expertise acquise sur de nombreuses créations et une maîtrise parfaite des techniques
                </p>
              </div>

              <div className="text-center group">
                <div className="relative w-20 h-20 bg-gradient-to-r from-yellow-600 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white font-bold text-2xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                    50+
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                </div>
                <h4 className="text-white font-semibold mb-3 text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Créations réalisées
                </h4>
                <p className="text-gray-300 text-base leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                  Collection riche et variée, témoignant de notre créativité et de notre savoir-faire
                </p>
              </div>

              <div className="text-center group">
                <div className="relative w-20 h-20 bg-gradient-to-r from-amber-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white font-bold text-2xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                    100%
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                </div>
                <h4 className="text-white font-semibold mb-3 text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Satisfaction client
                </h4>
                <p className="text-gray-300 text-base leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                  Clients satisfaits et fidèles, témoignant de notre engagement envers l'excellence
                </p>
              </div>
            </div>

          
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotreSavoirFaire; 