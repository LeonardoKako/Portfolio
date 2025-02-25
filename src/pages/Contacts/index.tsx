import { Title } from "../../style";
import { ContactsPage } from "./style";
import git from "../../assets/images/contacts/github.svg";

const Contacs = () => {
  return (
    <ContactsPage>
      <div>
        <Title>Meus Contatos</Title>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
          consequatur voluptate nam alias
        </p>
        <ul>
          <li>
            <img src={git} alt="" />
            <h3>E-mail</h3>
            <p>fleithkako@gmail.com</p>
          </li>
          <li>
            <img src={git} alt="" />
            <h3>Whatsapp</h3>
            <p>+55 (48) 98835-2502</p>
          </li>
          <li>
            <img src={git} alt="" />
            <h3>Linkedin</h3>
            <p>Leonardo Fleith</p>
          </li>
        </ul>
      </div>
    </ContactsPage>
  );
};

export default Contacs;
