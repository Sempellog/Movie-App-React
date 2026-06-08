import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-sky-900 text-slate-300 px-6 py-4 flex justify-between items-center">
      <NavLink to="/" className="font bold text-xl">
        🎬 MovieApp
      </NavLink>
      <div className="flex gap-6">
        <NavLink
          to="/search"
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold border border-white"
              : "text-slate-300 hover:text-white"
          }
        >
          Search
        </NavLink>
        <NavLink
          to="/WatchList"
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold border border-white"
              : "text-slate-300 hover:text-white"
          }
        >
          Watchlist
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
