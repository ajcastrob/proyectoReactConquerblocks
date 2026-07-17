import { useState } from "react";
import { getStoredFavorites } from "../utils/getStoredFavorites";

export const useFavoriteMovies = () => {
  const [favorites, setFavorites] = useState(getStoredFavorites);

  const toggleFavorite = (movie) => {
    setFavorites((prev) => {
      const next = prev.some((m) => m.id === movie.id)
        ? prev.filter((m) => m.id !== movie.id)
        : [...prev, movie];

      // Guardar el estado actualizado (no el anterior).
      // setFavorites es asíncrono: usar `favorites` aquí guardaría el valor viejo.
      localStorage.setItem("movies", JSON.stringify(next));
      return next;
    });
  };

  return { favorites, toggleFavorite };
};
