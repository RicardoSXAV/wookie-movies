import { ChangeEventHandler } from "react";
import { useRouter } from "next/router";

import SearchInput from "../SearchInput";
import { Container, Logo, SimplifiedLogo } from "./styles";
import useWindowDimensions from "../../hooks/useWindowDimensions";

interface NavbarProps {
  withSearch?: boolean;
  searchValue?: string;
  onSearchChange?: ChangeEventHandler<HTMLInputElement>;
  fullSearch?: () => void;
}

export default function Navbar({
  withSearch,
  searchValue,
  onSearchChange,
  fullSearch,
}: NavbarProps) {
  const router = useRouter();
  const { width } = useWindowDimensions();

  return (
    <Container>
      {Number(width) < 800 ? (
        <SimplifiedLogo />
      ) : (
        <Logo onClick={() => router.push("/")} />
      )}

      {withSearch && (
        <SearchInput
          containerStyle={{ marginRight: "50px" }}
          inputProps={{ id: "movie-search-input" }}
          placeholder="Search a movie..."
          value={searchValue}
          onChange={onSearchChange}
          onSubmit={fullSearch}
        />
      )}
    </Container>
  );
}
