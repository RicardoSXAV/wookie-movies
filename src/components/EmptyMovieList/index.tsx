import { Container, NotFoundText, PopcornIcon, Wrapper } from "./styles";

export default function EmptyMovieList() {
  return (
    <Container>
      <Wrapper>
        <PopcornIcon />

        <NotFoundText>No movie was found</NotFoundText>
      </Wrapper>
    </Container>
  );
}
