import { useContext } from "react";
import { Container } from "./style";
import { SetLanguage } from "../../context/SetLanguage";

const translations = {
  copyright: {
    pt: "© 2025 Leonardo Fleith | Todos os direitos reservados.",
    en: "© 2025 Leonardo Fleith | All rights reserved.",
  },
  github: {
    pt: "Confira mais projetos no meu ",
    en: "Check out more projects on my ",
  },
};

const Footer = () => {
  const context = useContext(SetLanguage);
  if (!context) {
    throw new Error(
      "useSetLanguage deve ser usado dentro de um SetLanguageProvider"
    );
  }
  const { english } = context;
  const lang = english ? "en" : "pt";

  return (
    <Container>
      <p>{translations.copyright[lang]}</p>
      <p>
        {translations.github[lang]}
        <span
          onClick={() =>
            window.open("https://github.com/LeonardoKako", "_blank")
          }
        >
          Github.
        </span>
      </p>
    </Container>
  );
};

export default Footer;
