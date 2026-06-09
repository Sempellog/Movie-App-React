import { useNavigate } from 'react-router-dom'

function WatchList({ watchList, setWatchList }) {
const navigate = useNavigate()
const removeMovie = (id) => setWatchList(prev => prev.filter(m => m.imdbID !== id))

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
              onClick={() => navigate(/search)}
              className="mt-4 bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-bold hover:bg-yellow-300"
              >
              Find Movies
            </button>
          </div>)}
          {watchList > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            </div>
          )}
      </div>
    </div>
    )
}

export default WatchList;
