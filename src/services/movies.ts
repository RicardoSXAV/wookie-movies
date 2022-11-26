import { api } from "./api";

export interface Movie {
  id: string;
  title: string;
  slug: string;
  released_on: string;
  poster: string;
  overview: string;
  genres: string[];
  cast: string[];
  length: string;
  imdb_rating: number;
  director: string | string[];
  classification: string;
  backdrop: string;
}

export const getMovies = async (search?: string): Promise<Movie[]> => {
  const response = await api.get<{ movies: Movie[] }>(
    `/movies?q=${search || ""}`
  );

  return response.data.movies;
};

export const getMovieBySlug = async (slug: string): Promise<Movie> => {
  const response = await api.get<Movie>(`/movies/${slug}`);

  return response.data;
};
