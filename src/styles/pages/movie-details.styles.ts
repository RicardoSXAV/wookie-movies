import styled from "styled-components";

export const PageContainer = styled.div``;

export const MainContent = styled.main`
  display: flex;
  align-items: flex-start;
  gap: 3rem;

  width: 70%;
  padding-top: 8rem;
  margin: auto;
  margin-bottom: 3rem;

  @media (max-width: 1000px) {
    width: 85%;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 700px) {
    justify-content: center;
    align-items: center;
  }
`;

export const PosterImage = styled.img`
  width: 300px;

  @media (max-width: 1000px) {
    width: 220px;
  }

  border-radius: 20px;
  box-shadow: 0px 10px 20px 1px rgba(0, 0, 0, 0.5);
`;

export const Header = styled.h1`
  @media (max-width: 1000px) {
    font-size: 1.5rem;
  }
`;

export const DescriptionText = styled.p`
  margin-top: 3rem;

  font-weight: 300;

  @media (max-width: 1000px) {
    font-size: 0.8rem;
    margin-top: 2rem;
  }
`;

export const GrayText = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray};

  @media (max-width: 1000px) {
    font-size: 0.9rem;
  }
`;

export const SmallText = styled.p`
  margin-top: 0.5rem;

  font-size: 0.9rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.mediumGray};

  strong {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.lightGray};
  }

  @media (max-width: 1000px) {
    font-size: 0.8rem;
  }
`;
