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

  @media (min-width: 769px) and (max-width: 1024px) {
    flex-direction: column;
    gap: 3vh;
  }

  @media (max-width: 768px) {
    justify-content: space-between;
    gap: 3vh;
  }

  .active {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff;
  }
`;

export const NavDesktop = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Navlinks = styled(NavLink)`
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

export const NameMobile = styled(NavLink)`
  width: 90%;
  text-align: center;
  font-size: 22px;
  font-family: "ConsB", sans-serif;
  color: ${colors.white};
  transition: text-shadow 0.5s ease-in-out;

  &:hover {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export const NameDesktop = styled(NavLink)`
  width: 200px;
  text-align: center;
  font-size: 22px;
  font-family: "ConsB", sans-serif;
  color: ${colors.white};
  transition: text-shadow 0.5s ease-in-out;

  &:hover {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Language = styled.h1`
  width: 200px;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  font-family: "Consolas", sans-serif;
  cursor: pointer;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 24px;
    width: auto;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const MenuHamburguer = styled.div`
  width: 100%;
  max-width: 60px;
  height: 45px;
  position: relative;

  div {
    width: 100%;
    height: 6px;
    margin-top: -3px;
    background: ${colors.white};
    position: absolute;
    transform: translateY(-50%);
    border-radius: 99px;
    transition: 0.3s;
    transform: scale(1);

    &:nth-child(1) {
      top: 0;
    }
    &:nth-child(2) {
      top: 50%;
    }
    &:nth-child(3) {
      top: 100%;
    }
  }

  &.active {
    div:nth-child(1) {
      transform: rotate(45deg);
      top: 50%;
    }
    div:nth-child(3) {
      transform: rotate(-45deg);
      top: 50%;
    }
    div:nth-child(2) {
      transform: scale(0);
      opacity: 0;
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export const NavMobile = styled.ul<{ isOpen: boolean }>`
  position: fixed;
  width: 100%;
  height: 88vh;
  top: 13vh;
  left: 0;
  background-color: ${colors.bg};
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 25px;

  ${Navlinks}, ${DownloadLink} {
    font-size: 28px;
  }

  @media (min-width: 769px) {
    display: none;
  }

  @media (max-width: 400px) {
    top: 20vh;
  }
`;
