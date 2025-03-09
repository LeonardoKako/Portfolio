import styled from "styled-components";
import { colors, Title } from "../../style";

export const ContactsPage = styled.section`
  width: 100%;
  padding: 80px 20vw;
  min-height: 80vh;
  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 80px 10vw;
    min-height: 68vh;
  }
  @media (max-width: 768px) {
    padding: 80px 10vw;
    min-height: 70vh;
  }

  div {
    padding: 2.5vw;
    border-radius: 15px;
    box-shadow: 0 0 0 0.2px ${colors.white};
    @media (min-width: 769px) and (max-width: 1024px) {
      padding: 4vw;
    }
    @media (max-width: 768px) {
      padding: 5vw;
    }
    > p {
      font-size: 20px;
      color: ${colors.gray};
      margin-bottom: 30px;

      @media (max-width: 1024px) {
        font-size: 18px;
      }
    }
  }

  ${Title} {
    font-size: 40px;
    margin-bottom: 5px;

    @media (min-width: 769px) and (max-width: 1024px) {
      font-size: 36px;
    }
    @media (max-width: 768px) {
      font-size: 34px;
    }
  }

  ul {
    margin-top: 2vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
      flex-wrap: wrap;
      gap: 25px;
    }

    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5px;
      width: 100%;
      transition: transform 0.3s ease;
      cursor: pointer;
      @media (max-width: 768px) {
        width: 40%;
      }

      &:nth-child(3) {
        @media (max-width: 768px) {
          width: 100%;
        }
      }

      &:hover {
        transform: scale(1.1);
      }

      img {
        max-width: 5.5vw;

        @media (min-width: 769px) and (max-width: 1024px) {
          max-width: 8vw;
        }

        @media (max-width: 768px) {
          max-width: 10vw;
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

        @media (max-width: 768px) {
          font-size: 14px;
        }
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
