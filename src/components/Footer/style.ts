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

  p {
    text-align: center;
    font-size: 18px;

    span {
      color: ${colors.blue};
      cursor: pointer;

      &:hover {
        filter: brightness(1.7);
      }
    }
  }
`;
