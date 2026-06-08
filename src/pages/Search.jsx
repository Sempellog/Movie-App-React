import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const API_KEY = import.meta.env.VITE_OMDB_KEY;

function Search({ watchList, setWatchList }) {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  async function searchMovies() {
    if (query.trim === "") return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`,
      );
      const data = await response.json();

      if (data.Response === true) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (err) {
      setError("Something went wrong, try again...");
    } finally {
      setLoading(false);
    }
  }
  const handleKeyDown = (e) => {
    if (e.key === "Enter") searchMovies();
  };

  return (
    <div className="min-h-screen bg-gray-950 p-6">
      <div className="max-w-2xl mx-auto mb-8">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search for movies..."
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-gray-800 text-white rounded-lg px-4 py-3 outline-none border border-gray-700 focus:border-yellow-400"
          />
          <button
            onClick={searchMovies}
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lf font-bold hover:bg-yellow-300"
          >
            Search
          </button>
        </div>
      </div>
      {loading && <p className="text-gray-400 text-center">Searching...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {!loading && !error && movies.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              watchList={watchList}
              setWatchList={setWatchList}
              onClick={() => navigate(`/movie/${movie.imdbID}`)}
            />
          ))}
        </div>
      )}

      {!loading && !error && movies.length === 0 && (
        <div className="text-center text-gray-500 mt-6">
          <p className="text-5xl mb-4">🎬</p>
          <p>Search for a movie to get started</p>
        </div>
      )}
    </div>
  );
}

export default Search;
