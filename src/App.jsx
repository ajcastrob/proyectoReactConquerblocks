import { Header } from "./components/Header/Header";
import { AppMovie } from "./pages/AppMovie";
import { Favorites } from "./pages/Favorites";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { MovieProvider } from "./context/MovieContext";

function App() {
  return (
    <MovieProvider>
      <div className="mx-auto max-w-5xl">
        <Header />

        <div>
          <Routes>
            <Route path="/" element={<AppMovie />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </div>
    </MovieProvider>
  );
}

export default App;
