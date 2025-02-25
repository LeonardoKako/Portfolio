import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { GlobalCss } from "./style";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Abilities from "./pages/Abilities";
import Contacs from "./pages/Contacts";
import ProjectSolo from "./pages/ProjectSolo";

type TagType = {
  name: string;
  img: string;
};

export type ProjectProps = {
  name: string;
  img: string;
  desc?: string;
  tags?: TagType[];
  id?: string;
  link1?: string;
  link2?: string;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalCss />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/abilities" element={<Abilities />} />
          <Route path="/contact" element={<Contacs />} />
          <Route path="/projects/:id" element={<ProjectSolo name="" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
