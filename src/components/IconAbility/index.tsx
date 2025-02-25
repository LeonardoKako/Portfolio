import { Card } from "./style";

type Props = {
  name: string;
  icon: string;
};

const IconAbility = ({ name, icon }: Props) => {
  return (
    <Card>
      <p>{name}</p>
      <img src={icon} alt="" />
    </Card>
  );
};

export default IconAbility;
