import { Button, Card, Div, ShadowBlack, ShadowWhite } from "./style";
import arrow from "../../assets/others/arrowRight.svg";
import { useNavigate } from "react-router-dom";
import { Tag, Tags } from "../../style";

import { projectsList } from "../../api/projectsList";

type Props = {
  idProject: number;
};

const Project = ({ idProject }: Props) => {
  // Evita erro caso o ID seja inválido

  const navigate = useNavigate();

  const project = projectsList[idProject];

  if (!project) {
    return <p>Projeto não encontrado</p>;
  }

  return (
    <Card img={project.img} onClick={() => navigate(`/projects/${project.id}`)}>
      <ShadowBlack />
      <ShadowWhite />
      <Div>
        <h1>{project.name}</h1>
        <Tags>
          {project.tags?.map((item) => (
            <Tag key={item.tagName}>
              <img src={item.imgTag} alt={item.tagName} />
              <p>{item.tagName}</p>
            </Tag>
          ))}
        </Tags>
        <p>{project.desc}</p>
      </Div>
      <Button>
        Ver Mais <img src={arrow} alt="Seta" />
      </Button>
    </Card>
  );
};

export default Project;
