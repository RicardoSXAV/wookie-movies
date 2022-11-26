import { Movie } from "../services/movies";

export const getMoviesGenres = (movies: Movie[]) => {
  const genresSet = new Set<string>();

  for (const { genres } of movies) {
    for (const genre of genres) {
      genresSet.add(genre);
    }
  }

  return Array.from(genresSet);
};
