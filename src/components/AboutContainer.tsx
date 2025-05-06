import styled from "styled-components";
import AboutImage from "./AboutImage";

const AboutContainer = () => {
  return (
    <StyledContainer>
      <div>
        <StyledBox
          style={{ transform: "translateX(-10px) rotate(4deg)", zIndex: 3 }}
        >
          <h3>Speciality:</h3>
          <p>Front-End Development & Web Applications</p>
        </StyledBox>

        <StyledBox
          style={{
            transform: " translateX(40px) rotate(-7deg)",
            zIndex: 2,
          }}
        >
          <h3>Experience:</h3>
          <p>2 years</p>
        </StyledBox>

        <StyledBox style={{ zIndex: 1 }}>
          <h3>Projects:</h3>
          <p>20+</p>
        </StyledBox>
      </div>
      <AboutImage />
      <div>
        <StyledBox
          style={{
            transform: "rotate(5deg)",
            zIndex: 3,
          }}
        >
          <h3>Location:</h3>
          <p>Georgia, Tbilisi</p>
        </StyledBox>

        <StyledBox
          style={{
            transform: " translateX(10px) rotate(14deg)",
            zIndex: 2,
          }}
        >
          <h3>Availability:</h3>
          <p>Currently open to new projects</p>
        </StyledBox>

        <StyledBox
          style={{
            transform: "rotate(4deg)",
            zIndex: 1,
          }}
        >
          <h3>Goal:</h3>
          <p>Build clean, user-friendly web projects </p>
        </StyledBox>
      </div>
    </StyledContainer>
  );
};
export default AboutContainer;
const StyledContainer = styled.div`
  width: 1080px;
  height: 532px;
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledBox = styled.div`
  box-shadow: 0px 16px 17px 0px #1a1a1a0a;
  border: 1px solid #1a1a1a12;
  width: 320px;
  margin-bottom: 0.5rem;
  border-radius: 10px;
  color: black;
  padding: 1rem;
  position: relative;
  background-color: white;
  h3 {
    font-weight: 600;
    font-size: 14px;
    line-height: 142%;
    letter-spacing: 0%;
    color: #1a1a1a99;
  }
  p {
    font-weight: 600;
    font-size: 32px;
    line-height: 116%;
    letter-spacing: -3%;
  }
`;
