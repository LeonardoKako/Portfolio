import { useContext, useEffect, useState } from "react";
import {
  DownloadLink,
  Language,
  MenuHamburguer,
  NameDesktop,
  NameMobile,
  Nav,
  NavDesktop,
  Navlinks,
  NavMobile,
} from "./style";
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

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <Nav className={isOpen ? "fixed" : ""}>
      <NameMobile
        onClick={() => setIsOpen(false)}
        to="/"
        className="mobile-name"
      >
        Leonardo
        <br />
        Fleith
      </NameMobile>
      <NameDesktop to="/" className="desktop-name">
        Leonardo Fleith
      </NameDesktop>
      <MenuHamburguer
        className={isOpen ? "active" : ""}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div />
        <div />
        <div />
      </MenuHamburguer>
      <NavDesktop>
        <Navlinks to="/about">{translations.about[lang]}</Navlinks>
        <Navlinks to="/projects">{translations.projects[lang]}</Navlinks>
        <Navlinks to="/abilities">{translations.abilities[lang]}</Navlinks>
        <Navlinks to="/contact">{translations.contact[lang]}</Navlinks>
        <DownloadLink onClick={downloadPDF}>
          {translations.education[lang]}
        </DownloadLink>
      </NavDesktop>
      <Language onClick={() => setEnglish(!english)}>
        {translations.language[lang]}
      </Language>
      {isOpen && (
        <NavMobile isOpen={isOpen}>
          <Navlinks onClick={() => setIsOpen(false)} to="/about">
            {translations.about[lang]}
          </Navlinks>
          <Navlinks onClick={() => setIsOpen(false)} to="/projects">
            {translations.projects[lang]}
          </Navlinks>
          <Navlinks onClick={() => setIsOpen(false)} to="/abilities">
            {translations.abilities[lang]}
          </Navlinks>
          <Navlinks onClick={() => setIsOpen(false)} to="/contact">
            {translations.contact[lang]}
          </Navlinks>
          <DownloadLink
            onClick={() => {
              downloadPDF();
              setIsOpen(false);
            }}
          >
            {translations.education[lang]}
          </DownloadLink>
        </NavMobile>
      )}
    </Nav>
  );
};

export default NavBar;
