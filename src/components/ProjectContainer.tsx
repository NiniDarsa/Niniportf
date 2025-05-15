import styled from "styled-components";
import firstProj from "../assets/images/1stProj.png";
import secondProj from "../assets/images/2ndProj.png";
import thirdProj from "../assets/images/3rdProj.png";
import { motion } from "motion/react";
const ProjectContainer = () => {
  return (
    <StyleContainer>
      <Card layoutId="1">
        <StyledLink href={"#1"}>
          <motion.img
            src={firstProj}
            alt="RemoteJobBoard"
            layoutId={`image 1`}
          />
        </StyledLink>
        <StyledInfo>
          <p>Remote Job Board</p>
          <ButtonContainer>
            <a href="https://github.com/NiniDarsa/react-job-board">GitHub</a>
            <a>Live Demo</a>
            <a href={"#1"}>
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.60376 11L11.6038 1M11.6038 1H1.60376M11.6038 1V11"
                  stroke="#CDFF65"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </ButtonContainer>
        </StyledInfo>
      </Card>
      <Card layoutId="2">
        <StyledLink href={"#2"}>
          <motion.img src={secondProj} alt="schedulator" layoutId={`image 2`} />
        </StyledLink>
        <StyledInfo>
          <p>Schedulator</p>
          <ButtonContainer>
            <a href="https://github.com/NiniDarsa/schedule">GitHub</a>
            <a>Live Demo</a>
            <a href={"#2"}>
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.60376 11L11.6038 1M11.6038 1H1.60376M11.6038 1V11"
                  stroke="#CDFF65"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </ButtonContainer>
        </StyledInfo>
      </Card>
      <Card layoutId="3">
        <StyledLink href={"#3"}>
          <motion.img src={thirdProj} alt="wordcounter" layoutId={`image 3`} />
        </StyledLink>
        <StyledInfo>
          <p>Word Counter</p>
          <ButtonContainer>
            <a href="https://github.com/NiniDarsa/word-count">GitHub</a>
            <a>Live Demo</a>
            <a href={"#3"}>
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.60376 11L11.6038 1M11.6038 1H1.60376M11.6038 1V11"
                  stroke="#CDFF65"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </ButtonContainer>
        </StyledInfo>
      </Card>
      <Card layoutId="4">
        <SvgContainer layoutId={`image 4`} href={"#4"}>
          <StyledNpm
            viewBox="0 0 784 638"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_19_197)">
              <path
                d="M783.178 -104.519H-125.175C-213.404 -104.519 -332.235 310.76 -332.235 378.336L-220.375 818.73C-220.375 886.306 49.5856 940.669 137.815 940.669L898.82 911.273C987.049 911.273 1180.85 627.186 1180.85 559.611L942.932 17.8371C942.932 -49.7383 871.407 -104.519 783.178 -104.519Z"
                fill="#CB3837"
                stroke="#5B0403"
                strokeWidth="21.9178"
              />
              <path
                d="M109.931 235.972H680.479V381.635H395.205V405.912H268.417V381.635H109.931V235.972ZM141.629 357.358H205.023V284.526H236.72V357.358H268.417V260.249H141.629V357.358ZM300.114 260.249V381.635H363.508V357.358H426.903V260.249H300.114ZM363.508 284.526H395.205V333.08H363.508V284.526ZM458.6 260.249V357.358H521.994V284.526H553.691V357.358H585.388V284.526H617.085V357.358H648.782V260.249H458.6Z"
                fill="#CB3837"
              />
              <path
                d="M141.629 357.358H205.023V284.527H236.72V357.358H268.417V260.25H141.629V357.358Z"
                fill="white"
              />
              <path
                d="M300.114 260.25V381.635H363.508V357.358H426.903V260.25H300.114ZM395.205 333.081H363.508V284.527H395.205V333.081Z"
                fill="white"
              />
              <path
                d="M458.6 260.25V357.358H521.994V284.527H553.691V357.358H585.388V284.527H617.085V357.358H648.782V260.25H458.6Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_19_197">
                <rect
                  width="833"
                  height="638"
                  fill="white"
                  transform="translate(-27)"
                />
              </clipPath>
            </defs>
          </StyledNpm>
        </SvgContainer>

        <StyledInfo>
          <p>Component Library</p>
          <ButtonContainer>
            <a href="https://github.com/NiniDarsa/react-component-library">
              GitHub
            </a>
            <a href="https://www.npmjs.com/package/react-ui-elements-drs">
              NPM
            </a>
            <a href={"#4"}>
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.60376 11L11.6038 1M11.6038 1H1.60376M11.6038 1V11"
                  stroke="#CDFF65"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </ButtonContainer>
        </StyledInfo>
      </Card>
    </StyleContainer>
  );
};
export default ProjectContainer;

const StyleContainer = styled(motion.div)`
  padding: 12rem 6rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  position: absolute;
  z-index: 2;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
    gap: 5rem;
  }
  @media (max-width: 900px) {
    width: 90%;
  }
  @media (max-width: 650px) {
    width: 100%;
  }
  @media (max-width: 400px) {
    left: 0;
    transform: translateX(-15%);
  }
`;
const Card = styled(motion.div)`
  height: clamp(5rem, 25vw, 24rem);
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  img {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    object-fit: cover;
  }
  @media (max-width: 1200px) {
    height: 22rem;
  }
  @media (max-width: 900px) {
    height: 20rem;
  }
  @media (max-width: 650px) {
    height: 15rem;
  }
  @media (max-width: 450px) {
    height: 10rem;
  }
`;
const SvgContainer = styled(motion.a)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cb3837;
  border-radius: 1rem;
  overflow: hidden;
`;
const StyledNpm = styled.svg`
  width: 100%;
  height: 100%;
`;

const StyledInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  p {
    font-family: "Inter" sans-serif;
    font-weight: 500;
    font-size: clamp(12px, 2vw, 21px);
    line-height: 120%;
    letter-spacing: -0.01px;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 100%;
  a {
    text-decoration: none;
    color: black;
    font-family: "Urbanist", sans-serif;
    font-weight: 600;
    font-size: clamp(5px, 1.2vw, 12px);
    line-height: 140%;
    letter-spacing: 0.4px;
    border: 2px solid #1b1d1e1a;
    height: clamp(1rem, 3.4vw, 3rem);
    border-radius: 2rem;
    margin-right: 1rem;
    padding: 0.8rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: #f0f0f0;

    &:last-child {
      background-color: #243459;
      box-shadow: 25px 12px 34px 0px #00000040;
    }
  }
`;
const StyledLink = styled.a`
  height: 100%;
  overflow: hidden;
`;
