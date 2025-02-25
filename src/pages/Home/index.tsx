import HabilitiesHome from "./AbilitiesHome";
import HeaderHome from "./HeaderHome";
import MyProjects from "./MyProjects";
import { HomePage } from "./style";

const Home = () => {
  return (
    <HomePage>
      <HeaderHome />
      <HabilitiesHome />
      <MyProjects />
    </HomePage>
  );
};

export default Home;
