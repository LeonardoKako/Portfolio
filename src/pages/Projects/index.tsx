import Project from "../../components/Project";
import { Title } from "../../style";
import { ProjectsPage } from "./style";

const Projects = () => {
  return (
    <ProjectsPage>
      <Title>Principais projetos:</Title>
      <ul className="mt40 gap40">
        <Project idProject={0} />
        <Project idProject={1} />
      </ul>
      <Title>Projetos Menores:</Title>
      <ul className="mt40 gap40">
        <Project idProject={0} />
        <Project idProject={1} />
      </ul>
    </ProjectsPage>
  );
};

export default Projects;
