import { Desc, Header, SubTitle, Tags } from "./style";
import github from "../../../assets/images/contacts/github.svg";
import instagram from "../../../assets/images/contacts/instagram.svg";
import linkedin from "../../../assets/images/contacts/linkedin.svg";
import location from "../../../assets/others/location.svg";
import { Title } from "../../../style";

const HeaderHome = () => {
  return (
    <Header>
      <Title>Leonardo Fleith</Title>
      <div>
        <img src={location} alt="Location" />
        <SubTitle>Florianópolis, Brasil</SubTitle>
      </div>
      <Desc>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
        molestiae voluptatibus eius nemo quas tenetur, necessitatibus amet,
        doloribus est minus expedita.
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
