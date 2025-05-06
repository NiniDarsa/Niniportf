import styled from "styled-components";
import About from "./components/About";
import Intro from "./components/Intro";
import GlobalStyle from "./Styles/GlobalStyles";
import SkillSet from "./components/SkillSet";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <Intro />
      <About />
      <SkillSet />
      <Projects />
      <Contact />
    </StyledApp>
  );
}

export default App;
const StyledApp = styled.div`
  width: 100%;
  height: 100%;
`;
