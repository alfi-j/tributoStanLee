const Footer = () => {
  return (
    <footer className="bg-marvel-dark text-white py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
              <span>🎭</span>
              <span>Stan Lee Tribute</span>
            </h3>
            <p className="text-gray-400">
              Un homenaje al legendario creador de Marvel Comics que inspiró a generaciones de fans.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/creations" className="hover:text-marvel-red transition-colors">Creaciones</a></li>
              <li><a href="/spiderman" className="hover:text-marvel-red transition-colors">Spider-Man</a></li>
              <li><a href="/cameos" className="hover:text-marvel-red transition-colors">Cameos MCU</a></li>
              <li><a href="/gallery" className="hover:text-marvel-red transition-colors">Galería</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-marvel-red transition-colors">📘</a>
              <a href="#" className="text-2xl hover:text-marvel-red transition-colors">🐦</a>
              <a href="#" className="text-2xl hover:text-marvel-red transition-colors">📷</a>
              <a href="#" className="text-2xl hover:text-marvel-red transition-colors">🎬</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Stan Lee Tribute. Hecho con ❤️ para los fans.</p>
          <p className="mt-2 text-marvel-red font-bold text-xl">¡EXCELSIOR!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
