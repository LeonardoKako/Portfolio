import { Button, Card, Div, ShadowBlack, ShadowWhite } from "./style";
import arrow from "../../assets/others/arrowRight.svg";
import { useNavigate } from "react-router-dom";
import { Tag, Tags } from "../../style";

import { projectsList } from "../../api/projectsList";
import { useContext } from "react";
import { SetLanguage } from "../../context/SetLanguage";

type Props = {
  idProject: number;
};

const Project = ({ idProject }: Props) => {
  const navigate = useNavigate();
  const context = useContext(SetLanguage);
  if (!context) {
    throw new Error(
      "useSetLanguage deve ser usado dentro de um SetLanguageProvider"
    );
  }
  const { english } = context;

  const project = projectsList[idProject];
  if (!project) {
    return <p>Projeto não encontrado</p>;
  }

  return (
    <Card
      img={project.imgMd}
      onClick={() => navigate(`/projects/${project.id}`)}
    >
      <ShadowBlack />
      <ShadowWhite />
      <Div>
        <h1>{english ? project.nameEng : project.name}</h1>
        <Tags>
          {project.tags?.map((item) => (
            <Tag key={item.tagName}>
              <img src={item.imgTag} alt={item.tagName} />
              <p>{item.tagName}</p>
            </Tag>
          ))}
        </Tags>
        <p>{english ? project.subtitleEng : project.subtitle}</p>
      </Div>
      <Button>
        Ver Mais <img src={arrow} alt="Seta" />
      </Button>
    </Card>
  );
};

export default Project;
