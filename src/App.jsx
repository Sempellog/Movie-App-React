import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Search from "./pages/Search";
import WatchList from "./pages/WatchList";
import Navbar from "./components/Navbar";
import "./App.css";
import { useState } from "react";

function App() {
  const [watchList, setWatchList] = useState([]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/search"
          element={<Search watchList={watchList} setWatchList={setWatchList} />}
        />
        <Route
          path="/movie/:id"
          element={
            <MovieDetail watchList={watchList} setWatchList={setWatchList} />
          }
        />
        <Route
          path="/WatchList"
          element={
            <WatchList watchList={watchList} setWatchList={setWatchList} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
