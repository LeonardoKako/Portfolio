// PROJECTS
import efood from "../assets/images/projects/efood.png";
import miniBlog from "../assets/images/projects/miniblog.png";
import bdblog from "../assets/images/projects/bdblog.png";
import disneyplus from "../assets/images/projects/disney.png";
import todolistReact from "../assets/images/projects/todolistReact.png";
import restaurant from "../assets/images/projects/restaurant.png";
import todolistvue from "../assets/images/projects/todolistvue.png";
import eplay from "../assets/images/projects/eplay.png";

// PROJECTS MD
import efoodmd from "../assets/images/projects/efoodmd.png";
import miniBlogmd from "../assets/images/projects/miniblogmd.png";
import bdblogmd from "../assets/images/projects/bdblogmd.png";
import disneyplusmd from "../assets/images/projects/disneymd.png";
import todolistReactmd from "../assets/images/projects/todolistReactmd.png";
import restaurantmd from "../assets/images/projects/restaurantmd.png";
import eplaymd from "../assets/images/projects/eplaymd.png";
import chronos from "../assets/images/projects/chronosPomodoro.png";
import theblog from "../assets/images/projects/theblog.png";

// ICONS
import html from "../assets/images/icons/html.svg";
import css from "../assets/images/icons/css.svg";
import js from "../assets/images/icons/js.svg";
import ts from "../assets/images/icons/typescript.svg";
import react from "../assets/images/icons/react.svg";
import styled from "../assets/images/icons/styled-components.svg";
import redux from "../assets/images/icons/redux.svg";
import bootstrap from "../assets/images/icons/bootstrap.svg";
import api from "../assets/images/icons/api.svg";
import figma from "../assets/images/icons/figma.svg";
import firebase from "../assets/images/icons/firebase.svg";
import gulp from "../assets/images/icons/gulp.svg";
import sass from "../assets/images/icons/sass.svg";
import vue from "../assets/images/icons/vue.svg";
import next from "../assets/images/icons/next.svg";
import drizzle from "../assets/images/icons/drizzle.png";
import tailwind from "../assets/images/icons/tailwind-css.svg";
import vite from "../assets/images/icons/vite.svg";

export const projectsList = [
  {
    id: 0,
    name: "Efood",
    nameEng: "Efood",
    subtitle: "E-commerce inspirado no iFood",
    subtitleEng: "E-commerce inspired by iFood",
    img: efood,
    imgMd: efoodmd,
    tags: [
      { tagName: "React", imgTag: react },
      { tagName: "TypeScript", imgTag: ts },
      { tagName: "Styled", imgTag: styled },
      { tagName: "Redux", imgTag: redux },
      { tagName: "API", imgTag: api },
      { tagName: "Figma", imgTag: figma },
    ],
    desc: "Estou desenvolvendo um site no estilo e-commerce, muito semelhante ao iFood. Nele, os usuários podem explorar uma variedade de lojas, adicionar itens ao carrinho, inserir sua localização e concluir o pagamento de forma prática e intuitiva.",
    descEng:
      "I am developing an e-commerce-style website, very similar to iFood. Users can browse a variety of stores, add items to the cart, enter their location, and complete the payment in a practical and intuitive way.",
    site: "https://efood-leo-fleith.vercel.app/",
    github: "https://github.com/LeonardoKako/Efood-leoFleith",
  },
  {
    id: 1,
    name: "Mini Blog",
    nameEng: "Mini Blog",
    subtitle: "Plataforma para criação de postagens",
    subtitleEng: "Platform for creating posts",
    img: miniBlog,
    imgMd: miniBlogmd,
    tags: [
      { tagName: "React", imgTag: react },
      { tagName: "JavaScript", imgTag: js },
      { tagName: "CSS", imgTag: css },
      { tagName: "Firebase", imgTag: firebase },
    ],
    desc: "Desenvolvido com a orientação do professor Matheus Battisti, o Mini Blog é um projeto no qual os usuários podem criar uma conta, publicar postagens e visualizar as publicações de outros membros, proporcionando uma experiência interativa e dinâmica.",
    descEng:
      "Developed under the guidance of professor Matheus Battisti, Mini Blog is a project where users can create an account, publish posts, and view publications from other members, providing an interactive and dynamic experience.",
    site: "https://mini-blog-leo-fleith.vercel.app/",
    github: "https://github.com/LeonardoKako/MiniBlog-Full-stack",
  },
  {
    id: 2,
    name: "Clone Disney Plus",
    nameEng: "Disney Plus Clone",
    subtitle: "Interface inspirada no Disney+",
    subtitleEng: "Interface inspired by Disney+",
    img: disneyplus,
    imgMd: disneyplusmd,
    tags: [
      { tagName: "HTML", imgTag: html },
      { tagName: "JavaScript", imgTag: js },
      { tagName: "Sass", imgTag: sass },
      { tagName: "Gulp", imgTag: gulp },
      { tagName: "Figma", imgTag: figma },
    ],
    desc: "Um clone da interface do Disney+ desenvolvido com HTML, JavaScript e Sass. Utilizei Gulp para otimizar o fluxo de trabalho e o design foi baseado no Figma. O projeto recria a experiência visual do serviço de streaming, incluindo efeitos dinâmicos e uma interface moderna.",
    descEng:
      "A clone of the Disney+ interface developed with HTML, JavaScript, and Sass. I used Gulp to optimize the workflow, and the design was based on Figma. The project recreates the visual experience of the streaming service, including dynamic effects and a modern interface.",
    site: "https://clone-disneyplus-leonardokako.vercel.app/",
    github: "https://github.com/LeonardoKako/clone_disneyplus",
  },
  {
    id: 3,
    name: "To do List com React + Redux",
    nameEng: "To-do List with React + Redux",
    subtitle: "Lista de tarefas interativa com Redux",
    subtitleEng: "Interactive task list with Redux",
    img: todolistReact,
    imgMd: todolistReactmd,
    tags: [
      { tagName: "React", imgTag: react },
      { tagName: "TypeScript", imgTag: ts },
      { tagName: "Styled", imgTag: styled },
      { tagName: "Redux", imgTag: redux },
    ],
    desc: "Aplicação de lista de tarefas desenvolvida com React, TypeScript e Redux. Permite adicionar, editar, excluir e marcar tarefas como concluídas, garantindo um gerenciamento eficiente e intuitivo. O layout foi estilizado com Styled Components para uma interface mais agradável.",
    descEng:
      "A task list application developed with React, TypeScript, and Redux. It allows users to add, edit, delete, and mark tasks as completed, ensuring efficient and intuitive management. The layout was styled with Styled Components for a more pleasant interface.",
    site: "https://minhas-tarefas-react-three.vercel.app/",
    github: "https://github.com/LeonardoKako/minhas-tarefas-react",
  },
  {
    id: 4,
    name: "Cardápio de Restaurante",
    nameEng: "Restaurant Menu",
    subtitle: "Landing Page para um restaurante fictício",
    subtitleEng: "Landing page for a fictional restaurant",
    img: restaurant,
    imgMd: restaurantmd,
    tags: [
      { tagName: "HTML", imgTag: html },
      { tagName: "JavaScript", imgTag: js },
      { tagName: "CSS", imgTag: css },
      { tagName: "Gulp", imgTag: gulp },
      { tagName: "Bootstrap", imgTag: bootstrap },
    ],
    desc: "Um site interativo de cardápio digital desenvolvido com HTML, JavaScript e CSS, utilizando Bootstrap para um design responsivo. Permite que os clientes naveguem pelas opções do restaurante de forma intuitiva, com categorias organizadas e um layout otimizado. O Gulp foi utilizado para automatizar tarefas no desenvolvimento.",
    descEng:
      "An interactive digital menu website developed with HTML, JavaScript, and CSS, using Bootstrap for a responsive design. It allows customers to browse the restaurant's options intuitively, with organized categories and an optimized layout. Gulp was used to automate development tasks.",
    site: "https://cardapio-leonardofleith.vercel.app/",
    github: "https://github.com/LeonardoKako/cardapio-restaurante",
  },
  {
    id: 5,
    name: "To do List com Vue",
    nameEng: "To-do List with Vue",
    subtitle: "Gerenciador de tarefas com Vue.js",
    subtitleEng: "Task manager with Vue.js",
    img: todolistvue,
    imgMd: todolistvue,
    tags: [
      { tagName: "Vue", imgTag: vue },
      { tagName: "JavaScript", imgTag: js },
      { tagName: "CSS", imgTag: css },
      { tagName: "Bootstrap", imgTag: bootstrap },
    ],
    desc: "Lista de tarefas criada com Vue.js, Bootstrap e JavaScript. O projeto oferece uma experiência fluida para o gerenciamento de afazeres, permitindo adicionar, editar e remover tarefas de forma intuitiva.",
    descEng:
      "A task list created with Vue.js, Bootstrap, and JavaScript. The project provides a smooth experience for task management, allowing users to add, edit, and remove tasks intuitively.",
    site: "https://lista-de-tarefas-leonardo-fleith.vercel.app/",
    github: "https://github.com/LeonardoKako/todo-vue",
  },
  {
    id: 6,
    name: "Breaking Bad Blog",
    nameEng: "Breaking Bad Blog",
    subtitle: "Blog temático sobre Breaking Bad",
    subtitleEng: "Themed blog about Breaking Bad",
    img: bdblog,
    imgMd: bdblogmd,
    tags: [
      { tagName: "HTML", imgTag: html },
      { tagName: "JavaScript", imgTag: js },
      { tagName: "Sass", imgTag: sass },
      { tagName: "Gulp", imgTag: gulp },
    ],
    desc: "Um blog temático sobre a série Breaking Bad, desenvolvido com HTML, JavaScript e Sass. Conta com um design estilizado e dinâmico, permitindo que os usuários naveguem por conteúdos relacionados à série. O Gulp foi utilizado para otimizar o desenvolvimento.",
    descEng:
      "A themed blog about the Breaking Bad series, developed with HTML, JavaScript, and Sass. It features a stylish and dynamic design, allowing users to browse content related to the series. Gulp was used to optimize development.",
    site: "https://bd-leonardokako.vercel.app/",
    github: "https://github.com/LeonardoKako/Projeto_breaking_bad",
  },
  {
    id: 7,
    name: "Eplay",
    nameEng: "Eplay",
    subtitle: "Ecommerce de uma loja de Games",
    subtitleEng: "E-commerce for a game store",
    img: eplay,
    imgMd: eplaymd,
    tags: [
      { tagName: "React", imgTag: react },
      { tagName: "TypeScript", imgTag: ts },
      { tagName: "Styled", imgTag: styled },
      { tagName: "Redux", imgTag: redux },
      { tagName: "API", imgTag: api },
      { tagName: "Figma", imgTag: figma },
    ],
    desc: "E-commerce de uma loja de games, desenvolvido com React e TypeScript. Conta com um sistema de carrinho, filtros por categoria e integração com uma API para listagem de produtos. O design foi criado no Figma e estilizado com Styled Components.",
    descEng:
      "E-commerce for a game store, developed with React and TypeScript. It includes a cart system, category filters, and integration with an API for product listing. The design was created in Figma and styled with Styled Components.",
    site: "https://eplay-leofleith.vercel.app/",
    github: "https://github.com/LeonardoKako/ecommerce-eplay",
  },
  {
    id: 8,
    name: "Chronos Pomodoro",
    nameEng: "Chronos Pomodoro",
    subtitle: "Gerenciador de foco com técnica Pomodoro",
    subtitleEng: "Focus manager using Pomodoro technique",
    img: chronos,
    imgMd: chronos,
    tags: [
      { tagName: "React", imgTag: react },
      { tagName: "TypeScript", imgTag: ts },
      { tagName: "CSS", imgTag: css },
      { tagName: "Vite", imgTag: vite },
      { tagName: "Figma", imgTag: figma },
    ],
    desc: "Aplicativo que segue a técnica do Pomodoro para aumentar o foco e a produtividade. Desenvolvido com React 19, TypeScript e CSS Modules, permite configurar tempos personalizados de foco e descanso, com dados armazenados no localStorage. Utiliza bibliotecas como date-fns, react-toastify e lucide.",
    descEng:
      "A Pomodoro-based productivity app built with React 19, TypeScript, and CSS Modules. Allows users to customize focus and break durations, with data saved in localStorage. Libraries like date-fns, react-toastify, and lucide are also used.",
    site: "https://chronos-leonardo.vercel.app/",
    github: "https://github.com/LeonardoKako/chronos-pomodoro",
  },
  {
    id: 9,
    name: "The blog",
    nameEng: "The blog",
    subtitle: "Blog com autenticação e gerenciamento de postagens",
    subtitleEng: "Blog with authentication and post management",
    img: theblog,
    imgMd: theblog,
    tags: [
      { tagName: "Next", imgTag: next },
      { tagName: "TypeScript", imgTag: ts },
      { tagName: "Tailwind", imgTag: tailwind },
      { tagName: "Drizzle", imgTag: drizzle },
      { tagName: "Vite", imgTag: vite },
      { tagName: "Figma", imgTag: figma },
    ],
    desc: "Usando Next.js, TypeScript e Tailwind, este blog permite autenticação de usuários e criação de postagens. A aplicação utiliza Drizzle para o banco de dados, validação com Zod, UUID, React Toastify e suporte a Markdown. O sistema de autenticação usa JWT via cookies e senha criptografada com base64.",
    descEng:
      "Built with Next.js, TypeScript, and Tailwind, this blog app supports user authentication and post creation. It uses Drizzle for the database, Zod for validation, UUIDs, React Toastify, and React Markdown. Authentication is handled with JWT cookies and base64-encrypted passwords.",
    site: "https://www.loom.com/share/71950973e3c34a519156d6bdf3e5612a?sid=98cbbd7a-8623-4d8e-a835-5ef32a864d6e",
    github: "https://github.com/LeonardoKako/the-blog-nextjs",
  },
];
