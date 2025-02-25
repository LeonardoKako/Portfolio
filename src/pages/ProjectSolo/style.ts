import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../style";

type Props = {
  img: string;
};

export const ProjectSoloPage = styled.section`
  width: 100%;
  padding: 80px 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
`;

export const Img = styled.div<Props>`
  width: 100%;
  height: 90vh;
  border-radius: 25px;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Card = styled.div`
  width: 80%;
  padding: 24px 32px;
  border-radius: 25px;
  box-shadow: 0 0 0 0.2px ${colors.white};
  display: flex;
  flex-direction: column;
  gap: 15px;

  > p {
    font-size: 18px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 20px;
`;

export const Button = styled(Link)`
  width: fit-content;
  padding: 10px 20px;
  background-color: ${colors.white};
  color: ${colors.bg};
  border: 1px solid black;
  border-radius: 20px;
  font-size: 18px;
  font-family: "ConsB", sans-serif;

  &:hover {
    filter: brightness(0.6);
  }
`;
