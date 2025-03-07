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
          ? "Front-end Developer in training at EBAC – British School of Creative Arts and Technology, pursuing a degree in Systems Analysis and Development at Cesusc. A professional with a proactive profile."
          : "Desenvolvedor Front-end em formação pela EBAC – Escola Britânica de Artes Criativas e Tecnologia, graduando em Análise e Desenvolvimento de Sistemas no Cesusc. Profissional com perfil proativo."}
      </Desc>

      <Tags>
        <div>
          <img src={linkedin} alt="Linkedin" />
        </div>
        <div>
          <img src={github} alt="Github" />
        </div>
        <div>
          <img src={instagram} alt="Instagram" />
        </div>
      </Tags>
    </Header>
  );
};

export default HeaderHome;
