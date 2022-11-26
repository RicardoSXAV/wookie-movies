import styled from "styled-components";

import searchIcon from "../../assets/icons/search.svg";

export const Container = styled.form`
  display: flex;
  justify-content: space-between;

  width: 20rem;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
`;

export const TextInput = styled.input`
  width: 100%;
  padding: 0.6rem 1rem;

  border: none;
  outline: none;
  border-radius: 12px;
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;

  padding: 0 10px;

  background-color: ${({ theme }) => theme.colors.gray};
  border: none;
  border-radius: 0 12px 12px 0;

  transition: all ease-in-out 0.2s;

  :hover {
    cursor: pointer;
    filter: brightness(1.1);
  }

  :active {
    filter: brightness(0.9);
  }
`;

export const SearchIcon = styled(searchIcon)`
  width: 20px;
  fill: ${({ theme }) => theme.colors.primaryRed};
`;
