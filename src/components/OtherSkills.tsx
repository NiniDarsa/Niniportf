import styled from "styled-components";
import motion from "../assets/images/framermotion.png";
import nodejs from "../assets/images/nodeJs.png";
import git from "../assets/images/git.png";
import zustand from "../assets/images/zustand.png";
import styledcomponent from "../assets/images/styledcomponent.png";
const OtherSkills = () => {
  return (
    <StyledSkills>
      <StyledDiv>
        <>
          <h4>Other Experiences</h4>
          <Styledsvg
            width={100}
            height={50}
            viewBox="0 0 34 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_287_19845)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.8673 6.21362C17.8673 7.58408 18.1119 8.94113 18.5871 10.2073C19.0624 11.4734 19.759 12.6239 20.6371 13.5929C21.5153 14.562 22.5578 15.3307 23.7051 15.8551C24.8525 16.3796 26.0822 16.6495 27.3241 16.6495V16.6938H27.3242V18.1938H27.3241V18.238C26.0822 18.238 24.8525 18.5079 23.7051 19.0324C22.5578 19.5568 21.5153 20.3255 20.6371 21.2946C19.759 22.2637 19.0624 23.4141 18.5871 24.6802C18.1119 25.9464 17.8673 27.3034 17.8673 28.6739H16.3337C16.3337 23.0129 19.817 19.2563 24.5077 18.1938L7.32416 18.1938L7.32416 16.6938L24.5078 16.6938C19.817 15.6313 16.3337 11.8746 16.3337 6.21362H17.8673Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_287_19845">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(7.32416 7.44409)"
                />
              </clipPath>
            </defs>
          </Styledsvg>
        </>
        <>
          <StyledSkill>
            <img src={motion} alt="motion" />
            <p>Framer Motion</p>
          </StyledSkill>
          <StyledSkill>
            <img src={nodejs} alt="nodejs" />
            <p>Node Js</p>
          </StyledSkill>
          <StyledSkill>
            <img src={git} alt="git" />
            <p>Git</p>
          </StyledSkill>
          <StyledSkill>
            <img src={zustand} alt="zustand" />
            <p>Zustand</p>
          </StyledSkill>
          <StyledSkill>
            <img src={styledcomponent} alt="styledcomponent" />
            <p>Styled Components</p>
          </StyledSkill>
        </>
      </StyledDiv>
    </StyledSkills>
  );
};
export default OtherSkills;

const StyledSkills = styled.div`
  margin-top: 10rem;
  width: 100vw;
  min-height: 20dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Urbanist", sans-serif;
`;
const StyledDiv = styled.div`
  width: 80%;
  height: clamp(3rem, 4vw, 6rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 770px) {
    flex-direction: column;
  }

  h4 {
    color: white;
    font-weight: 500;
    font-size: clamp(20px, 2.1vw, 50px);
    line-height: 137%;
    letter-spacing: -0.02px;
    text-align: center;
  }
`;
const StyledSkill = styled.div`
  min-height: 100%;
  display: flex;
  align-items: center;
  border: 0.46px solid #ffffff;
  border-radius: 5rem;
  padding: 0 0.8rem;
  margin-left: 1rem;

  img {
    width: 2rem;
    height: 2rem;
    object-fit: cover;
  }
  p {
    margin-top: 0;
    font-size: clamp(0.8rem, 1vw, 2rem);
  }
`;
const Styledsvg = styled.svg`
  color: aliceblue;
`;
