import { creations } from '../data/marvelData';

const CreationCard = ({ creation }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<span key={i} className="text-yellow-400">★</span>);
      } else if (i - 0.5 === rating) {
        stars.push(<span key={i} className="text-yellow-400">½</span>);
      } else {
        stars.push(<span key={i} className="text-gray-600">★</span>);
      }
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 card-hover border-t-4 border-marvel-red">
      <div className="text-5xl mb-4 text-center">{creation.icon}</div>
      <h3 className="text-xl font-bold text-marvel-dark mb-2">{creation.name}</h3>
      <p className="text-gray-600 mb-3 text-sm">{creation.description}</p>
      <div className="mb-3">
        <span className="text-xs text-gray-500 block mb-1">Primera Aparición:</span>
        <span className="text-sm font-semibold text-spidey-blue">{creation.firstAppearance}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">Rating:</span>
        <div className="text-lg">{renderStars(creation.rating)}</div>
      </div>
    </div>
  );
};

export default CreationCard;
