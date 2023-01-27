import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import { getMovies, Movie } from "../services/movies";
import { getMoviesGenres } from "../utils/movies";
import MovieItem from "../components/MovieItem";
import Navbar from "../components/Navbar";
import {
  GenreButton,
  HomeWrapper,
  MainContent,
  MotionListWrapper,
  GenresWrapper,
} from "../styles/pages/index.styles";
import useDebounce from "../hooks/useDebounce";
import EmptyMovieList from "../components/EmptyMovieList";

interface HomeProps {
  movies?: Movie[];
  genres?: string[];
}

export default function Home({ movies, genres }: HomeProps) {
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [selectedGenre, setSelectedGenre] = useState(genres?.[0]);
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearch = useDebounce(searchValue, 500);

  useEffect(() => {
    if (movies && selectedGenre) {
      setFilteredMovies(
        movies.filter(
          (movie) =>
            movie.genres.includes(selectedGenre) &&
            movie.title.toLowerCase().includes(debouncedSearch.toLowerCase())
        )
      );
    }
  }, [movies, selectedGenre, debouncedSearch]);

  const fullSearch = () => {
    setSelectedGenre("");

    if (movies) {
      setFilteredMovies(
        movies.filter((movie) =>
          movie.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    }
  };

  return (
    <HomeWrapper>
      <Navbar
        withSearch
        searchValue={searchValue}
        onSearchChange={(event) => setSearchValue(event.target.value)}
        fullSearch={fullSearch}
      />

      <MainContent>
        <GenresWrapper>
          {genres?.map((genre) => (
            <GenreButton
              key={genre}
              active={selectedGenre === genre}
              onClick={() => setSelectedGenre(genre)}
            >
              {genre}
            </GenreButton>
          ))}
        </GenresWrapper>

        {filteredMovies.length ? (
          <MotionListWrapper layout transition={{ duration: 0.1 }}>
            <AnimatePresence>
              {filteredMovies?.map(({ id, backdrop, slug }, index) => (
                <MovieItem
                  key={id}
                  movieId={`${selectedGenre?.toLowerCase()}-movie-${index}`}
                  previewUrl={backdrop}
                  movieSlug={slug}
                />
              ))}
            </AnimatePresence>
          </MotionListWrapper>
        ) : (
          <EmptyMovieList />
        )}
      </MainContent>
    </HomeWrapper>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const movies = await getMovies();
    const genres = getMoviesGenres(movies);

    return {
      props: {
        movies,
        genres,
      },
      revalidate: 60, // time to revalidate in seconds
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
