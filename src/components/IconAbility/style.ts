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
  justify-content: space-between;
  gap: 0.7vw;
  align-items: center;
  transition: transform 0.3s ease;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 15vw;
    height: 15vw;
    padding: 1.5vw;
  }

  p {
    text-align: center;
    font-size: 20px;
    font-family: "Consolas", sans-serif;

    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 18px;
    }
  }

  img {
    width: 5.5vw;
    @media (min-width: 768px) and (max-width: 1024px) {
      width: 8vw;
    }
  }

  &:hover {
    transform: scale(1.1);
  }
`;
