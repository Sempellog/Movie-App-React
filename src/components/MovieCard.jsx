function MovieCard({ movie, watchList, setWatList, onClick }) {
  const isInWatchList = watchList.some((m) => m.imdbID === movie.imdbID);
  const toggleWatchList = (e) => {
    e.stopPropagation();

    if (isInWatchList) {
      setWatchList((prev) => prev.filter((m) => m.imdbID !== movie.imdbID));
    } else {
      setWatchList((prev) => [...prev, movie]);
    }
  };

  return (
    <div
      onClick={onClick}
      className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform relative"
    >
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x450?text=No+Poster"
        }
        alt={movie.title}
        className="w-full h-64 object-cover"
      />
      <button
        onClick={toggleWatchList}
        className="absolute top-3 right-1 bg-black bg-opacity-70 rounded-full text-white w-8 h-8 items-center justify-center hover:bg-yellow-400 hover:text-gray-600"
      >
        {isInWatchList ? "★" : "☆"}
      </button>
      <div className="p-3">
        <p className="text-white font-bold text-sm truncate">{movie.Title}</p>
        <p className="text-gray-400 text-xs">{movie.Year}</p>
      </div>
    </div>
  );
}

export default MovieCard;
