import styled from "styled-components";
import firstProj from "../assets/images/1stProj.png";
import secondProj from "../assets/images/2ndProj.png";
import thirdProj from "../assets/images/3rdProj.png";
const ProjectContainer = () => {
  return (
    <StyleContainer>
      <Card>
        <img src={firstProj} />
        <StyledContainer>
          <p>Remote Job Board</p>
          <ButtonContainer>
            <button>
              <a href="https://github.com/NiniDarsa/react-job-board">GitHub</a>
            </button>
            <button>Live Demo</button>
            <button>
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
            </button>
          </ButtonContainer>
        </StyledContainer>
      </Card>
      <Card>
        <img src={secondProj} />
        <StyledContainer>
          <p>Schedulator</p>
          <ButtonContainer>
            <button>
              <a href="https://github.com/NiniDarsa/schedule">GitHub</a>
            </button>
            <button>Live Demo</button>
            <button>
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
            </button>
          </ButtonContainer>
        </StyledContainer>
      </Card>

      <Card>
        <img src={thirdProj} />
        <StyledContainer>
          <p>Word Counter</p>
          <ButtonContainer>
            <button>
              <a href="https://github.com/NiniDarsa/word-count">GitHub</a>
            </button>
            <button>Live Demo</button>
            <button>
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
            </button>
          </ButtonContainer>
        </StyledContainer>
      </Card>

      <Card>
        <SvgContainer>
          <StyledNpm
            // width="74"
            // height="338"
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
        <StyledContainer>
          <p>Component Library</p>
          <ButtonContainer>
            <button>
              <a href="https://github.com/NiniDarsa/react-component-library">
                GitHub
              </a>
            </button>
            <button>Live Demo</button>
            <button>
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
            </button>
          </ButtonContainer>
        </StyledContainer>
      </Card>
    </StyleContainer>
  );
};
export default ProjectContainer;
const StyleContainer = styled.div`
  padding: 12rem 6rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem;
  position: absolute;
  z-index: 2;
`;
const Card = styled.div`
  height: 24rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  img {
    height: 80%;
    border-radius: 1rem;
  }
`;
const SvgContainer = styled.div`
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cb3837;
  border-radius: 1rem;
`;
const StyledNpm = styled.svg`
  height: 80%;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-family: "Inter" sans-serif;
    font-weight: 500;
    font-size: 21px;
    line-height: 120%;
    letter-spacing: -1%;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;

  button {
    font-family: "Urbanist", sans-serif;
    font-weight: 600;
    font-size: 12px;
    line-height: 140%;
    letter-spacing: 0.4%;
    border: 2px solid #1b1d1e1a;
    height: 3rem;
    border-radius: 2rem;
    margin-right: 1rem;
    padding: 0.8rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:last-child {
      background-color: #243459;
      box-shadow: 25px 12px 34px 0px #00000040;
    }
    a {
      text-decoration: none;
      color: black;
    }
  }
`;
