import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API_KEY = import.meta.env.VITE_OMDB_KEY;

function MovieDetail({ watchList, setWatchList }) {
  const { id } = useParams();
  const [movie, setMovie] = useState(true);
  const [loading, setLoading] = useState(null);

  const isInWatchList = watchList.some((m) => m.imdbID === id);

  const toggleWatchList = () => {
    if (isInWatchList) {
      setWatchList((prev) => prev.filter((m) => m.imdbID !== id));
    } else {
      setWatchList((prev) => [...prev, movie]);
    }
  };

  useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`,
        );
        const data = await response.json();
        setMovie(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchMovie();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-950 text-white p-6">
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="text-yellow-400 hover:text-yellow-300 mb-6 flex items-center gap-2"
      >
        {" "}
        ← Back{" "}
      </button>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/300x450?text=No+Poster"
          }
          alt={movie.Title}
          className="w-full md:w-64 h-auto rounded-lg object-cover"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{movie.Title}</h1>
          <p className="text-gray-400 mb-4">
            {movie.Year} • {movie.Runtime} • {movie.Genre}
          </p>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-400 text-xl">⭐</span>
            <span className="font-bold text-lg">{movie.imdbRating}</span>
            <span className="text-gray-400 text-sm">/ 10</span>
          </div>
          <p className="text-gray-300 mb-6 leading-relaxed">{movie.Plot}</p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <p className="text-gray-500 text-sm ">Director</p>
            <p className="text-white text-sm">{movie.Director}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Cast</p>
            <p className="text-white text-sm">{movie.Actors}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Language</p>
            <p className="text-white text-sm">{movie.Language}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Country</p>
            <p className="text-white text-sm">{movie.Country}</p>
          </div>
          <button
            onClick={toggleWatchList}
            className={`px-6 py-3 rounded-lg font-bold ${isInWatchList ? "bg-yellow-900 text-gray-900" : "bg-gray-700 text-white hover:bg-gray-600"}`}
          >
            {isInWatchList ? "★ In Watchlist" : "☆ Add to Watchlist"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
