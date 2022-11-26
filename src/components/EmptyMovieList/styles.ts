import styled from "styled-components";

import popcornIcon from "../../assets/icons/popcorn.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin-top: 2rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  gap: 20px;

  width: 50%;
  padding: 5rem;

  background-color: ${({ theme }) => theme.colors.darkGray};
  box-shadow: 0px 0px 25px 1px rgba(0, 0, 0, 0.4);
  border-radius: 40px;

  @media (max-width: 800px) {
    width: 80%;
    padding: 3rem 1rem;
  }
`;

export const PopcornIcon = styled(popcornIcon)`
  width: 150px;

  @media (max-width: 800px) {
    width: 120px;
  }

  filter: drop-shadow(0 0 0.75rem #e50913);
`;

export const NotFoundText = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  font-weight: 600;
  font-size: 1.4rem;

  filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.5));

  @media (max-width: 800px) {
    font-size: 1.2rem;
  }
`;
