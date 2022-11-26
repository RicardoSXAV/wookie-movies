import { motion } from "framer-motion";
import styled from "styled-components";

export const HomeWrapper = styled.div``;

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 9rem;
  margin-bottom: 3rem;
`;

export const MotionListWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, auto));
  grid-column-gap: 20px;
  grid-row-gap: 15px;

  width: 95%;
  justify-content: center;

  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, auto));
  }
`;

export const GenresWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  gap: 10px;
  margin-bottom: 2rem;

  width: 100%;
  padding: 0 20px;
  overflow: auto;
`;

export const GenreButton = styled.button<{ active: boolean }>`
  padding: 0.5rem 1rem;

  background-color: ${({ active, theme }) =>
    active ? theme.colors.primaryRed : "transparent"};

  font-weight: ${({ active }) => (active ? "700" : "500")};
  color: ${({ theme }) => theme.colors.white};

  border: 2px solid ${({ theme }) => theme.colors.primaryRed};
  border-radius: 100px;
  transition: all ease-in-out 0.5s;

  :hover {
    cursor: pointer;
  }

  @media (max-width: 500px) {
    font-size: 0.7rem;
    padding: 0.3rem 0.6rem;
  }
`;
