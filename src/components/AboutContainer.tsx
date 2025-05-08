import styled from "styled-components";
import AboutImage from "./AboutImage";
import { motion } from "motion/react";
import useIntersectionObserver from "../Hooks/useIntersectionObserver";

const AboutContainer = () => {
  const inView = useIntersectionObserver("about");

  const box1 = {
    hidden: {
      y: -200,
      opacity: 0,
      x: -10,
      rotate: 4,
    }, // Initial position (above the screen)
    show: {
      y: 0,
      x: -10,
      opacity: 1,
      rotate: 4,
      transition: {
        type: "spring", // Makes the animation more bouncy and natural
        stiffness: 100, // Controls the speed of the fall (higher = faster)
        damping: 10, // Controls the bounciness at the end
        delay: 0.6,
      },
    }, // Final position (at the bottom)
  };
  const box2 = {
    hidden: {
      y: -200,
      opacity: 0,
      x: 40,
      rotate: -7,
    }, // Initial position (above the screen)
    show: {
      y: 0,
      opacity: 1,
      x: 40,
      rotate: -7,
      transition: {
        type: "spring", // Makes the animation more bouncy and natural
        stiffness: 100, // Controls the speed of the fall (higher = faster)
        damping: 10, // Controls the bounciness at the end
        delay: 0.4,
      },
    }, // Final position (at the bottom)
  };

  const box3 = {
    hidden: {
      y: -200,
      opacity: 0,
    }, // Initial position (above the screen)
    show: {
      y: 0,
      opacity: 1,

      transition: {
        type: "spring", // Makes the animation more bouncy and natural
        stiffness: 100, // Controls the speed of the fall (higher = faster)
        damping: 10, // Controls the bounciness at the end
        delay: 0.2,
      },
    }, // Final position (at the bottom)
  };

  const box4 = {
    hidden: {
      y: -200,
      opacity: 0,

      rotate: 5,
    }, // Initial position (above the screen)
    show: {
      y: 0,
      opacity: 1,
      rotate: 5,
      transition: {
        type: "spring", // Makes the animation more bouncy and natural
        stiffness: 100, // Controls the speed of the fall (higher = faster)
        damping: 10, // Controls the bounciness at the end
        delay: 0.6,
      },
    }, // Final position (at the bottom)
  };

  const box5 = {
    hidden: {
      y: -200,
      opacity: 0,
      x: 10,
      rotate: 15,
    }, // Initial position (above the screen)
    show: {
      y: 0,
      opacity: 1,
      x: 10,
      rotate: 15,
      transition: {
        type: "spring", // Makes the animation more bouncy and natural
        stiffness: 100, // Controls the speed of the fall (higher = faster)
        damping: 10, // Controls the bounciness at the end
        delay: 0.4,
      },
    }, // Final position (at the bottom)
  };
  const box6 = {
    hidden: {
      y: -200,
      opacity: 0,
      rotate: 6,
    }, // Initial position (above the screen)
    show: {
      y: 0,
      opacity: 1,
      rotate: 6,
      transition: {
        type: "spring", // Makes the animation more bouncy and natural
        stiffness: 100, // Controls the speed of the fall (higher = faster)
        damping: 10, // Controls the bounciness at the end
        delay: 0.2,
      },
    }, // Final position (at the bottom)
  };
  return (
    <StyledContainer id="about">
      <div>
        <StyledBox
          variants={box1}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          // animate="show"
          style={{ transform: "translateX(-10px) rotate(4deg)", zIndex: 3 }}
        >
          <h3>Speciality:</h3>
          <p>Front-End Development & Web Applications</p>
        </StyledBox>

        <StyledBox
          variants={box2}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          // animate="show"
          style={{
            transform: " translateX(40px) rotate(-7deg)",
            zIndex: 2,
          }}
        >
          <h3>Experience:</h3>
          <p>2 years</p>
        </StyledBox>

        <StyledBox
          variants={box3}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          // animate="show"
          style={{ zIndex: 1 }}
        >
          <h3>Projects:</h3>
          <p>20+</p>
        </StyledBox>
      </div>
      <AboutImage />
      <div>
        <StyledBox
          variants={box4}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          // animate="show"
          style={{
            transform: "rotate(5deg)",
            zIndex: 3,
          }}
        >
          <h3>Location:</h3>
          <p>Georgia, Tbilisi</p>
        </StyledBox>

        <StyledBox
          variants={box5}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          // animate="show"
          style={{
            transform: " translateX(10px) rotate(14deg)",
            zIndex: 2,
          }}
        >
          <h3>Availability:</h3>
          <p>Currently open to new projects</p>
        </StyledBox>

        <StyledBox
          variants={box6}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          // animate="show"
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
  width: 90%;
  height: 532px;
  padding: 4rem 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1100px) {
    width: 100%;
  }
`;
const StyledBox = styled(motion.div)`
  box-shadow: 0px 16px 17px 0px #1a1a1a0a;
  border: 1px solid #1a1a1a12;
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
    @media (max-width: 1100px) {
      font-size: 25px;
    }
    @media (max-width: 750px) {
      font-size: 20px;
    }
  }
`;
