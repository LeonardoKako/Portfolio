import styled, { createGlobalStyle } from "styled-components";
import ConsB from "./assets/fonts/ConsolasB.ttf";
import Consolas from "./assets/fonts/Consolas.ttf";
import { Link } from "react-router-dom";

export const colors = {
  white: "#fff",
  bg: "#111111",
  gray: "#ADB5BD",
  blue: "#1f7a8c",
};

export const GlobalCss = createGlobalStyle`
    @font-face {
        font-family: 'ConsB';
        src: url(${ConsB}) format('truetype'); 
        font-weight: bold;
        font-style: normal;
    }

    @font-face {
        font-family: 'Consolas';
        src: url(${Consolas}) format('truetype');
        font-weight: bold;
        font-style: normal;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        text-decoration: none;
        list-style: none;
    }

    body {
        background-color: ${colors.bg};
        color: ${colors.white};
        font-family: 'Mercusuar', sans-serif; 
    }

    .mt80 {
        margin-top: 80px;
    }

    .mt40 {
        margin-top: 40px;
    }

    .gap40 {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  letter-spacing: 1.2px;
`;

export const LinkItem = styled(Link)`
  font-size: 20px;
  color: ${colors.blue};
  width: fit-content;
  padding: 0px 1vw 0px 0px;

  &:hover {
    filter: brightness(1.7);
  }
`;

export const Tags = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 15px;
  margin-bottom: 10px;
`;

export const Tag = styled.li`
  padding: 10px;
  box-shadow: 0 0 0 0.2px ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 15px;

  p {
    font-size: 20px;
  }

  img {
    width: 100%;
    max-width: 30px;
  }
`;
