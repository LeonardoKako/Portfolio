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

  .active {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
  }
`;

export const Name = styled(NavLink)`
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

export const Language = styled.h1`
  font-size: 22px;
  font-weight: bold;
  font-family: "Consolas", sans-serif;
  cursor: pointer;
`;
