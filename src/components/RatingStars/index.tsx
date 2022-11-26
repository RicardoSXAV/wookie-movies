import { CSSProperties } from "styled-components";

import { Container, EmptyStar, FullStar, HalfStar } from "./styles";

interface RatingStarsProps {
  rating: number;
  containerStyle?: CSSProperties;
}

export default function RatingStars({
  rating,
  containerStyle,
}: RatingStarsProps) {
  const fullStars = Math.floor(rating / 2);
  const halfStars = rating / 2 - fullStars >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <Container style={containerStyle}>
      {Array(fullStars)
        .fill("")
        .map(() => (
          <FullStar />
        ))}

      {Array(halfStars)
        .fill("")
        .map(() => (
          <HalfStar />
        ))}

      {Array(emptyStars)
        .fill("")
        .map(() => (
          <EmptyStar />
        ))}
    </Container>
  );
}
