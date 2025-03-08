import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../style";

export const Nav = styled.nav`
  width: 100%;
  padding: 32px;
  min-height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .active {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;

export const Name = styled(NavLink)`
  width: 200px;
  text-align: center;
  font-size: 22px;
  font-family: "ConsB", sans-serif;
  color: ${colors.white};
  transition: text-shadow 0.5s ease-in-out;
  &:hover {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff;
  }
`;

export const Navlink = styled(NavLink)`
  font-size: 20px;
  font-family: "Consolas", sans-serif;
  color: ${colors.white};
  transition: text-shadow 0.25s ease-in-out;

  &:hover {
    text-shadow: 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #fff;
  }
`;

export const DownloadLink = styled.a`
  font-size: 20px;
  font-family: "Consolas", sans-serif;
  color: ${colors.white};
  transition: text-shadow 0.25s ease-in-out;
  cursor: pointer;

  &:hover {
    text-shadow: 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #fff;
  }
`;

export const Language = styled.h1`
  width: 200px;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  font-family: "Consolas", sans-serif;
  cursor: pointer;
`;
