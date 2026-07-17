export const searchMovies = async ({ query }) => {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=bd5ae4df&s=${query}`,
    );

    const data = await response.json();

    const dataMovies = data.Search;

    const newMovies = dataMovies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster,
    }));

    return { newMovies };
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
};
