import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-marvel-dark text-white sticky top-0 z-50 shadow-xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold flex items-center space-x-2 hover:text-marvel-red transition-colors">
            <span>🎭</span>
            <span>Stan Lee Tribute</span>
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-marvel-red transition-colors">Inicio</Link>
            <Link to="/creations" className="hover:text-marvel-red transition-colors">Creaciones</Link>
            <Link to="/spiderman" className="hover:text-marvel-red transition-colors">Spider-Man</Link>
            <Link to="/cameos" className="hover:text-marvel-red transition-colors">Cameos</Link>
            <Link to="/gallery" className="hover:text-marvel-red transition-colors">Galería</Link>
          </div>
          
          <button className="md:hidden text-2xl">☰</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
