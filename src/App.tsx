import styled from "styled-components";
import About from "./components/About";
import Intro from "./components/Intro";
import GlobalStyle from "./Styles/GlobalStyles";

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <Intro />
      <About />
    </StyledApp>
  );
}

export default App;
const StyledApp = styled.div`
  width: 100%;
  height: 100%;
`;
