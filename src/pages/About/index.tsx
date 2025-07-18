import { useContext } from "react";
import { SetLanguage } from "../../context/SetLanguage";
import { Title } from "../../style";
import { AboutPage } from "./style";
import leoImg from "../../assets/others/leoImg.jpeg";

const About = () => {
  const context = useContext(SetLanguage);
  if (!context) {
    throw new Error(
      "useSetLanguage deve ser usado dentro de um SetLanguageProvider"
    );
  }
  const { english } = context;
  return (
    <AboutPage>
      <div>
        <img src={leoImg} alt='Eu, Leonardo' />
      </div>
      <Title>{english ? "About me" : "Sobre mim"}</Title>
      {english ? (
        <>
          <p>
            I am a student of Systems Analysis and Development at CESUSC and a
            Front-End Developer in training at EBAC, with a strong interest in
            Fullstack programming, I am in my second year of college and have
            already completed a technical course in Systems Development at
            Senai. I consider myself a calm, intelligent, and dedicated person,
            always eager to learn and adapt to new challenges. My goal is to
            join a creative and innovative team, contributing to the development
            of impactful digital projects.
          </p>
          <p>
            In addition to programming, I have experience in Graphic Design,
            which has given me a solid foundation in usability, aesthetics, and
            user experience. This background has been essential in Front-End
            development, allowing me to apply UI/UX concepts to create intuitive
            and visually appealing interfaces. I have also gained skills in
            tools like Figma and Photoshop, which help in the prototyping
            process and refining project designs, ensuring a smoother user
            experience.
          </p>
          <p>
            Constantly seeking to improve my skills, I developed this website to
            showcase my main projects. Additionally, I participated in a school
            project aimed at optimizing the cafeteria system by eliminating
            lines and improving organization. I also completed a course project
            where I built a platform allowing users to register, create, and
            edit posts. My main technologies include React.js, TypeScript, and
            CSS, which I use to develop modern and efficient applications.
          </p>
        </>
      ) : (
        <>
          <p>
            Sou estudante de Análise e Desenvolvimento de Sistemas na CESUSC e
            Desenvolvedor Front-End em formação pela EBAC, com um forte
            interesse na programação Fullstack. Atualmente, estou na terceira
            fase da graduação e já concluí um curso técnico em Desenvolvimento
            de Sistemas pelo Senai. Considero-me uma pessoa calma, inteligente e
            dedicada, sempre disposta a aprender e me adaptar a novos desafios.
            Meu objetivo é integrar uma equipe criativa e inovadora,
            contribuindo para o desenvolvimento de projetos digitais de alto
            impacto.
          </p>
          <p>
            Além da programação, possuo experiência em Design Gráfico, o que me
            proporcionou uma base sólida em usabilidade, estética e experiência
            do usuário. Essa vivência tem sido essencial no desenvolvimento
            Front-End, permitindo-me aplicar conceitos de UI/UX para criar
            interfaces intuitivas e visualmente atraentes. Também adquiri
            habilidades em ferramentas como Figma e Photoshop, que auxiliam no
            processo de prototipação e no refinamento do design dos projetos,
            garantindo uma experiência mais fluida para os usuários.
          </p>
          <p>
            Buscando sempre aprimorar minhas habilidades, desenvolvi esse site
            para exibir meus principais projetos. Além disso, participei de um
            projeto escolar voltado para a otimização da cantina, eliminando
            filas e melhorando a organização. Também concluí um projeto em um
            curso no qual desenvolvi uma plataforma onde os usuários podiam se
            cadastrar, criar e editar postagens. Minhas principais tecnologias
            incluem React.js, TypeScript e CSS, ferramentas que utilizo para
            desenvolver aplicações modernas e eficientes.
          </p>
        </>
      )}
    </AboutPage>
  );
};

export default About;
