import "./App.css";
import Favorites from "./Favorites";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./MovieContext";
import NavBar from "./NavBar";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
