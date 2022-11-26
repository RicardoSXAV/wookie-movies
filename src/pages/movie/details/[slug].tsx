import { GetStaticPaths, GetStaticProps } from "next";

import { getMovieBySlug, getMovies, Movie } from "../../../services/movies";
import {
  Column,
  DescriptionText,
  Header,
  MainContent,
  PageContainer,
  PosterImage,
  GrayText,
  SmallText,
} from "../../../styles/pages/movie-details.styles";
import Navbar from "../../../components/Navbar";
import RatingStars from "../../../components/RatingStars";

interface MovieDetailsProps {
  movie: Movie;
}

export default function MovieDetails({ movie }: MovieDetailsProps) {
  const {
    title,
    imdb_rating,
    released_on,
    length,
    director,
    overview,
    cast,
    poster,
  } = movie;

  const releasedYear = new Date(released_on).getFullYear();

  return (
    <PageContainer>
      <Navbar />

      <MainContent>
        <PosterImage src={poster} />

        <Column>
          <Header>
            {title} ({imdb_rating.toFixed(1)})
          </Header>

          <GrayText>
            {releasedYear} | {length} | {""}
            {typeof director === "string" ? director : director.join(", ")}
          </GrayText>

          <SmallText>
            <strong>Cast:</strong> {cast.join(", ")}
          </SmallText>

          <RatingStars
            rating={imdb_rating}
            containerStyle={{ marginTop: "20px" }}
          />

          <DescriptionText>{overview}</DescriptionText>
        </Column>
      </MainContent>
    </PageContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const movies = await getMovies();

  const paths = movies.map(({ slug }) => ({
    params: { slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const { params } = context;

    const movie = await getMovieBySlug(String(params?.slug));

    return {
      props: {
        movie,
      },
      revalidate: 120, // time to revalidate in seconds
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
