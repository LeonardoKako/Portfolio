import styled from "styled-components";
import { colors } from "../../style";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 3vw;
  box-shadow: 0 0 0 0.2px ${colors.white};
  @media (max-width: 1024px) {
    padding: 10vw;
  }
  p {
    text-align: center;
    font-size: 18px;

    @media (max-width: 1024px) {
      font-size: 22px;
    }
    @media (max-width: 768px) {
      font-size: 20px;
    }

    span {
      color: ${colors.blue};
      cursor: pointer;

      &:hover {
        filter: brightness(1.7);
      }
    }
  }
`;
