import { useNavigate } from "react-router-dom";

function WatchList({ watchList, setWatchList }) {
  const navigate = useNavigate();
  const removeMovie = (id) =>
    setWatchList((prev) => prev.filter((m) => m.imdbID !== id));

  return (
    <div className="bg-gray-950 min-h-screen text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">My Watchlist</h1>
        <p className="text-gray-400 mb-8">{watchList.length} movie saved</p>
        {watchList.length === 0 && (
          <div className="text-center mt-16">
            <p className="text-6xl mb-4">📋</p>
            <p className="text-gray-400 text-lg">Your watchlist is empty</p>
            <button
              onClick={() => navigate("/search")}
              className="mt-4 bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-bold hover:bg-yellow-300"
            >
              Find Movies
            </button>
          </div>
        )}
        {watchList.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {watchList.map((movie) => (
              <div
                key={movie.imdbID}
                className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform relative"
                onClick={() => navigate(`/movie/${imdbID}`)}
              >
                <img
                  src={
                    movie.Poster !== "N/A"
                      ? movie.Poster
                      : "https://via.placeholder.com/300x450?text=No+Poster"
                  }
                  alt={movie.Title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeMovie(movie.imdbID);
                  }}
                  className="absolute top-2 right-4 text-bold bg-transparent text-white text-2xl hover:text-red-700"
                >
                  ✕
                </button>
                <div className="p-3">
                  <p className="text-white font-bold text-sm truncate">
                    {movie.Title}
                  </p>
                  <p className="text-gray-400 text-xs">{movie.Year}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default WatchList;
