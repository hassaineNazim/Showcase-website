const APropos = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Lamsset Lawkhiyat",
      role: "Couturière & Designer",
      description: "Artisane passionnée avec plus de 10 ans d'expérience dans la haute couture",
      avatar: "👗"
    },
    {
      id: 2,
      name: "Marie Dubois",
      role: "Modéliste",
      description: "Spécialiste en patronage et création de modèles sur mesure",
      avatar: "✂️"
    },
    {
      id: 3,
      name: "Sophie Laurent",
      role: "Styliste",
      description: "Conseillère en image et style personnalisé",
      avatar: "💎"
    }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque projet que nous entreprenons"
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "Travailler ensemble pour créer des solutions innovantes"
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "Toujours à la recherche de nouvelles technologies et approches"
    },
    {
      icon: "🔒",
      title: "Qualité",
      description: "Code propre, maintenable et respectant les meilleures pratiques"
    }
  ];

  return (
    <section id="a-propos" className="py-20 bg-black">
      <div className="container mx-auto px-5 lg:px-10 xl:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            À <span className="text-gradient">Propos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Découvrez notre histoire, notre équipe et nos valeurs
          </p>
        </div>

        {/* Notre Histoire */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Notre Histoire
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Fondée en 2015, notre atelier est né de la passion pour la couture et l'élégance. 
                Nous avons commencé comme une petite boutique artisanale et avons grandi pour 
                devenir une maison de couture reconnue.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Notre mission est de créer des vêtements uniques qui subliment la beauté de chaque personne. 
                Nous croyons en l'art de la couture traditionnelle combinée aux tendances modernes 
                pour créer des pièces intemporelles.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Aujourd'hui, nous sommes fiers d'avoir habillé plus de 200 clients pour leurs moments 
                les plus importants et de continuer à créer des vêtements d'exception.
              </p>
            </div>
            <div className="bg-gradient-to-br from-yellow-500/20 to-amber-600/20 border border-yellow-500/30 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">👗</div>
                <h4 className="text-xl font-bold text-white mb-2">Excellence en Couture</h4>
                <p className="text-gray-300">
                  Nous perpétuons l'art de la couture traditionnelle avec passion
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Nos Valeurs */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">
            Nos Valeurs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center bg-gray-900/50 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-6 hover:bg-gray-900/70 transition-all duration-300"
              >
                <div className="text-4xl mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Notre Équipe */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-12 text-center">
            Notre Équipe
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className="bg-gray-900/50 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-8 text-center hover:bg-gray-900/70 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                  {member.avatar}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {member.name}
                </h4>
                <p className="text-yellow-400 font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-300">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default APropos; 