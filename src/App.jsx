import { Header } from "./components/Header/Header";
import { AppMovie } from "./pages/AppMovie";
import { Favorites } from "./pages/Favorites";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
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
  );
}

export default App;
