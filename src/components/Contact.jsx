const Contact = () => {
  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "lamssetlawkhiyat@gmail.com",
      link: "mailto:lamssetlawkhiyat@gmail.com"
    },
    {
      icon: "📱",
      title: "Téléphone",
      value: "+213 5 41 42 27 46",
      link: "tel:+213541422746"
    },
    {
      icon: "📍",
      title: "Adresse",
      value: "1er étage, Al Ayla Mall, Café Chergui",
      link: "https://maps.app.goo.gl/?"
    },
    {
      icon: "📸​",
      title: "Instagram",
      value: "lamsset_l.wkhiyat",
      link: "https://www.instagram.com/lamsset_l.wkhiyat/"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-5 lg:px-10 xl:px-10 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-wide text-yellow-500 mb-8 tracking-wide bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
            Contact
          </h2>
          <p className="text-xl lg:text-2xl text-amber-100/80 max-w-3xl mx-auto leading-relaxed font-light">
            Prêt à créer votre tenue de rêve ? Contactez-nous pour discuter de vos besoins
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Informations de contact */}
          <div className="space-y-12">
            <div className="text-center">
              <h3 className="text-3xl font-serif font-light text-amber-50 mb-8 tracking-wide">
                Informations de contact
              </h3>
              <p className="text-lg text-amber-100/80 leading-relaxed font-light max-w-2xl mx-auto">
                N'hésitez pas à nous contacter pour toute question ou pour discuter de votre tenue. 
                Nous sommes là pour vous accompagner dans la création de votre look parfait.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-6 p-8 bg-gradient-to-r from-black/60 to-gray-900/60 backdrop-blur-md border border-amber-200/20 rounded-2xl hover:bg-gradient-to-r hover:from-black/80 hover:to-gray-900/80 hover:border-amber-200/40 hover:shadow-lg hover:shadow-amber-500/10 transform hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="text-3xl filter drop-shadow-lg">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-amber-50 font-semibold text-lg tracking-wide mb-1">
                      {info.title}
                    </h4>
                    <a 
                      href={info.link}
                      className="text-amber-100/80 hover:text-amber-200 transition-colors duration-300 text-lg font-light hover:underline decoration-amber-200/50 underline-offset-4"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Horaires */}
            <div className="bg-gradient-to-br from-amber-200/10 to-amber-300/5 border border-amber-200/30 rounded-3xl p-10 backdrop-blur-md max-w-2xl mx-auto">
              <h4 className="text-amber-50 font-semibold text-2xl mb-8 tracking-wide text-center">
                Horaires de travail
              </h4>
              <div className="space-y-4 text-amber-100/90">
                <div className="flex justify-between items-center py-3 border-b border-amber-200/10">
                  <span className="font-medium text-lg">Dimanche - jeudi</span>
                  <span className="text-amber-200 font-light text-lg">9h00 - 20h00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-amber-200/10">
                  <span className="font-medium text-lg">Vendredi</span>
                  <span className="text-amber-200 font-light text-lg">12h00 - 20h00</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-lg">Samdi</span>
                  <span className="text-amber-200 font-light text-lg">12h00 - 20h00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 