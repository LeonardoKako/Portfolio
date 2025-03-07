import { useContext } from "react";
import { SetLanguage } from "../../context/SetLanguage";
import IconAbility from "../../components/IconAbility";
import { Title } from "../../style";
import { AbilitiesPage } from "./style";

import html from "../../assets/images/icons/html.svg";
import css from "../../assets/images/icons/css.svg";
import js from "../../assets/images/icons/js.svg";
import ts from "../../assets/images/icons/typescript.svg";
import react from "../../assets/images/icons/react.svg";
import styled from "../../assets/images/icons/styled-components.svg";
import redux from "../../assets/images/icons/redux.svg";
import tailwind from "../../assets/images/icons/tailwind-css.svg";
import git from "../../assets/images/icons/gitignore.svg";
import vite from "../../assets/images/icons/vite.svg";
import bootstrap from "../../assets/images/icons/bootstrap.svg";
import api from "../../assets/images/icons/api.svg";
import figma from "../../assets/images/icons/figma.svg";
import firebase from "../../assets/images/icons/firebase.svg";
import mongodb from "../../assets/images/icons/mongodb.svg";
import node from "../../assets/images/icons/node.svg";
import gulp from "../../assets/images/icons/gulp.svg";
import next from "../../assets/images/icons/next.svg";
import sass from "../../assets/images/icons/sass.svg";
import vue from "../../assets/images/icons/vue.svg";

const Abilities = () => {
  const context = useContext(SetLanguage);
  if (!context) {
    throw new Error(
      "useSetLanguage deve ser usado dentro de um SetLanguageProvider"
    );
  }
  const { english } = context;
  return (
    <AbilitiesPage>
      {english ? <Title>Skills</Title> : <Title>Habilidades</Title>}
      <div>
        <IconAbility name="HTML" icon={html} />
        <IconAbility name="CSS" icon={css} />
        <IconAbility name="JavaScript" icon={js} />
        <IconAbility name="TypeScript" icon={ts} />
        <IconAbility name="React.js" icon={react} />
        <IconAbility name="StyledComp" icon={styled} />
        <IconAbility name="Redux" icon={redux} />
        <IconAbility name="Tailwind" icon={tailwind} />
        <IconAbility name="VUE" icon={vue} />
        <IconAbility name="Next.js" icon={next} />
        <IconAbility name="Sass" icon={sass} />
        <IconAbility name="Gulp" icon={gulp} />
        <IconAbility name="Git" icon={git} />
        <IconAbility name="Vite" icon={vite} />
        <IconAbility name="Bootstrap" icon={bootstrap} />
        <IconAbility name="Figma" icon={figma} />
        <IconAbility name="API" icon={api} />
        <IconAbility name="Firebase" icon={firebase} />
        <IconAbility name="MongoDB" icon={mongodb} />
        <IconAbility name="Node.js" icon={node} />
      </div>
    </AbilitiesPage>
  );
};

export default Abilities;
