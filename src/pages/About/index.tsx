import { Title } from "../../style";
import { AboutPage } from "./style";
import leoImg from "../../assets/others/leoImg.jpeg";

const About = () => {
  return (
    <AboutPage>
      <div>
        <img src={leoImg} alt="Eu, Leonardo" />
      </div>
      <Title>Sobre mim</Title>
      <p>
        I have been engaged in professional Web Development for several years. I
        create Full-Stack websites with a minimalist look and speed. I also
        focus on website accessibility, website optimization and SEO.
      </p>
      <p>
        I have been engaged in professional Web Development for several years. I
        create Full-Stack websites with a minimalist look and speed. I also
        focus on website accessibility, website optimization and SEO.
      </p>
      <p>
        I have been engaged in professional Web Development for several years. I
        create Full-Stack websites with a minimalist look and speed. I also
        focus on website accessibility, website optimization and SEO.
      </p>
    </AboutPage>
  );
};

export default About;
