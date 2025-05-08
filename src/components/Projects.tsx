import styled from "styled-components";
import ProjectContainer from "./ProjectContainer";
import BackgroundSecondary from "./BackgroundSecondary";
import Stars from "./Stars";
import useScrollToSectionContext from "../Context/useScrollToSection";

const Projects = () => {
  const { sectionProjects } = useScrollToSectionContext();

  return (
    <StyledProjects ref={sectionProjects}>
      <>
        <BackgroundSecondary />
        <Styledgreensvg
          width="535"
          height="1046"
          viewBox="0 0 535 1046"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_323_22198)">
            <circle
              cx="12"
              cy="523"
              r="223"
              fill="url(#paint0_radial_323_22198)"
              fillOpacity="0.67"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_323_22198"
              x="-511"
              y="0"
              width="1046"
              height="1046"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="150"
                result="effect1_foregroundBlur_323_22198"
              />
            </filter>
            <radialGradient
              id="paint0_radial_323_22198"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(12 523) rotate(90) scale(223)"
            >
              <stop offset="0.390625" stopColor="#46FF52" />
              <stop offset="1" stopColor="#6BFFFD" stopOpacity="0" />
            </radialGradient>
          </defs>
        </Styledgreensvg>
        <StyledBottomsvg
          viewBox="0 0 1440 927"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="1446"
            height="927"
            transform="translate(-3)"
            fill="url(#paint0_linear_287_19193)"
            fillOpacity="0.64"
          />
          <defs>
            <linearGradient
              id="paint0_linear_287_19193"
              x1="723"
              y1="18.8833"
              x2="723"
              y2="1496.93"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#060018" />
              <stop offset="0.203868" stopColor="#060018" />
              <stop offset="1" stopColor="#3635E9" />
            </linearGradient>
          </defs>
        </StyledBottomsvg>
      </>
      <Stars left="-70px" top="-150px" />
      <Stars left="-70px" top="-200px" />

      <h4>
        some of my
        <br /> favorite projects
      </h4>
      <h1>
        Take a look at my <br /> works
      </h1>
      <ProjectContainer />
      <Stars left="-200px" bottom="10px" />
      <Stars left="-200px" bottom="9px" />
      <Stars right="-150px" bottom="-100px" />
    </StyledProjects>
  );
};
export default Projects;
const StyledProjects = styled.div`
  position: relative;
  height: 170vh;
  background: #060018;
  padding-top: 7rem;
  @media (max-width: 1200px) {
    height: 200vh;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 1100px) {
    height: 310vh;
    display: flex;
    justify-content: center;
  }
  @media (max-width: 800px) {
    height: 280vh;
    display: flex;
    justify-content: center;
  }
  @media (max-width: 500px) {
    height: 200vh;
    display: flex;
    justify-content: center;
  }

  h1 {
    font-family: "Urbanist", sans-serif;
    font-weight: 600;
    font-size: 56px;
    line-height: 98%;
    letter-spacing: -2%;
    text-align: center;
    color: white;
    position: absolute;
    z-index: 2;
    left: 50%;
    transform: translateX(-50%);
    @media (max-width: 1100px) {
      font-size: 40px;
    }
    @media (max-width: 650px) {
      font-size: 33px;
    }
  }
  h4 {
    font-family: "Caveat", cursive;
    font-weight: 400;
    line-height: 96%;
    letter-spacing: 0%;
    text-align: center;
    color: #ffffffa1;
    transform: rotate(15deg);
    left: 39%;
    top: 14%;
    position: absolute;
    z-index: 2;
    @media (max-width: 1100px) {
      top: 12%;
      left: 50%;
      transform: translateX(-50%);
    }
    @media (max-width: 500px) {
      top: 18%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
const Styledgreensvg = styled.svg`
  position: absolute;
  top: -50%;
  left: 0;
`;

const StyledBottomsvg = styled.svg`
  position: absolute;
  bottom: 0;
`;
