import styled from "styled-components";
import { Title } from "../../../style";

export const Container = styled.section`
  width: 100%;
  margin-top: 80px;
  margin-bottom: 80px;
  overflow: hidden;
  white-space: nowrap;
  position: relative;

  ${Title} {
    @media (max-width: 768px) {
      max-width: 80px;
    }
  }

  > div {
    margin-top: 40px;
    position: relative;

    &::after,
    &::before {
      content: "";
      position: absolute;
      top: 0;
      width: 35%; /* Largura do fade */
      height: 100%;
      pointer-events: none;
      z-index: 1;

      @media (max-width: 768px) {
        width: 45%;
      }
    }

    &::before {
      left: 0;
      background: linear-gradient(to right, #111111, rgba(17, 17, 17, 0));
    }

    &::after {
      right: 0;
      background: linear-gradient(to left, #111111, rgba(17, 17, 17, 0));
    }
  }
`;

export const ListItem = styled.ul`
  margin-top: 15px;
  display: flex;
  white-space: nowrap;
  width: max-content;
  gap: 2vw;

  @media (max-width: 768px) {
    margin-top: 0px;
  }

  &:first-child {
    animation: slideLeft 30s linear infinite;
    margin-bottom: 40px;
  }

  &:last-child {
    animation: slideRight 30s linear infinite;
  }

  &:hover {
    animation-play-state: paused;
  }

  @keyframes slideLeft {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-50%);
    }
  }

  @keyframes slideRight {
    from {
      transform: translateX(-50%);
    }
    to {
      transform: translateX(0%);
    }
  }
`;
