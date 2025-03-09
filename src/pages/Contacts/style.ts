import styled from "styled-components";
import { colors, Title } from "../../style";

export const ContactsPage = styled.section`
  width: 100%;
  padding: 80px 20vw;
  min-height: 80vh;
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 80px 10vw;
    min-height: 68vh;
  }

  div {
    padding: 2.5vw;
    border-radius: 15px;
    box-shadow: 0 0 0 0.2px ${colors.white};
    @media (min-width: 768px) and (max-width: 1024px) {
      padding: 4vw;
    }
    > p {
      font-size: 20px;
      color: ${colors.gray};
      margin-bottom: 30px;

      @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 18px;
      }
    }
  }

  ${Title} {
    font-size: 40px;
    margin-bottom: 5px;

    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 36px;
    }
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

        @media (min-width: 768px) and (max-width: 1024px) {
          max-width: 8vw;
        }
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

export const CustomAlert = styled.div`
  position: fixed;
  bottom: 10vh;
  right: 0;
  transform: translateX(-50%);
  background-color: ${colors.bg || "#333"};
  color: white;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  opacity: 0.9;
  animation: fadeIn 3.1s ease-in-out;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateX(-50%) translateY(100px);
    }
    30% {
      opacity: 0.9;
      transform: translateX(-50%) translateY(0);
    }
    70% {
      opacity: 0.9;
      transform: translateX(-50%) translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateX(-50%) translateY(100px);
    }
  }
`;
