import { useContext } from "react";
import { DownloadLink, Language, Name, Nav, Navlink } from "./style";
import { SetLanguage } from "../../context/SetLanguage";

const translations = {
  about: { pt: "Sobre mim", en: "About me" },
  projects: { pt: "Projetos", en: "Projects" },
  education: { pt: "Currículo", en: "Resume" },
  abilities: { pt: "Habilidades", en: "Skills" },
  contact: { pt: "Contato", en: "Contact" },
  cv: {
    pt: "../../../CV-Português.pdf",
    en: "../../../CV-English.pdf",
  },
  language: { pt: "English", en: "Português" },
};

const NavBar = () => {
  const context = useContext(SetLanguage);
  if (!context) {
    throw new Error(
      "useSetLanguage deve ser usado dentro de um SetLanguageProvider"
    );
  }
  const { english, setEnglish } = context;
  const lang = english ? "en" : "pt";

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = translations.cv[lang];
    link.download = "CV-Leonardo";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Nav>
      <Name to="/">Leonardo Fleith</Name>
      <div>
        <Navlink to="/about">{translations.about[lang]}</Navlink>
        <Navlink to="/projects">{translations.projects[lang]}</Navlink>
        <Navlink to="/abilities">{translations.abilities[lang]}</Navlink>
        <Navlink to="/contact">{translations.contact[lang]}</Navlink>
        <DownloadLink onClick={downloadPDF}>
          {translations.education[lang]}
        </DownloadLink>
      </div>
      <Language onClick={() => setEnglish(!english)}>
        {translations.language[lang]}
      </Language>
    </Nav>
  );
};

export default NavBar;
