import { Button, Buttons, Card, Img, ProjectSoloPage } from "./style";
import { Tag, Tags, Title } from "../../style";

import { useParams } from "react-router-dom";
import { projectsList } from "../../api/projectsList";
import { useContext } from "react";
import { SetLanguage } from "../../context/SetLanguage";

const ProjectSolo = () => {
  const context = useContext(SetLanguage);
  const { id } = useParams();
  const projectIndex = Number(id);
  const project = projectsList[projectIndex];

  if (isNaN(projectIndex) || !project) {
    return <p>Projeto não encontrado</p>;
  }
  if (!context) {
    throw new Error(
      "useSetLanguage deve ser usado dentro de um SetLanguageProvider"
    );
  }
  const { english } = context;

  return (
    <ProjectSoloPage>
      <Img src={project.img} alt={project.name} />
      <Card>
        <Title>{english ? project.nameEng : project.nameEng}</Title>
        <Tags>
          {project.tags?.map((i) => (
            <Tag key={i.tagName}>
              <img src={i.imgTag} alt={i.tagName} />
              <p>{i.tagName}</p>
            </Tag>
          ))}
        </Tags>
        <p>{english ? project.descEng : project.desc}</p>
        <Buttons>
          <Button target="e_blank" to={project.site}>
            Deploy
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
