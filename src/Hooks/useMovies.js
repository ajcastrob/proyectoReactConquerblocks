import { useState, useRef } from "react";
import { searchMovies } from "../Services/api";

export const useMovies = ({ query, sort }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const previousMovies = useRef("");

  const getMovies = async () => {
    if (previousMovies.current === query) return;

    try {
      previousMovies.current = query;
      setError(null);
      setLoading(true);

      const { newMovies } = await searchMovies({ query });

      setMovies(newMovies);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const sortedMovies = sort
    ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
    : movies;

  return { movies: sortedMovies, getMovies, loading };
};
