import { useState } from 'react';
import { galleryImages } from '../data/marvelData';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-8xl block mb-4 animate-bounce">🖼️</span>
          <h1 className="section-title">Galería</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Imágenes icónicas de Stan Lee y el universo Marvel
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer card-hover"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold">{image.alt}</p>
                  <p className="text-gray-300 text-sm mt-1">Click para ampliar</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-4 right-4 text-white text-4xl hover:text-marvel-red transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center">
              <p className="text-xl font-semibold">{selectedImage.alt}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
