import { quotes } from '../data/marvelData';

const QuoteSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Frases Célebres</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {quotes.map((quote, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-marvel-red hover:shadow-xl transition-shadow"
            >
              <blockquote className="text-lg text-gray-700 italic mb-4">
                "{quote.text}"
              </blockquote>
              <cite className="text-sm text-marvel-red font-semibold not-italic">
                — {quote.author}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
