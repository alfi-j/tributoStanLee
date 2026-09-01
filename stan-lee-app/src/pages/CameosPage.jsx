import { cameos } from '../data/marvelData';

const CameosPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-8xl block mb-4 animate-bounce">🎬</span>
          <h1 className="section-title">Cameos en el MCU</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Las apariciones legendarias de Stan Lee en las películas del Universo Cinematográfico de Marvel
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cameos.map((cameo, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden card-hover group"
            >
              <div className="bg-gradient-to-r from-marvel-red to-orange-500 p-4">
                <h3 className="text-white font-bold text-lg">{cameo.movie}</h3>
              </div>
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <span className="text-3xl mr-3">👀</span>
                  <div>
                    <h4 className="font-semibold text-marvel-dark mb-1">Rol:</h4>
                    <p className="text-gray-600 text-sm">{cameo.role}</p>
                  </div>
                </div>
                
                {cameo.badge && (
                  <div className="mt-4">
                    <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-4 py-2 rounded-full">
                      ✨ {cameo.badge}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="px-6 pb-6">
                <div className="border-t pt-4 flex items-center justify-between">
                  <span className="text-xs text-gray-400">Aparición #{index + 1}</span>
                  <span className="text-2xl group-hover:scale-125 transition-transform">🎭</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-marvel-dark text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">🙏 Gracias, Stan</h2>
          <p className="text-gray-300 text-lg mb-6">
            Tus cameos nos hicieron sonreír en cada película. Tu legado vivirá para siempre.
          </p>
          <p className="text-marvel-red font-bold text-2xl">¡EXCELSIOR!</p>
        </div>
      </div>
    </div>
  );
};

export default CameosPage;
