import { useContext, useState } from "react";
import { Title } from "../../style";
import { ContactsPage, CustomAlert } from "./style";
import { SetLanguage } from "../../context/SetLanguage";

import mail from "../../assets/images/contacts/mail.svg";
import wpp from "../../assets/images/contacts/phone.svg";
import linkedin from "../../assets/images/contacts/linkedin.svg";

const translations = {
  title: { pt: "Meus Contatos", en: "My Contacts" },
  description: {
    pt: "Você pode me contatar via E-mail, Whatsapp ou Linkedin. Geralmente respondo em um dia.",
    en: "You can contact me via Email, Whatsapp or Linkedin. I usually respond within a day.",
  },
  email: { pt: "Email", en: "Email" },
  whatsapp: { pt: "Whatsapp", en: "Whatsapp" },
  linkedin: { pt: "Linkedin", en: "Linkedin" },
  alert: { pt: "Email copiado!", en: "Email copied! " },
};

const Contacts = () => {
  const [alertVisible, setAlertVisible] = useState(false);
  const context = useContext(SetLanguage);
  if (!context) {
    throw new Error(
      "useSetLanguage deve ser usado dentro de um SetLanguageProvider"
    );
  }
  const { english } = context;
  const lang = english ? "en" : "pt";

  const copyText = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => setAlertVisible(true))
      .catch((err) => console.error("Erro ao copiar texto: ", err));
    setTimeout(() => setAlertVisible(false), 3000);
  };

  return (
    <ContactsPage>
      <div>
        <Title>{translations.title[lang]}</Title>
        <p>{translations.description[lang]}</p>
        <ul>
          <li onClick={() => copyText("fleithkako@gmail.com")}>
            <img src={mail} alt="E-mail Icon" />
            <h3>{translations.email[lang]}</h3>
            <p>fleithkako@gmail.com</p>
          </li>
          <li
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send/?phone=%2B5548988352502&text&type=phone_number&app_absent=0",
                "_blank"
              )
            }
          >
            <img src={wpp} alt="WhatsApp Icon" />
            <h3>{translations.whatsapp[lang]}</h3>
            <p>+55 (48) 98835-2502</p>
          </li>
          <li
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/leonardo-jo%C3%A3o-fleith/",
                "_blank"
              )
            }
          >
            <img src={linkedin} alt="LinkedIn Icon" />
            <h3>{translations.linkedin[lang]}</h3>
            <p>Leonardo Fleith</p>
          </li>
        </ul>
      </div>
      {alertVisible && <CustomAlert>{translations.alert[lang]}</CustomAlert>}
    </ContactsPage>
  );
};

export default Contacts;
