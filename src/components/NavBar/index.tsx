import { useContext } from "react";
import { Language, Name, Nav, Navlink } from "./style";
import { SetLanguage } from "../../context/SetLanguage";

const translations = {
  about: { pt: "Sobre mim", en: "About me" },
  projects: { pt: "Projetos", en: "Projects" },
  education: { pt: "Formação", en: "Education" },
  abilities: { pt: "Habilidades", en: "Skills" },
  contact: { pt: "Contato", en: "Contact" },
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

  return (
    <Nav>
      <Name to="/">Leonardo Fleith</Name>
      <div>
        <Navlink to="/about">{translations.about[lang]}</Navlink>
        <Navlink to="/projects">{translations.projects[lang]}</Navlink>
        <Navlink to="/education">{translations.education[lang]}</Navlink>
        <Navlink to="/abilities">{translations.abilities[lang]}</Navlink>
        <Navlink to="/contact">{translations.contact[lang]}</Navlink>
      </div>
      <Language onClick={() => setEnglish(!english)}>
        {translations.language[lang]}
      </Language>
    </Nav>
  );
};

export default NavBar;
