import styled from "styled-components";
import AboutContainer from "./AboutContainer";
import useScrollToSectionContext from "../Context/useScrollToSection";

const About = () => {
  const { sectionAbout, sectionSkills, scrollToSection } =
    useScrollToSectionContext();

  return (
    <StyledAbout ref={sectionAbout}>
      <h1>Here's a bit about me</h1>
      <AboutContainer />
      <button onClick={() => scrollToSection(sectionSkills)}>My Skills</button>
    </StyledAbout>
  );
};
export default About;
const StyledAbout = styled.div`
  padding-top: 7rem;
  padding-bottom: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Urbanist", sans-serif;
  background-color: white;
  button {
    box-shadow: 0px 12px 12px 0px #1a1a1a26;
    box-shadow: 0px 4px 6px 0px #ffffff59 inset;
    background: #1a1a1a;
    color: white;
    border-radius: 3rem;
    padding: 1rem 2rem;
    margin-top: 4rem;
    cursor: pointer;

    font-weight: 600;
    font-size: 16px;
    line-height: 142%;
    letter-spacing: 0%;
    transition: all 0.2s ease;

    &:hover {
      background-color: #333333;
      box-shadow: 0px 8px 16px 0px #00000055, inset 0px 4px 8px 0px #ffffff80;
      transform: scale(1.03);
    }
  }

  h1 {
    color: black;
    text-align: center;
    font-weight: 600;
    font-size: 60px;
    line-height: 98%;
    letter-spacing: -2%;
    text-align: center;
    margin-bottom: 2rem;

    @media (max-width: 1100px) {
      font-size: 45px;
    }
  }
`;
