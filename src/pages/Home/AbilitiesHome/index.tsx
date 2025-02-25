import ItemList from "../../../components/ItemList";
import { Title } from "../../../style";
import { Container, ListItem } from "./style";

import html from "../../../assets/images/icons/html.svg";
import css from "../../../assets/images/icons/css.svg";
import js from "../../../assets/images/icons/js.svg";
import ts from "../../../assets/images/icons/typescript.svg";
import react from "../../../assets/images/icons/react.svg";
import styled from "../../../assets/images/icons/styled-components.svg";
import redux from "../../../assets/images/icons/redux.svg";
import tailwind from "../../../assets/images/icons/tailwind-css.svg";
import git from "../../../assets/images/icons/gitignore.svg";
import vite from "../../../assets/images/icons/vite.svg";
import bootstrap from "../../../assets/images/icons/bootstrap.svg";
import api from "../../../assets/images/icons/api.svg";
import figma from "../../../assets/images/icons/figma.svg";
import firebase from "../../../assets/images/icons/firebase.svg";
import mongodb from "../../../assets/images/icons/mongodb.svg";
import node from "../../../assets/images/icons/node.svg";

const AbilitiesHome = () => {
  return (
    <Container>
      <Title>Com oque trabalho</Title>
      <div>
        <ListItem>
          <ItemList img={react} name={"React.js"} />
          <ItemList img={ts} name={"Typescript"} />
          <ItemList img={js} name={"Javascript"} />
          <ItemList img={html} name={"HTML"} />
          <ItemList img={css} name={"CSS"} />
          <ItemList img={redux} name={"Redux"} />
          <ItemList img={tailwind} name={"Tailwind"} />
          <ItemList img={styled} name={"Styled-components"} />
          <ItemList img={react} name={"React.js"} />
          <ItemList img={ts} name={"Typescript"} />
          <ItemList img={js} name={"Javascript"} />
          <ItemList img={html} name={"HTML"} />
          <ItemList img={css} name={"CSS"} />
          <ItemList img={redux} name={"Redux"} />
          <ItemList img={tailwind} name={"Tailwind"} />
          <ItemList img={styled} name={"Styled-components"} />
        </ListItem>
        <ListItem>
          <ItemList img={git} name={"Git"} />
          <ItemList img={vite} name={"Vite"} />
          <ItemList img={bootstrap} name={"Bootstrap"} />
          <ItemList img={api} name={"API"} />
          <ItemList img={figma} name={"Figma"} />
          <ItemList img={firebase} name={"Firebase"} />
          <ItemList img={mongodb} name={"MongoDB"} />
          <ItemList img={node} name={"Node.js"} />
          <ItemList img={git} name={"Git"} />
          <ItemList img={vite} name={"Vite"} />
          <ItemList img={bootstrap} name={"Bootstrap"} />
          <ItemList img={api} name={"API"} />
          <ItemList img={figma} name={"Figma"} />
          <ItemList img={firebase} name={"Firebase"} />
          <ItemList img={mongodb} name={"MongoDB"} />
          <ItemList img={node} name={"Node.js"} />
        </ListItem>
      </div>
    </Container>
  );
};

export default AbilitiesHome;
