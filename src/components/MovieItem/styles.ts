import { motion } from "framer-motion";
import styled from "styled-components";

export const MotionContainer = styled(motion.div)``;

export const PreviewImage = styled.img`
  width: 400px;
  border-radius: 15px;

  transition: all ease-in-out 0.1s;

  :hover {
    box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.8);
  }

  @media (max-width: 500px) {
    width: 200px;
  }
`;

export const ButtonWrapper = styled.button`
  border: none;
  background-color: transparent;

  transition: all ease-in-out 0.1s;

  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  :active {
    filter: brightness(0.8);
  }
`;
