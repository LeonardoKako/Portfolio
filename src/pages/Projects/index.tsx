import { useContext } from "react";
import Project from "../../components/Project";
import { SetLanguage } from "../../context/SetLanguage";
import { Title } from "../../style";
import { ProjectsPage } from "./style";

const Projects = () => {
  const context = useContext(SetLanguage);
  if (!context) {
    throw new Error(
      "useSetLanguage deve ser usado dentro de um SetLanguageProvider"
    );
  }
  const { english } = context;
  return (
    <ProjectsPage>
      <Title>{english ? "Main projects: " : "Principais projetos:"}</Title>
      <ul className="mt40 gap40">
        <Project idProject={0} />
        <Project idProject={1} />
        <Project idProject={7} />
      </ul>
      <Title>{english ? "Other smalls projects: " : "Projetos menores:"}</Title>
      <ul className="mt40 gap40">
        <Project idProject={2} />
        <Project idProject={3} />
        <Project idProject={4} />
        <Project idProject={6} />
        <Project idProject={5} />
      </ul>
    </ProjectsPage>
  );
};

export default Projects;
