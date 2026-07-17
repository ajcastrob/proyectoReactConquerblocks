import { createContext, useContext } from "react";
import { useFavoriteMovies } from "../Hooks/useFavoriteMovies";

export const MovieContext = createContext(null);

export const MovieProvider = ({ children }) => {
  const { favorites, toggleFavorite } = useFavoriteMovies();

  return (
    <MovieContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => {
  const ctx = useContext(MovieContext);
  if (!ctx) {
    throw new Error("useMovieContext debe usarse dentro de <MovieProvider>");
  }
  return ctx;
};
