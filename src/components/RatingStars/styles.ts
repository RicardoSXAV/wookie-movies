import styled from "styled-components";

import fullStar from "../../assets/icons/full-star.svg";
import halfStar from "../../assets/icons/half-star.svg";
import emptyStar from "../../assets/icons/empty-star.svg";

export const Container = styled.div`
  display: flex;
`;

export const FullStar = styled(fullStar)`
  width: 20px;
`;

export const HalfStar = styled(halfStar)`
  width: 20px;
`;

export const EmptyStar = styled(emptyStar)`
  width: 20px;
`;
