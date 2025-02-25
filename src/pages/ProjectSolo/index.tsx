import { Button, Buttons, Card, Img, ProjectSoloPage } from "./style";
import { Tag, Tags, Title } from "../../style";

import { useParams } from "react-router-dom";
import { projectsList } from "../../api/projectsList";

const ProjectSolo = () => {
  const { id } = useParams();
  const projectIndex = Number(id);
  const project = projectsList[projectIndex];

  // Evita erro caso o ID seja inválido
  if (isNaN(projectIndex) || !project) {
    return <p>Projeto não encontrado</p>;
  }
  return (
    <ProjectSoloPage>
      <Img img={project.img} />
      <Card>
        <Title>{project.name}</Title>
        <Tags>
          {project.tags?.map((i) => (
            <Tag key={i.tagName}>
              <img src={i.imgTag} alt={i.tagName} />
              <p>Icon</p>
            </Tag>
          ))}
        </Tags>
        <p>{project.desc}</p>
        <Buttons>
          <Button target="e_blank" to={project.site}>
            Site
          </Button>
          <Button target="e_blank" to={project.github}>
            Github
          </Button>
        </Buttons>
      </Card>
    </ProjectSoloPage>
  );
};

export default ProjectSolo;
