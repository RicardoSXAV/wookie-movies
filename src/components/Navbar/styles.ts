import styled from "styled-components";

import wookieLogo from "../../assets/icons/wookie-logo.svg";
import simplifiedWookieLogo from "../../assets/icons/wookie-simplified-logo.svg";

export const Container = styled.div`
  position: fixed;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 6rem;

  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
`;

export const Logo = styled(wookieLogo)`
  width: 100px;
  margin: 0 2rem;

  :hover {
    cursor: pointer;
  }
`;

export const SimplifiedLogo = styled(simplifiedWookieLogo)`
  width: 50px;
  height: 50px;
  margin: 0 2rem;

  :hover {
    cursor: pointer;
  }
`;
