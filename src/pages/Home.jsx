import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center p-8 text-white">
      <div className="text-center max-w-lg">
        <p className="text-8xl mb-6">🎬</p>
        <h1 className="text-5xl font-bold mb-4">MovieApp</h1>
        <p className="text-gray-400 text-lg mb-8">
          Search millions of movies. Save your watchlist. Never forget what to
          watch next.
        </p>
        <div className="mt-8">
          <Link
            to="/search"
            className="bg-yellow-800 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-700 mt-8"
          >
            Search Movies →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 max-w-2xl w-full">
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <p className="text-3xl mb-2">🔍</p>
            <p className="font-bold">Search</p>
            <p className="text-gray-400 text-sm">Find any movie instantly</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <p className="text-3xl bm-2">⭐</p>
            <p className="font-bold">Rating</p>
            <p className="text-gray-400 text-sm">See IMDB ratings</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <p className="text-3xl mb-2">📋</p>
            <p className="font-bold">Watchlist</p>
            <p className="text-gray-400 text-sm">Save movies to watch</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
