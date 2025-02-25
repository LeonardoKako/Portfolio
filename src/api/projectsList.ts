// PROJECTS
import efood from "../assets/images/projects/efood.png";
import miniBlog from "../assets/images/projects/miniblog.png";

// ICONS
import html from "../assets/images/icons/html.svg";
import css from "../assets/images/icons/css.svg";
import js from "../assets/images/icons/js.svg";
import ts from "../assets/images/icons/typescript.svg";
import react from "../assets/images/icons/react.svg";
import styled from "../assets/images/icons/styled-components.svg";
import redux from "../assets/images/icons/redux.svg";
import tailwind from "../assets/images/icons/tailwind-css.svg";
import vite from "../assets/images/icons/vite.svg";
import bootstrap from "../assets/images/icons/bootstrap.svg";
import api from "../assets/images/icons/api.svg";
import figma from "../assets/images/icons/figma.svg";
import firebase from "../assets/images/icons/firebase.svg";
import mongodb from "../assets/images/icons/mongodb.svg";
import node from "../assets/images/icons/node.svg";
import gulp from "../assets/images/icons/gulp.svg";
import next from "../assets/images/icons/next.svg";
import sass from "../assets/images/icons/sass.svg";
import vue from "../assets/images/icons/vue.svg";

export const projectsList = [
  {
    id: 0,
    name: "Efood",
    img: efood,
    tags: [
      {
        tagName: "React",
        imgTag: react,
      },
      {
        tagName: "TypeScript",
        imgTag: ts,
      },
      {
        tagName: "Styled",
        imgTag: styled,
      },
      {
        tagName: "Redux",
        imgTag: redux,
      },
      {
        tagName: "API",
        imgTag: api,
      },
      {
        tagName: "Figma",
        imgTag: figma,
      },
    ],
    desc: "Estou desenvolvendo um site no estilo e-commerce, muito semelhante ao iFood. Nele, os usuários podem explorar uma variedade de lojas, adicionar itens ao carrinho, inserir sua localização e concluir o pagamento de forma prática e intuitiva.",
    site: "https://efood-leo-fleith.vercel.app/",
    github: "https://github.com/LeonardoKako/Efood-leoFleith",
  },
  {
    id: 1,
    name: "Mini Blog",
    img: miniBlog,
    tags: [
      {
        tagName: "React",
        imgTag: react,
      },
    ],
    desc: "Desenvolvido com a orientação do professor Matheus Battisti, o Mini Blog é um projeto no qual os usuários podem criar uma conta, publicar postagens e visualizar as publicações de outros membros, proporcionando uma experiência interativa e dinâmica.",
    site: "https://mini-blog-leo-fleith.vercel.app/",
    github: "https://github.com/LeonardoKako/MiniBlog-Full-stack",
  },
];
