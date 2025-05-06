import styled from "styled-components";
import BackgroundSecondary from "./BackgroundSecondary";
import Skills from "./Skills";
import OtherSkills from "./OtherSkills";
import Stars from "./Stars";

const SkillSet = () => {
  return (
    <StyledSkillSet>
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
  padding-top: 10rem;
  height: 170vh; //
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
    right: 14%;
    top: 18%;
    transform: rotate(-10deg);
  }
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 160%;
    letter-spacing: 0%;
    text-align: center;
    margin-top: 10px;
  }
`;
