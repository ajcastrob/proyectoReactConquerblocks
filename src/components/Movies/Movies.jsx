import { MovieCard } from "../MovieCard/MovieCard";
import { useFavoriteMovies } from "../../Hooks/useFavoriteMovies";

export const MoviesList = ({ movies }) => {
  const { favorites, toggleFavorite } = useFavoriteMovies();

  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6  gap-3">
      {movies.map((movie) => (
        <MovieCard
          isFavorite={favorites.some((m) => m.id === movie.id)}
          onToggleFavorite={toggleFavorite}
          key={movie.id}
          id={movie.id}
          title={movie.title}
          year={movie.year}
          image={movie.image}
        />
      ))}
    </section>
  );
};

export const NoMovies = () => {
  return (
    <div className="flex justify-center text-white">
      <div class="max-w-md text-center">
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="mx-auto size-20 text-[#FFB4AA]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
          />
        </svg>

        <h2 class="mt-6 text-2xl font-bold text-gray-900 dark:text-white">
          No hay películas
        </h2>

        <p class="mt-4 text-pretty text-gray-700 dark:text-gray-200">
          Comienza ingresando el nombre de una película.
        </p>
      </div>
    </div>
  );
};

export const Movies = ({ movies }) => {
  const hasMovies = movies?.length > 0;

  return hasMovies ? <MoviesList movies={movies} /> : <NoMovies />;
};
