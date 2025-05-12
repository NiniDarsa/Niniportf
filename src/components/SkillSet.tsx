import styled from "styled-components";
import BackgroundSecondary from "./BackgroundSecondary";
import Skills from "./Skills";
import OtherSkills from "./OtherSkills";
import Stars from "./Stars";
import useScrollToSectionContext from "../Context/useScrollToSection";

const SkillSet = () => {
  const { sectionSkills } = useScrollToSectionContext();

  return (
    <StyledSkillSet ref={sectionSkills}>
      <BackgroundSecondary />
      <h1>My Skills</h1>
      <p>
        I create modern, responsive web solutions focused on user satisfaction.
        <br />
        Here's a snapshot of my core skills:
      </p>
      <h2>
        you can hover <br />
        for more information
      </h2>
      <Skills />
      <OtherSkills />
      <Stars left="-100px" top="-100px" />
      <Stars left="-100px" top="-150px" />
      <Stars right="-180px" bottom="-80px" />
    </StyledSkillSet>
  );
};
export default SkillSet;
const StyledSkillSet = styled.div`
  font-family: "Urbanist", sans-serif;
  position: relative;
  padding-top: 7rem;
  height: 160vh;
  background-color: #060018;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-weight: 700;
    font-size: 56px;
    line-height: 137%;
    letter-spacing: -2%;
    text-align: center;
  }
  h2 {
    font-family: "Caveat", cursive;
    font-weight: 400;
    line-height: 96%;
    text-align: center;
    color: #ffffffa1;
    position: absolute;
    right: 8%;
    top: 18%;
    transform: rotate(-10deg);
    @media (max-width: 950px) {
      top: 12%;
    }
    @media (max-width: 550px) {
      top: 9%;
    }
  }
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 160%;
    text-align: center;
    margin-top: 10px;
    @media (max-width: 750px) {
      font-size: 15px;
    }
    @media (max-width: 700px) {
      font-size: 18px;
    }
    @media (max-width: 550px) {
      font-size: 16px;
    }
    @media (max-width: 500px) {
      font-size: 18px;
    }
  }
  @media (max-width: 1250px) {
    height: 140vh;
  }
  /* @media (max-width: 1100px) {
    height: 160vh;
  } */
  @media (max-width: 700px) {
    height: 190vh;
  }
  /* @media (max-width: 500px) {
    height: 100vh;
  } */
  @media (max-width: 500px) {
    height: 265vh;
  }
  /* @media (max-width: 400px) {
    height: 285vh;
  } */
`;
