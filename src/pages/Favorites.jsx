import { MovieCard } from "../components/MovieCard/MovieCard";
import { NoMovies } from "../components/Movies/Movies";
import { useMovieContext } from "../context/MovieContext";

export const Favorites = () => {
  const { favorites } = useMovieContext();
  const lenMovies = favorites?.filter((movie) => movie.title).length ?? 0;
  const hasFavorites = lenMovies > 0;

  return (
    <main>
      <header className="flex items-center justify-between px-6 pt-6 mb-12 mt-5">
        <h2 className="font-['Inter'] text-sm font-semibold uppercase leading-5 tracking-[1.4px] text-[#FFB4AA]">
          FAVORITOS
        </h2>
        <span className="font-['Inter'] text-sm font-medium text-white/60">
          {lenMovies} {lenMovies === 1 ? "película" : "películas"}
        </span>
      </header>

      {hasFavorites ? (
        <section className="grid grid-cols-2 gap-3 p-6 md:grid-cols-3 lg:grid-cols-4">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              year={movie.year}
              image={movie.image}
            />
          ))}
        </section>
      ) : (
        <NoMovies />
      )}
    </main>
  );
};
