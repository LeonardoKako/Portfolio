import { Container, Hab, Img } from "./style";

type Props = {
  img: string;
  name: string;
};

const ItemList = ({ img, name }: Props) => {
  return (
    <Container>
      <Img src={img} alt={name} />
      <Hab>{name}</Hab>
    </Container>
  );
};

export default ItemList;
