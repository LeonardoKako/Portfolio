import styled from "styled-components";
import { colors, Title } from "../../../style";

export const Header = styled.div`
  width: 100%;
  padding: 24px;
  min-height: 100px;
  border-radius: 10px;
  box-shadow: 0 0 0 0.2px ${colors.white};
  position: relative;

  @media (max-width: 768px) {
    padding: 16px;

    ${Title} {
      width: 30px;

      @media (max-width: 400px) {
        font-size: 28px;
      }
      @media (max-width: 350px) {
        font-size: 26px;
      }
    }
  }

  > div {
    display: flex;
    justify-content: start;
    align-items: end;

    > img {
      width: 100%;
      max-width: 24px;
      margin-right: 8px;
    }
  }
`;

export const SubTitle = styled.h2`
  font-size: 22px;
  color: ${colors.gray};
  margin-top: 12px;
`;

export const Desc = styled.p`
  font-size: 22px;
  margin-top: 20px;
  font-weight: 300;
  letter-spacing: 1.1px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Tags = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  position: absolute;
  right: 24px;
  top: 24px;
  min-width: 200px;
  min-height: 50px;

  @media (max-width: 768px) {
    gap: 12px;
    right: 16px;
    top: 16px;
    min-width: 50px;
  }

  div {
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 0 0.2px ${colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #212529;
    }
  }

  img {
    width: 100%;
    max-width: 24px;

    @media (max-width: 768px) {
      max-width: 20px;
    }
  }
`;
