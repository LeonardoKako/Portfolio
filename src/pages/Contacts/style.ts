import styled from "styled-components";
import { colors, Title } from "../../style";

export const ContactsPage = styled.section`
  width: 100%;
  padding: 80px 20vw;

  div {
    padding: 2.5vw;
    border-radius: 15px;
    box-shadow: 0 0 0 0.2px ${colors.white};
  }

  ${Title} {
    font-size: 50px;
    margin-bottom: 5px;
  }

  > p {
    font-size: 18px;
    color: ${colors.gray};
  }

  ul {
    margin-top: 2vw;
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5px;
      width: 100%;
      transition: transform 0.3s ease;
      cursor: pointer;

      &:hover {
        transform: scale(1.1);
      }

      img {
        max-width: 5.5vw;
      }

      h3 {
        margin-top: 10px;
        font-size: 22px;
        font-family: "Consolas", sans-serif;
      }

      p {
        font-size: 16px;
        color: ${colors.gray};
      }
    }
  }
`;
