import styled from "styled-components";
import remoteJob from "../assets/images/remote-jobs.mp4";
import schedule from "../assets/images/schedule.mp4";
import wordCounter from "../assets/images/wordCounter.mp4";
import { motion } from "motion/react";

const projects = [
  {
    id: 1,
    name: "Remote Job Board",
    info: " This project is a modern, user-friendly web application built with React, designed to help job seekers find remote job opportunities.",
    video: remoteJob,
  },
  {
    id: 2,
    name: "Schedulator",
    info: " A React-based application designed to help users organize and manage their daily activities. It allows users to create and track a list of events or tasks, providing an easy way to plan and stay on top of their schedule. Whether it's meetings, appointments, or personal to-dos, this app helps you stay organized and efficient.",
    video: schedule,
  },
  {
    id: 3,
    name: "Word Counter",
    info: "A user-friendly web application built with React that allows users to easily count the number of words in any given text. This app is designed to provide an intuitive and seamless experience, making it perfect for students, writers, bloggers, and anyone who needs to track their word count quickly and accurately.",
    video: wordCounter,
  },
  {
    id: 4,
    name: "React Component Collection (Library)",
    info: " A modern and flexible React component library built with TypeScript, Storybook, Styled Components, and Rollup. This library offers a collection of reusable, customizable UI components that are easy to integrate and enhance your React projects.",
  },
];
type DetailedProjectProp = {
  current: string;
  setCurrent: (current: string) => void;
};
const DetailedProject = ({ current, setCurrent }: DetailedProjectProp) => {
  const CurrentProj = projects.find((elem) => String(elem.id) === current);

  //   const handleClose = () => {
  //     window.location.hash = "";
  //   }; i can still see # thats why i did this
  const handleClose = () => {
    setCurrent("");
    //This line uses the History API to update the URL without reloading the page and without adding a new entry to the browser history stack.
    window.history.replaceState(null, "", window.location.pathname);
  };
  return (
    <StyledOverlay onClick={handleClose}>
      <StyledModal
        onClick={(e) => e.stopPropagation()}
        layoutId={String(CurrentProj?.id)}
      >
        <Closebutton onClick={handleClose}>
          <svg
            viewBox="0 0 164 167"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="164" height="167" fill="#0B0F25" />
            <path
              opacity="0.5"
              d="M150.333 83.5C150.333 121.929 119.739 153.083 82 153.083C44.2605 153.083 13.6667 121.929 13.6667 83.5C13.6667 45.0702 44.2605 13.9167 82 13.9167C119.739 13.9167 150.333 45.0702 150.333 83.5Z"
              fill="#1C274C"
            />
            <path
              d="M61.2927 62.414C63.2942 60.3759 66.5392 60.3759 68.5404 62.414L82 76.12L95.4596 62.4141C97.4611 60.3761 100.706 60.3761 102.707 62.4141C104.709 64.4521 104.709 67.7565 102.707 69.7949L89.2481 83.5L102.707 97.2051C104.709 99.2432 104.709 102.548 102.707 104.586C100.706 106.624 97.4604 106.624 95.4589 104.586L82 90.8807L68.5411 104.586C66.5393 106.624 63.2943 106.624 61.2929 104.586C59.2915 102.548 59.2915 99.2439 61.2929 97.2058L74.7526 83.5L61.2927 69.7942C59.2913 67.7564 59.2913 64.452 61.2927 62.414Z"
              fill="white"
            />
          </svg>
        </Closebutton>
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
        <h2>{CurrentProj?.name}</h2>
        <h3>Project #{CurrentProj?.id}</h3>
        {CurrentProj?.video ? (
          <motion.video
            autoPlay
            muted
            loop
            key={CurrentProj?.video}
            layoutId={`image ${CurrentProj.id}`}
          >
            <source src={CurrentProj?.video} type="video/mp4" />
          </motion.video>
        ) : (
          <Styledsvg
            layoutId={`image ${CurrentProj?.id}`}
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
          </Styledsvg>
        )}

        <p>{CurrentProj?.info}</p>
      </StyledModal>
    </StyledOverlay>
  );
};
export default DetailedProject;
const StyledOverlay = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0%;
  left: 0%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(240, 248, 255, 0.062); /* semi-transparent */
  backdrop-filter: blur(2px); /* adds blur effect */
  z-index: 12;
`;
const StyledModal = styled(motion.div)`
  width: 50%;
  height: 90%;
  position: fixed;
  border-radius: 1rem;
  padding: 2rem 4rem;
  z-index: 13;
  overflow: hidden;
  cursor: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background: linear-gradient(
    to bottom,
    #0b0f24 0%,
    #131a3a 30%,
    #1b295b 60%,
    #354b84 100%
  );

  video {
    width: 100%;
  }
  h2,
  p {
    font-family: "Urbanist", sans-serif;
  }
  p {
    line-height: 30px;
  }
  h3 {
    font-family: "Caveat", cursive;
  }

  @media (max-width: 900px) {
    width: 80%;
  }
`;
const Styledsvg = styled(motion.svg)`
  width: 70%;
`;
const Closebutton = styled.button`
  position: absolute;
  top: 4%;
  right: 4%;
  width: 5%;
  height: 6%;
  background-color: #0b0f25;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(137, 131, 131, 0.15);
  &:hover {
    background-color: #151b3a;
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(200, 198, 198, 0.25);
  }
  svg {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 1100px) {
    width: 10%;
  }
`;
const Styledgreensvg = styled.svg`
  position: absolute;
  left: 0;
  top: -80%;
`;
