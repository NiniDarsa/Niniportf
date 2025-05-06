import styled from "styled-components";
import DeveloperImage from "./DeveloperImage";
import Header from "./Header";
import Background from "./Background";
import Navigation from "./Navigation";
import MouseSvg from "./MouseSvg";
import Stars from "./Stars";

const Intro = () => {
  return (
    <StyledIntro>
      <Stars left="-150px" top="100px" />
      <Stars left="-150px" />
      <Navigation />
      <Background />
      <StyledContainer>
        <Header />
        <DeveloperImage />
      </StyledContainer>
      <MouseSvg />
      <Stars right="-100px" bottom="-100px" />
    </StyledIntro>
  );
};
export default Intro;

const StyledIntro = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
`;
