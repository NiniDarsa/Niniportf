import { motion, type Variants } from "motion/react";
import styled from "styled-components";

type StarsProp = {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};
const Stars = ({ top, left, right, bottom }: StarsProp) => {
  const stars: Variants = {
    hidden: {
      fill: "#FFD700", // gold color
      fillOpacity: 0,
      scale: 0.5, // small
      filter: "brightness(0.3) blur(2px)", // dim and blurred
    },
    visible: {
      fill: "#FFD700",
      fillOpacity: 1,
      scale: [0.5, 1.2, 0.8], // scaling effect (pulse)
      filter: "brightness(2) drop-shadow(0 0 10px #FFD700)", // glowing effect with shadow
      transition: {
        repeat: Infinity,
        duration: 0.5,
        ease: "linear",
        repeatType: "reverse",
      },
    },
  };

  const rotateAnimation = {
    hidden: {
      rotate: 0, // Initial rotation of 0 degrees
    },
    visible: {
      rotate: 360, // Rotate to 360 degrees
      transition: {
        repeat: Infinity, // Make it repeat infinitely
        duration: 20, // Duration for one full rotation (5 seconds)
        ease: "linear", // Smooth linear rotation
      },
    },
  };

  return (
    <StyledSvg
      variants={rotateAnimation}
      initial="hidden"
      animate="visible"
      width="300"
      height="461"
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      viewBox="0 0 300 461"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.9">
        <g opacity="0.5">
          <circle
            cx="55.9295"
            cy="134.599"
            r="0.662304"
            transform="rotate(-47.0194 55.9295 134.599)"
            fill="white"
          />
          <g>
            <circle
              cx="20.3349"
              cy="135.881"
              r="0.662304"
              transform="rotate(-47.0194 20.3349 135.881)"
              fill="white"
            />
          </g>
          <g>
            <circle
              cx="38.9919"
              cy="107.117"
              r="1.32392"
              transform="rotate(-47.0194 38.9919 107.117)"
              fill="white"
            />
          </g>
          <circle
            cx="9.23993"
            cy="140.019"
            r="0.662304"
            transform="rotate(-47.0194 9.23993 140.019)"
            fill="white"
          />
          <circle
            cx="2.11922"
            cy="105.06"
            r="0.662304"
            transform="rotate(-47.0194 2.11922 105.06)"
            fill="white"
          />
          <g>
            <circle
              cx="12.8788"
              cy="180.25"
              r="1.34224"
              transform="rotate(19.5512 12.8788 180.25)"
              fill="white"
            />
          </g>
          <g>
            <circle
              cx="25.5257"
              cy="206.823"
              r="0.671468"
              transform="rotate(19.5512 25.5257 206.823)"
              fill="white"
            />
          </g>
          <g>
            <motion.circle
              variants={stars}
              initial="hidden"
              animate="visible"
              cx="63.7308"
              cy="163.411"
              r="0.671468"
              transform="rotate(19.5512 63.7308 163.411)"
              //   fill="white"
            />
          </g>
          <g>
            <circle
              cx="99.9483"
              cy="221.853"
              r="0.671468"
              transform="rotate(19.5512 99.9483 221.853)"
              fill="white"
            />
          </g>
          <motion.circle
            variants={stars}
            initial="hidden"
            animate="visible"
            cx="55.2208"
            cy="251.55"
            r="0.671468"
            transform="rotate(19.5512 55.2208 251.55)"
            // fill="white"
          />
          <g>
            <circle
              cx="56.2864"
              cy="218.457"
              r="1.34224"
              transform="rotate(19.5512 56.2864 218.457)"
              fill="white"
            />
          </g>
          <g>
            <motion.circle
              variants={stars}
              initial="hidden"
              animate="visible"
              cx="101.017"
              cy="188.76"
              r="1.34224"
              transform="rotate(19.5512 101.017 188.76)"
              //   fill="white"
            />
          </g>
          <circle
            cx="89.4945"
            cy="257.31"
            r="1.34224"
            transform="rotate(19.5512 89.4945 257.31)"
            fill="white"
          />
          <motion.circle
            variants={stars}
            initial="hidden"
            animate="visible"
            cx="14.7455"
            cy="237.174"
            r="0.671468"
            transform="rotate(19.5512 14.7455 237.174)"
            // fill="white"
          />
          <circle
            cx="46.8968"
            cy="242.896"
            r="0.671468"
            transform="rotate(19.5512 46.8968 242.896)"
            fill="white"
          />
          <g>
            <motion.circle
              variants={stars}
              initial="hidden"
              animate="visible"
              cx="90.4899"
              cy="184.31"
              r="0.671468"
              transform="rotate(19.5512 90.4899 184.31)"
              //   fill="white"
            />
          </g>
          <g>
            <motion.circle
              variants={stars}
              initial="hidden"
              animate="visible"
              cx="54.7457"
              cy="188.709"
              r="0.671468"
              transform="rotate(19.5512 54.7457 188.709)"
              //   fill="red"
            />
          </g>
          <motion.circle
            variants={stars}
            initial="hidden"
            animate="visible"
            cx="99.768"
            cy="347.759"
            r="1.46474"
            transform="rotate(-42.0262 99.768 347.759)"
            // fill="white"
          />
          <g>
            <circle
              cx="124.68"
              cy="355.49"
              r="0.732748"
              transform="rotate(-42.0262 124.68 355.49)"
              fill="white"
            />
          </g>
          <circle
            cx="102.867"
            cy="296.278"
            r="0.732748"
            transform="rotate(-42.0262 102.867 296.278)"
            fill="white"
          />
          <g>
            <motion.circle
              variants={stars}
              initial="hidden"
              animate="visible"
              cx="177.768"
              cy="291.874"
              r="0.732748"
              transform="rotate(-42.0262 177.768 291.874)"
              //   fill="white"
            />
          </g>
          <g>
            <circle
              cx="183.033"
              cy="350.224"
              r="0.732748"
              transform="rotate(-42.0262 183.033 350.224)"
              fill="white"
            />
          </g>
          <g>
            <circle
              cx="151.826"
              cy="332.009"
              r="1.46474"
              transform="rotate(-42.0262 151.826 332.009)"
              fill="white"
            />
          </g>
          <circle
            cx="149.968"
            cy="264.066"
            r="1.46474"
            transform="rotate(-42.0262 149.968 264.066)"
            fill="white"
          />
          <g>
            <motion.circle
              variants={stars}
              initial="hidden"
              animate="visible"
              cx="206.367"
              cy="320.325"
              r="1.46474"
              transform="rotate(-42.0262 206.367 320.325)"
              //   fill="white"
            />
          </g>
          <g>
            <circle
              cx="148.213"
              cy="381.602"
              r="0.732748"
              transform="rotate(-42.0262 148.213 381.602)"
              fill="white"
            />
          </g>
          <g>
            <motion.circle
              variants={stars}
              initial="hidden"
              animate="visible"
              cx="170.407"
              cy="353.72"
              r="0.732748"
              transform="rotate(-42.0262 170.407 353.72)"
              //   fill="white"
            />
          </g>
          <circle
            cx="136.824"
            cy="281.449"
            r="0.732748"
            transform="rotate(-42.0262 136.824 281.449)"
            fill="white"
          />
          <circle
            cx="122.479"
            cy="318.039"
            r="0.732748"
            transform="rotate(-42.0262 122.479 318.039)"
            fill="white"
          />
        </g>
        <g opacity="0.5">
          <motion.circle
            variants={stars}
            initial="hidden"
            animate="visible"
            cx="55.9291"
            cy="134.599"
            r="0.662304"
            transform="rotate(-47.0194 55.9291 134.599)"
            // fill="white"
          />
          <g>
            <circle
              cx="20.3345"
              cy="135.881"
              r="0.662304"
              transform="rotate(-47.0194 20.3345 135.881)"
              fill="white"
            />
          </g>
          <g>
            <motion.circle
              variants={stars}
              initial="hidden"
              animate="visible"
              cx="38.9915"
              cy="107.117"
              r="1.32392"
              transform="rotate(-47.0194 38.9915 107.117)"
              //   fill="white"
            />
          </g>
          <circle
            cx="9.23956"
            cy="140.019"
            r="0.662304"
            transform="rotate(-47.0194 9.23956 140.019)"
            fill="white"
          />
          <circle
            cx="2.11885"
            cy="105.06"
            r="0.662304"
            transform="rotate(-47.0194 2.11885 105.06)"
            fill="white"
          />
          <g>
            <motion.circle
              variants={stars}
              initial="hidden"
              animate="visible"
              cx="12.8784"
              cy="180.249"
              r="1.34224"
              transform="rotate(19.5512 12.8784 180.249)"
              //   fill="white"
            />
          </g>
          <g>
            <circle
              cx="25.5254"
              cy="206.823"
              r="0.671468"
              transform="rotate(19.5512 25.5254 206.823)"
              fill="white"
            />
          </g>
          <g>
            <motion.circle
              variants={stars}
              initial="hidden"
              animate="visible"
              cx="63.7304"
              cy="163.411"
              r="0.671468"
              transform="rotate(19.5512 63.7304 163.411)"
              //   fill="white"
            />
          </g>
          <g>
            <circle
              cx="99.9479"
              cy="221.853"
              r="0.671468"
              transform="rotate(19.5512 99.9479 221.853)"
              fill="white"
            />
          </g>
          <motion.circle
            variants={stars}
            initial="hidden"
            animate="visible"
            cx="55.2205"
            cy="251.55"
            r="0.671468"
            transform="rotate(19.5512 55.2205 251.55)"
            // fill="white"
          />
          <g>
            <circle
              cx="56.286"
              cy="218.456"
              r="1.34224"
              transform="rotate(19.5512 56.286 218.456)"
              fill="white"
            />
          </g>
          <g>
            <motion.circle
              variants={stars}
              initial="hidden"
              animate="visible"
              cx="101.016"
              cy="188.76"
              r="1.34224"
              transform="rotate(19.5512 101.016 188.76)"
              //   fill="white"
            />
          </g>
          <circle
            cx="89.4941"
            cy="257.31"
            r="1.34224"
            transform="rotate(19.5512 89.4941 257.31)"
            fill="white"
          />
          <circle
            cx="14.7451"
            cy="237.174"
            r="0.671468"
            transform="rotate(19.5512 14.7451 237.174)"
            fill="white"
          />
          <motion.circle
            variants={stars}
            initial="hidden"
            animate="visible"
            cx="46.8964"
            cy="242.896"
            r="0.671468"
            transform="rotate(19.5512 46.8964 242.896)"
            // fill="white"
          />
          <g>
            <circle
              cx="90.4895"
              cy="184.31"
              r="0.671468"
              transform="rotate(19.5512 90.4895 184.31)"
              fill="white"
            />
          </g>
          <g>
            <circle
              cx="54.7453"
              cy="188.709"
              r="0.671468"
              transform="rotate(19.5512 54.7453 188.709)"
              fill="white"
            />
          </g>
          <circle
            cx="99.7676"
            cy="347.759"
            r="1.46474"
            transform="rotate(-42.0262 99.7676 347.759)"
            fill="white"
          />
          <g>
            <motion.circle
              variants={stars}
              initial="hidden"
              animate="visible"
              cx="124.68"
              cy="355.49"
              r="0.732748"
              transform="rotate(-42.0262 124.68 355.49)"
              //   fill="white"
            />
          </g>
          <circle
            cx="102.867"
            cy="296.278"
            r="0.732748"
            transform="rotate(-42.0262 102.867 296.278)"
            fill="white"
          />
          <g>
            <motion.circle
              variants={stars}
              initial="hidden"
              animate="visible"
              cx="177.768"
              cy="291.874"
              r="0.732748"
              transform="rotate(-42.0262 177.768 291.874)"
              //   fill="white"
            />
          </g>
          <g>
            <circle
              cx="183.033"
              cy="350.224"
              r="0.732748"
              transform="rotate(-42.0262 183.033 350.224)"
              fill="white"
            />
          </g>
          <g>
            <circle
              cx="151.826"
              cy="332.009"
              r="1.46474"
              transform="rotate(-42.0262 151.826 332.009)"
              fill="white"
            />
          </g>
          <motion.circle
            variants={stars}
            initial="hidden"
            animate="visible"
            cx="149.967"
            cy="264.066"
            r="1.46474"
            transform="rotate(-42.0262 149.967 264.066)"
            // fill="white"
          />
          <g>
            <circle
              cx="206.367"
              cy="320.325"
              r="1.46474"
              transform="rotate(-42.0262 206.367 320.325)"
              fill="white"
            />
          </g>
          <g>
            <circle
              cx="148.213"
              cy="381.602"
              r="0.732748"
              transform="rotate(-42.0262 148.213 381.602)"
              fill="white"
            />
          </g>
          <g>
            <circle
              cx="170.406"
              cy="353.72"
              r="0.732748"
              transform="rotate(-42.0262 170.406 353.72)"
              fill="white"
            />
          </g>
          <motion.circle
            variants={stars}
            initial="hidden"
            animate="visible"
            cx="136.824"
            cy="281.449"
            r="0.732748"
            transform="rotate(-42.0262 136.824 281.449)"
            // fill="white"
          />
          <circle
            cx="122.479"
            cy="318.039"
            r="0.732748"
            transform="rotate(-42.0262 122.479 318.039)"
            fill="white"
          />
        </g>
      </g>
    </StyledSvg>
  );
};
export default Stars;

const StyledSvg = styled(motion.svg)<{
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}>`
  position: absolute;

  height: auto;
  z-index: 2;

  top: ${({ top }) => top || "auto"};
  left: ${({ left }) => left || "auto"};
  right: ${({ right }) => right || "auto"};
  bottom: ${({ bottom }) => bottom || "auto"};
`;
