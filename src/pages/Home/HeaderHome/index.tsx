import { Desc, Header, SubTitle, Tags } from "./style";
import github from "../../../assets/images/contacts/github.svg";
import instagram from "../../../assets/images/contacts/instagram.svg";
import linkedin from "../../../assets/images/contacts/linkedin.svg";
import location from "../../../assets/others/location.svg";
import { Title } from "../../../style";
import { useContext } from "react";
import { SetLanguage } from "../../../context/SetLanguage";

const HeaderHome = () => {
  const context = useContext(SetLanguage);
  if (!context) {
    throw new Error(
      "useSetLanguage deve ser usado dentro de um SetLanguageProvider"
    );
  }
  const { english } = context;
  return (
    <Header>
      <Title>Leonardo Fleith</Title>
      <div>
        <img src={location} alt="Location" />
        <SubTitle>Florianópolis, Brasil</SubTitle>
      </div>
      <Desc>
        {english
          ? "Front-End Developer for 4 years, aspiring Full Stack. A proactive professional always seeking new challenges."
          : "Desenvolvedor Front-End há 4 anos, aspirante a Full Stack. Profissional com perfil proativo e sempre em busca de novos desafios."}
      </Desc>

      <Tags>
        <div
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/leonardo-jo%C3%A3o-fleith/",
              "_blank"
            )
          }
        >
          <img src={linkedin} alt="Linkedin" />
        </div>
        <div
          onClick={() =>
            window.open("https://github.com/LeonardoKako", "_blank")
          }
        >
          <img src={github} alt="Github" />
        </div>
        <div
          onClick={() =>
            window.open("https://www.instagram.com/kako.fleith/", "_blank")
          }
        >
          <img src={instagram} alt="Instagram" />
        </div>
      </Tags>
    </Header>
  );
};

export default HeaderHome;
