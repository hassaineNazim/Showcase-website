import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    alert("Message envoyé avec succès !");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "contact@lamssetlawkhiyat.com",
      link: "mailto:contact@lamssetlawkhiyat.com"
    },
    {
      icon: "📱",
      title: "Téléphone",
      value: "+33 1 23 45 67 89",
      link: "tel:+33123456789"
    },
    {
      icon: "📍",
      title: "Adresse",
      value: "Paris, France",
      link: "#"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "lamsset-lawkhiyat",
      link: "https://linkedin.com/in/lamsset-lawkhiyat"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-5 lg:px-10 xl:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="text-gradient">Contact</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Prêt à créer votre tenue de rêve ? Contactez-nous pour discuter de vos besoins
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulaire de contact */}
          <div className="bg-black/50 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Envoyez-nous un message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-yellow-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-yellow-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Sujet *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-yellow-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-colors"
                  placeholder="Sujet de votre message"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-800 border border-yellow-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-colors resize-none"
                  placeholder="Décrivez votre tenue de rêve ou votre demande..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-black rounded-xl font-semibold hover:opacity-80 transition-opacity"
              >
                Envoyer le message
              </button>
            </form>
          </div>

          {/* Informations de contact */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Informations de contact
              </h3>
              <p className="text-gray-300 mb-8">
                N'hésitez pas à nous contacter pour toute question ou pour discuter de votre tenue. 
                Nous sommes là pour vous accompagner dans la création de votre look parfait.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-black/50 backdrop-blur-sm border border-yellow-500/30 rounded-xl hover:bg-black/70 transition-all duration-300"
                >
                  <div className="text-2xl">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      {info.title}
                    </h4>
                    <a 
                      href={info.link}
                      className="text-gray-300 hover:text-yellow-400 transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Horaires */}
            <div className="bg-gradient-to-r from-yellow-500/10 to-amber-600/10 border border-yellow-500/20 rounded-2xl p-6">
              <h4 className="text-white font-semibold mb-4">
                Horaires de travail
              </h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span>9h00 - 18h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span>10h00 - 16h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span>Fermé</span>
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