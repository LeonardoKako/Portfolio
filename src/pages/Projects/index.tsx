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
        <Project idProject={7} />
      </ul>
      <Title>Projetos Menores:</Title>
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
