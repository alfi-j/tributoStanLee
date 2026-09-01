import { spiderManData } from '../data/marvelData';

const SpiderManPage = () => {
  const { origin, stats, villains, allies, movies, trivia } = spiderManData;

  return (
    <div className="min-h-screen bg-gradient-to-b from-spidey-blue via-blue-50 to-white py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <span className="text-8xl block mb-4 animate-bounce">🕷️</span>
          <h1 className="section-title text-spidey-blue">Spider-Man</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            El héroe arácnido trepamuros que conquistó el mundo
          </p>
        </div>

        {/* Origin Story */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-12 border-l-8 border-spidey-red">
          <h2 className="text-3xl font-bold text-marvel-dark mb-6 flex items-center">
            <span className="mr-3">📖</span> {origin.title}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">{origin.story}</p>
          <div className="bg-red-50 border-l-4 border-spidey-red p-6 rounded-r-lg">
            <blockquote className="text-2xl font-bold text-marvel-red italic">
              "{origin.quote}"
            </blockquote>
            <cite className="text-gray-600 mt-2 block">— {origin.quoteAuthor}</cite>
          </div>
        </section>

        {/* Stats Cards */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-marvel-dark mb-8">
            📊 Estadísticas Clave
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 card-hover text-center">
                <h3 className="text-sm text-gray-500 mb-2">{stat.label}</h3>
                <p className="text-xl font-bold text-spidey-blue mb-1">{stat.value}</p>
                <p className="text-xs text-gray-400">{stat.year}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Villains */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-marvel-dark mb-8">
            🦹 Villanos Clásicos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {villains.map((villain, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl shadow-lg p-6 card-hover">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-4xl">{villain.icon}</span>
                  <span className="bg-marvel-red text-xs font-bold px-3 py-1 rounded-full">{villain.issue}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{villain.name}</h3>
                <p className="text-gray-300 text-sm">{villain.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Allies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-marvel-dark mb-8">
            👥 Aliados y Personajes Secundarios
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allies.map((ally, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 card-hover text-center">
                <span className="text-5xl block mb-3">{ally.icon}</span>
                <h3 className="text-lg font-bold text-marvel-dark mb-2">{ally.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{ally.relation}</p>
                {ally.quote && (
                  <p className="text-xs text-spidey-red italic">"{ally.quote}"</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Movies Table */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-marvel-dark mb-8">
            🎬 Spider-Man en el Cine
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-spidey-blue text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Actor</th>
                  <th className="py-4 px-6 text-left">Años</th>
                  <th className="py-4 px-6 text-left">Películas</th>
                  <th className="py-4 px-6 text-left">Estado</th>
                </tr>
              </thead>
              <tbody>
                {movies.map((movie, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-semibold">{movie.actor}</td>
                    <td className="py-4 px-6 text-gray-600">{movie.years}</td>
                    <td className="py-4 px-6 text-gray-600">{movie.films}</td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        movie.status === 'Activo' ? 'bg-green-100 text-green-700' :
                        movie.status === 'Oscar' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {movie.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Trivia */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-marvel-dark mb-8">
            💡 Curiosidades
          </h2>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-xl p-8">
            <ul className="space-y-4">
              {trivia.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-yellow-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SpiderManPage;
