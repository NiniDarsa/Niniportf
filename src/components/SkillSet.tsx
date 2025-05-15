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
  min-height: 150dvh;
  background-color: #060018;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 770px) {
    /* overflow-y: auto; */
    height: 200dvh;
  }
  @media (max-width: 700px) {
    height: 310dvh;
  }

  @media (max-width: 500px) {
    height: 360dvh;
  }

  h1 {
    font-weight: 700;
    font-size: clamp(32px, 5vw, 56px);
    line-height: 137%;
    letter-spacing: -0.02px;
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
    font-size: clamp(15px, 1.2vw, 20px);
    line-height: 170%;
    text-align: center;
    margin-top: 10px;
  }
`;
