import { Container, NotFoundText, PopcornIcon, Wrapper } from "./styles";

export default function EmptyMovieList() {
  return (
    <Container>
      <Wrapper>
        <PopcornIcon />

        <NotFoundText id="not-found-text">No movie was found</NotFoundText>
      </Wrapper>
    </Container>
  );
}
