import styled from "styled-components";
import { colors } from "../../style";

export const Card = styled.div`
  width: 10vw;
  height: 10vw;
  padding: 0.5vw;
  border-radius: 20px;
  box-shadow: 0 0 0 0.2px ${colors.white};

  display: flex;
  flex-direction: column;
  gap: 0.7vw;
  align-items: center;
  transition: transform 0.3s ease;

  p {
    text-align: center;
    font-size: 20px;
    font-family: "Consolas", sans-serif;
  }

  img {
    max-width: 5.5vw;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
