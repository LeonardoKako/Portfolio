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

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 15vw;
    height: 15vw;
    padding: 1.5vw;
  }

  @media (max-width: 768px) {
    width: 22vw;
    height: 22vw;
    justify-content: center;
    gap: 1vw;
  }

  p {
    text-align: center;
    font-size: 20px;
    font-family: "Consolas", sans-serif;

    @media (min-width: 769px) and (max-width: 1024px) {
      font-size: 18px;
    }
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  img {
    width: 5.5vw;
    @media (min-width: 769px) and (max-width: 1024px) {
      width: 8vw;
    }

    @media (max-width: 768px) {
      width: 10vw;
    }
  }

  &:hover {
    transform: scale(1.1);
  }
`;
