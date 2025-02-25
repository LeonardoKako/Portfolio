import Project from "../../../components/Project";
import { LinkItem, Title } from "../../../style";

const MyProjects = () => {
  return (
    <section className="mt80">
      <Title>Meus Projetos Pessoais</Title>
      <ul className="mt40 gap40">
        <Project idProject={0} />
        <Project idProject={1} />
        <LinkItem to="/projects">Mais Projetos...</LinkItem>
      </ul>
    </section>
  );
};

export default MyProjects;
