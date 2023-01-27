import { useRouter } from "next/router";

import { ButtonWrapper, MotionContainer, PreviewImage } from "./styles";

interface MovieItemProps {
  previewUrl: string;
  movieSlug: string;
  movieId: string;
}

export default function MovieItem({
  previewUrl,
  movieSlug,
  movieId,
}: MovieItemProps) {
  const router = useRouter();

  return (
    <ButtonWrapper
      id={movieId}
      onClick={() => router.push(`/movie/details/${movieSlug}`)}
    >
      <MotionContainer
        layout
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
      >
        <PreviewImage src={previewUrl} id={movieSlug} />
      </MotionContainer>
    </ButtonWrapper>
  );
}
