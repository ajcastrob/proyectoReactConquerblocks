import { useState } from "react";
import { useMovies } from "../Hooks/useMovies";
import { useQuery } from "../Hooks/useQuery";
import { Movies } from "../components/Movies/Movies.jsx";

export const AppMovie = () => {
  const { query, error, setQuery } = useQuery();
  const [sort, setSort] = useState(false);
  const { movies, getMovies, loading } = useMovies({ query, sort });

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies();
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <main>
      <form
        className="flex justify-center items-center mt-10"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="query"
          value={query}
          onChange={handleChange}
          placeholder="Buscar películas..."
          aria-label="Buscar"
          className=" w-[350px] h-14 pl-12 pr-4 py-[17px] font-['Inter'] text-base font-normal not-italic text-[#E5E2E5] bg-[#1C1B1B] border border-[#5E3F5C] border-r-0 rounded-tl-[12px] placeholder:text-[#E5E2E5] placeholder:opacity-70 focus:outline-none focus:border-[#7A5275] transition-colors"
        />
        <button
          type="submit"
          aria-label="Buscar"
          className="h-14 px-4 flex items-center justify-center bg-[#1C1B1B] border border-[#5E3F5C] border-l-0 rounded-tr-[12px] text-[#E5E2E5] hover:bg-[#252424] focus:outline-none focus:border-[#7A5275] transition-colors cursor-pointer"
        >
          <i className="ri-search-line text-xl"></i>
        </button>
      </form>

      {error && (
        <p className="text-center mt-10 text-sm text-[#FFB4AA] font-['Inter']">
          {error}
        </p>
      )}

      <div className="mt-4 flex justify-end">
        <button
          onClick={() => setSort(!sort)}
          aria-pressed={sort}
          className="flex items-center mr-6 gap-1 rounded-full bg-[#353535] px-6 py-3 font-['Inter'] text-sm font-medium text-[#FFB4AA] hover:bg-[#454545] focus:outline-none focus:ring-1 focus:ring-[#FFB4AA]/40 active:bg-[#2D2D2D] transition-colors cursor-pointer"
        >
          <i className="ri-sort-alphabet-asc text-[18px] leading-none"></i>
          Sort
        </button>
      </div>

      <div className="mt-10">
        {loading ? (
          <div role="status" aria-label="Loading">
            <svg
              className="mx-auto size-8 animate-spin text-[#FFB4AA] "
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>

              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        ) : (
          <Movies movies={movies} />
        )}
      </div>
    </main>
  );
};
