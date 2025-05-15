import styled from "styled-components";
import DeveloperImage from "./DeveloperImage";
import Header from "./Header";
import Background from "./Background";
import Navigation from "./Navigation";
import MouseSvg from "./MouseSvg";
import Stars from "./Stars";
import useScrollToSectionContext from "../Context/useScrollToSection";
import { useState } from "react";

const Intro = () => {
  const { sectionHome } = useScrollToSectionContext();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledIntro ref={sectionHome}>
      <>
        <Stars left="-150px" top="100px" />
        <Stars left="-150px" />
      </>
      <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
      <Background />
      <StyledContainer $isopen={isOpen}>
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
  height: clamp(95dvh, 100dvh, 140dvh);
  overflow: hidden;
`;

const StyledContainer = styled.div<{ $isopen: boolean }>`
  width: 100%;
  min-height: 100%; //
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
  transition: padding-top 0.3s ease;
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 8rem;
  }
  @media (max-width: 750px) {
    padding-top: ${({ $isopen }) => ($isopen ? "3rem" : "8rem")};
  }
`;
