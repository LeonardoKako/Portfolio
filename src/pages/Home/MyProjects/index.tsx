import { useContext } from "react";
import Project from "../../../components/Project";
import { LinkItem, Title } from "../../../style";
import { SetLanguage } from "../../../context/SetLanguage";

const MyProjects = () => {
  const context = useContext(SetLanguage);
  if (!context) {
    throw new Error(
      "useSetLanguage deve ser usado dentro de um SetLanguageProvider"
    );
  }
  const { english } = context;

  return (
    <section>
      <Title>{english ? "Projects: " : "Projetos: "}</Title>
      <ul className='mt40 gap40'>
        <Project idProject={9} />
        <Project idProject={8} />
        <Project idProject={0} />
        <LinkItem
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          to='/projects'
        >
          {english ? "More projects..." : "Mais projetos... "}
        </LinkItem>
      </ul>
    </section>
  );
};

export default MyProjects;
