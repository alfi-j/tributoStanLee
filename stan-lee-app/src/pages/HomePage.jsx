import Hero from '../components/Hero';
import QuoteSection from '../components/QuoteSection';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const quickLinks = [
    { to: '/creations', icon: '🦸', title: 'Creaciones', desc: 'Personajes icónicos' },
    { to: '/spiderman', icon: '🕷️', title: 'Spider-Man', desc: 'Sección especial' },
    { to: '/cameos', icon: '🎬', title: 'Cameos', desc: 'Apariciones MCU' },
    { to: '/gallery', icon: '🖼️', title: 'Galería', desc: 'Imágenes épicas' },
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Quick Links Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Explora el Legado</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {quickLinks.map((link, index) => (
              <Link 
                key={index}
                to={link.to}
                className="group block bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-marvel-red"
              >
                <span className="text-6xl block mb-4 group-hover:scale-125 transition-transform duration-300">{link.icon}</span>
                <h3 className="text-xl font-bold text-marvel-dark mb-2 group-hover:text-marvel-red transition-colors">
                  {link.title}
                </h3>
                <p className="text-gray-600">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-gradient-to-r from-marvel-dark to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Sobre Stan Lee</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Stanley Martin Lieber (1922-2018), conocido profesionalmente como Stan Lee, 
              fue un escritor, editor, productor y actor estadounidense de cómics. 
              Como coproductor de personajes icónicos como Spider-Man, Iron Man, Thor, 
              Hulk, Los Vengadores y los X-Men, transformó Marvel Comics de una pequeña 
              editorial en un imperio multimedia global.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/creations" className="btn-marvel inline-block">
                Ver Personajes
              </Link>
            </div>
          </div>
        </div>
      </section>

      <QuoteSection />
    </div>
  );
};

export default HomePage;
