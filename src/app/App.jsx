import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/layout/Navbar.jsx";
import { WatchlistProvider } from "../context/WatchlistContext.jsx";
import Home from "../pages/Home.jsx";
import MovieDetail from "../pages/MovieDetail.jsx";
import Watchlist from "../pages/Watchlist.jsx";

function App() {
  return (
    <WatchlistProvider>
      <BrowserRouter>
        <div className="app-shell d-flex flex-column">
          <Navbar />
          <main className="main-shell container-xl">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie/:imdbID" element={<MovieDetail />} />
              <Route path="/watchlist" element={<Watchlist />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </WatchlistProvider>
  );
}

export default App;
