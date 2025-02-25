import { Language, Name, Nav, Navlink } from "./style";

const NavBar = () => {
  return (
    <Nav>
      <Name to="/">Leonardo Fleith</Name>
      <div>
        <Navlink to="/about">Sobre mim</Navlink>
        <Navlink to="/projects">Projetos</Navlink>
        <Navlink to="/education">Formação</Navlink>
        <Navlink to="/abilities">Habilidades</Navlink>
        <Navlink to="/contact">Contato</Navlink>
      </div>
      <Language>Português</Language>
    </Nav>
  );
};

export default NavBar;
