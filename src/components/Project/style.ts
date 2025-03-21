import styled from "styled-components";
import { colors } from "../../style";

type Props = {
  img: string;
};

export const Card = styled.div<Props>`
  width: 100%;
  height: 85vh;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  position: relative;
  box-shadow: 0 0 0 0.2px ${colors.white};
  border-radius: 15px;
  background-color: gray;
  overflow: hidden;
  cursor: pointer;

  @media (min-width: 768px) and (max-width: 1024px) {
    height: 45vh;
  }

  @media (max-width: 768px) {
    height: 30vh;
    padding: 16px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${({ img }) => `url(${img})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: transform 0.3s ease-in-out;
    transform: scale(1);
  }

  &:hover::before {
    transform: scale(1.1);
  }

  h1 {
    font-size: 22px;
    margin-bottom: 15px;

    @media (max-width: 400px) {
      margin-bottom: 5px;
    }
  }

  > p {
    color: ${colors.gray};
    font-size: 20px;
    z-index: 3;
  }
`;

export const Div = styled.div`
  transition: transform 0.3s ease-in-out;
  z-index: 3;
  ${Card}:hover & {
    transform: translate(0%, -30%);
    @media (max-width: 1024px) {
      transform: translate(0%, -10%);
    }
  }
`;

export const ShadowBlack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgb(17, 17, 17);
  background: linear-gradient(
    180deg,
    rgba(17, 17, 17, 0) 0%,
    rgba(17, 17, 17, 0.92) 75%
  );
  border-radius: 15px;
  opacity: 0.9;

  z-index: 1;
`;

export const ShadowWhite = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  box-shadow: inset 0 -5px 100px white;
  border-radius: 15px;
  opacity: 0.15;
  z-index: 2;
`;

export const Button = styled.button`
  position: absolute;
  bottom: -3vw; /* Começa fora da tela */
  left: 2vw;
  background: ${colors.white};
  color: ${colors.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1px solid ${colors.bg};
  border-radius: 15px;
  padding: 4px 16px;
  font-size: 15px;
  opacity: 0;
  z-index: 3;
  transition: transform 0.3s ease, opacity 0.3s ease-in;
  cursor: pointer;

  ${Card}:hover & {
    opacity: 1;
    transform: translate(0%, -240%);
  }

  img {
    width: 100%;
    max-width: 20px;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;
