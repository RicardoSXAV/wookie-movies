import { ChangeEventHandler, InputHTMLAttributes } from "react";
import { CSSProperties } from "styled-components";

import { Container, SearchButton, SearchIcon, TextInput } from "./styles";

interface SearchInputProps {
  containerStyle?: CSSProperties;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  onSubmit?: () => void;
}

export default function SearchInput({
  containerStyle,
  value,
  onChange,
  placeholder,
  inputProps,
  onSubmit,
}: SearchInputProps) {
  return (
    <Container
      style={containerStyle}
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit?.();
      }}
    >
      <TextInput
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...inputProps}
      />

      <SearchButton>
        <SearchIcon />
      </SearchButton>
    </Container>
  );
}
