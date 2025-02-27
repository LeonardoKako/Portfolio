import { useContext } from "react";
import { Title } from "../../style";
import { ContactsPage } from "./style";
import { SetLanguage } from "../../context/SetLanguage";

import git from "../../assets/images/contacts/github.svg";
import wpp from "../../assets/images/contacts/phone.svg";
import linkedin from "../../assets/images/contacts/linkedin.svg";

const translations = {
  title: { pt: "Meus Contatos", en: "My Contacts" },
  description: {
    pt: "Você pode me contatar via E-mail, Whatsapp ou Linkedin. Geralmente respondo em um dia.",
    en: "You can contact me via Email, Whatsapp or Linkedin. I usually respond within a day.",
  },
  email: { pt: "E-mail", en: "Email" },
  whatsapp: { pt: "Whatsapp", en: "Whatsapp" },
  linkedin: { pt: "Linkedin", en: "LinkedIn" },
};

const Contacts = () => {
  const context = useContext(SetLanguage);
  if (!context) {
    throw new Error(
      "useSetLanguage deve ser usado dentro de um SetLanguageProvider"
    );
  }
  const { english } = context;
  const lang = english ? "en" : "pt";

  return (
    <ContactsPage>
      <div>
        <Title>{translations.title[lang]}</Title>
        <p>{translations.description[lang]}</p>
        <ul>
          <li>
            <img src={git} alt="GitHub Icon" />
            <h3>{translations.email[lang]}</h3>
            <p>fleithkako@gmail.com</p>
          </li>
          <li>
            <img src={wpp} alt="WhatsApp Icon" />
            <h3>{translations.whatsapp[lang]}</h3>
            <p>+55 (48) 98835-2502</p>
          </li>
          <li>
            <img src={linkedin} alt="LinkedIn Icon" />
            <h3>{translations.linkedin[lang]}</h3>
            <p>Leonardo Fleith</p>
          </li>
        </ul>
      </div>
    </ContactsPage>
  );
};

export default Contacts;
