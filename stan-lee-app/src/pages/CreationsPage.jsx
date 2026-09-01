import { creations } from '../data/marvelData';
import CreationCard from '../components/CreationCard';

const CreationsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="section-title">Creaciones Icónicas</h1>
        
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
          Stan Lee co-creó algunos de los personajes más icónicos de la cultura pop. 
          Estos héroes y villanos han inspirado películas, series y millones de fans alrededor del mundo.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {creations.map((creation) => (
            <CreationCard key={creation.id} creation={creation} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreationsPage;
