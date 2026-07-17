import { useState, useRef } from "react";
import { searchMovies } from "../Services/api";

export const useMovies = ({ query, sort }) => {
  const [movies, setMovies] = useState([]);
  const previousMovies = useRef("");

  const getMovies = async () => {
    if (previousMovies.current === query) return;

    previousMovies.current = query;

    const { newMovies } = await searchMovies({ query });

    setMovies(newMovies);
  };

  const sortedMovies = sort
    ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
    : movies;

  return { movies: sortedMovies, getMovies };
};
