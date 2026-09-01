import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-marvel-dark via-gray-900 to-black text-white py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-9xl">🕷️</div>
        <div className="absolute top-40 right-20 text-8xl">🦸</div>
        <div className="absolute bottom-20 left-1/3 text-9xl">⚡</div>
        <div className="absolute bottom-40 right-1/4 text-8xl">🔨</div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Stan Lee
            <span className="block text-marvel-red mt-2">1922 - 2018</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            El legendario creador de Marvel Comics que revolucionó el mundo de los superhéroes 
            y nos enseñó que incluso las personas más ordinarias pueden hacer cosas extraordinarias.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link to="/creations" className="btn-marvel inline-block">
              Explorar Creaciones
            </Link>
            <Link to="/spiderman" className="bg-transparent border-2 border-white hover:bg-white hover:text-marvel-dark text-white font-bold py-2 px-6 rounded-full transition-all duration-300 inline-block">
              Ver Spider-Man
            </Link>
          </div>
          
          <div className="mt-12 animate-bounce">
            <span className="text-4xl">👇</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
