import styled from "styled-components";
import useScrollToSectionContext from "../Context/useScrollToSection";

const Feedback = () => {
  const { sectionFeedBack } = useScrollToSectionContext();

  return (
    <StyledFeedback ref={sectionFeedBack}>
      <h1>Feedback that inspires</h1>
      <StyledContainer>
        <Container>
          <FeedBack style={{ transform: "rotate(-5deg)" }}>
            <p>
              "Nino truly understands how to turn complex ideas into simple,
              elegant designs. Working with her was seamless and inspiring."
            </p>
            <SmallText>Startup Founder</SmallText>
          </FeedBack>
        </Container>
        <Container>
          <svg
            width="150"
            height="152"
            viewBox="0 0 150 152"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_di_322_22160)">
              <rect
                x="20.4576"
                y="0.406738"
                width="120"
                height="120"
                rx="32"
                transform="rotate(5 20.4576 0.406738)"
                fill="#1A1A1A"
              />
              <g clipPath="url(#clip0_322_22160)">
                <path
                  d="M78.0785 50.9129C78.883 50.2104 79.922 49.867 80.9648 49.9583C85.6561 50.3687 90.0772 50.7555 94.4311 51.1364C103.188 51.9026 106.609 63.3003 99.8538 69.2001L85.1385 82.0514C84.463 82.6414 83.4442 82.0925 83.5239 81.1815L84.6051 68.8233L86.3056 67.3381C87.6567 66.1581 86.9724 63.8785 85.221 63.7253L65.394 61.9907L78.0785 50.9129Z"
                  fill="white"
                />
                <path
                  d="M71.9209 79.9015C71.1165 80.604 70.0774 80.9473 69.0347 80.8561C64.3433 80.4457 59.9222 80.0589 55.5684 79.678C46.8115 78.9118 43.3901 67.5141 50.1457 61.6142L64.861 48.763C65.5365 48.173 66.5553 48.7219 66.4756 49.6328L65.3945 61.991L63.6939 63.4763C62.3427 64.6563 63.0271 66.9358 64.7785 67.089L84.6055 68.8236L71.9209 79.9015Z"
                  fill="white"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_di_322_22160"
                x="-2.00104"
                y="0.406738"
                width="154.002"
                height="154.002"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="12" />
                <feGaussianBlur stdDeviation="6" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.101961 0 0 0 0 0.101961 0 0 0 0 0.101961 0 0 0 0.15 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_322_22160"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_322_22160"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="3" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect2_innerShadow_322_22160"
                />
              </filter>
              <clipPath id="clip0_322_22160">
                <rect
                  width="56"
                  height="56"
                  fill="white"
                  transform="translate(49.5469 35.0737) rotate(5)"
                />
              </clipPath>
            </defs>
          </svg>
        </Container>
        <Container>
          <svg
            width="150"
            height="152"
            viewBox="0 0 150 152"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_di_322_22164)">
              <rect
                x="9.99896"
                y="10.6802"
                width="120"
                height="120"
                rx="32"
                transform="rotate(-5 9.99896 10.6802)"
                fill="#1A1A1A"
              />
              <path
                d="M87.0695 80.2279C92.187 79.6749 95.9424 75.121 95.4914 69.966C95.272 67.4589 94.0664 65.1417 92.1397 63.5239L75.0316 49.1589L75.8877 58.9432C76.0308 60.5795 76.8177 62.092 78.0753 63.1479L82.083 66.5131L82.0939 66.522L88.8137 72.1644C89.0319 72.3476 89.0604 72.6732 88.8773 72.8915C88.6943 73.1099 88.3689 73.1383 88.1507 72.9551L85.8344 71.0102L66.1321 72.7339L64.1887 75.0515C64.0056 75.2699 63.6803 75.2983 63.462 75.115C63.2438 74.9318 63.2153 74.6063 63.3984 74.388L69.0364 67.6644L69.0456 67.6537L72.408 63.6438C73.4632 62.3855 73.9755 60.7593 73.8323 59.123L72.9763 49.3387L58.6226 66.4563C57.0061 68.384 56.2212 70.8754 56.4405 73.3825C56.8915 78.5375 61.3807 82.3701 66.5164 82.0261L87.0695 80.2279Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_di_322_22164"
                x="-2.00104"
                y="0.22168"
                width="154.002"
                height="154.002"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="12" />
                <feGaussianBlur stdDeviation="6" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.101961 0 0 0 0 0.101961 0 0 0 0 0.101961 0 0 0 0.15 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_322_22164"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_322_22164"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="3" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect2_innerShadow_322_22164"
                />
              </filter>
            </defs>
          </svg>
        </Container>
        <Container>
          <FeedBack style={{ transform: "rotate(5deg)" }}>
            <p>
              "Nino delivered beautiful, responsive websites that exceeded our
              expectations. Professional, creative, and reliable from start to
              finish"
            </p>
            <SmallText>Creative Director, Marketing Agency</SmallText>
          </FeedBack>
        </Container>
        <Container>
          <FeedBack style={{ transform: "rotate(-5deg)" }}>
            <p>
              "Nino is a highly skilled front-end developer. She's
              detail-oriented, proactive, and consistently brings great energy
              to the team."
            </p>
            <SmallText>Team Lead, Software Company</SmallText>
          </FeedBack>
        </Container>
        <Container>
          <svg
            width="150"
            height="152"
            viewBox="0 0 150 152"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_di_322_22184)">
              <rect
                x="20.4576"
                y="0.0366211"
                width="120"
                height="120"
                rx="32"
                transform="rotate(5 20.4576 0.0366211)"
                fill="#1A1A1A"
              />
              <path
                d="M81.4953 75.2421C86.7771 75.7042 91.4334 71.7971 91.8955 66.5154C92.3576 61.2336 88.4505 56.5773 83.1687 56.1152C78.2117 55.6815 73.8057 59.0962 72.9006 63.8838C71.024 62.8292 68.9593 62.1163 66.8098 61.7882C68.6806 54.2848 75.7787 49.0442 83.7265 49.7396C92.5295 50.5097 99.0413 58.2702 98.2711 67.0732C97.5291 75.555 90.2972 81.9099 81.8963 81.6732L81.8938 81.7015L71.3895 80.7824L71.5112 79.3914C71.6693 77.5843 71.0778 75.7619 69.8269 74.3286C68.5723 72.8912 66.7573 71.967 64.7722 71.7933C62.7871 71.6197 60.8392 72.2146 59.3541 73.4123C57.8733 74.6066 56.9743 76.2986 56.8162 78.1057L56.6945 79.4968L49.6968 78.8846L49.8215 77.4595C50.1474 73.7339 52.0036 70.3255 54.9346 67.9714C57.7719 65.6926 61.392 64.5776 65.0385 64.8122C65.1526 64.8195 65.2667 64.8281 65.3807 64.8381C65.469 64.8458 65.5572 64.8543 65.6452 64.8636C69.3064 65.2499 72.7087 66.9815 75.124 69.7377C76.4621 71.2646 77.438 73.0397 78.0013 74.9365L81.4953 75.2421Z"
                fill="white"
              />
              <path
                d="M67.327 76.3508C68.0449 77.0946 68.4014 78.0495 68.3178 79.0052L68.1868 80.5019L59.8985 79.7768L60.0294 78.2801C60.1131 77.3243 60.6299 76.4459 61.4661 75.838C62.3025 75.2301 63.3898 74.9427 64.4889 75.0388C65.588 75.135 66.6089 75.6069 67.327 76.3508Z"
                fill="white"
              />
              <path
                d="M86.1204 64.4331C84.968 64.3322 84.1156 63.3164 84.2164 62.164L84.262 61.6423C84.3376 60.7781 83.6983 60.0161 82.834 59.9405C81.9697 59.8649 81.2078 60.5042 81.1322 61.3685L81.0865 61.8902C80.9857 63.0426 79.9698 63.895 78.8174 63.7941L78.2957 63.7485C77.4315 63.6729 76.6695 64.3123 76.5939 65.1766C76.5183 66.0409 77.1576 66.8028 78.0219 66.8784L78.5435 66.924C79.6959 67.0248 80.5484 68.0408 80.4476 69.1932L80.4019 69.7148C80.3263 70.5791 80.9656 71.341 81.8299 71.4167C82.6942 71.4923 83.4562 70.853 83.5318 69.9887L83.5775 69.467C83.6783 68.3146 84.6941 67.4621 85.8465 67.5629L86.3682 67.6086C87.2325 67.6842 87.9944 67.0449 88.07 66.1806C88.1457 65.3163 87.5063 64.5543 86.6421 64.4787L86.1204 64.4331Z"
                fill="white"
              />
              <path
                d="M61.1886 50.3376C61.0654 51.746 62.1073 52.9877 63.5158 53.1109L64.1533 53.1667C65.2096 53.2591 65.991 54.1904 65.8986 55.2467C65.8062 56.3031 64.875 57.0845 63.8186 56.9921L63.1811 56.9363C61.7726 56.8131 60.531 57.855 60.4077 59.2634L60.3519 59.901C60.2595 60.9574 59.3283 61.7388 58.2719 61.6464C57.2156 61.5539 56.4341 60.6227 56.5266 59.5663L56.5823 58.9288C56.7056 57.5203 55.6637 56.2786 54.2552 56.1554L53.6176 56.0996C52.5612 56.0072 51.7798 55.0759 51.8722 54.0195C51.9646 52.9632 52.8959 52.1818 53.9522 52.2742L54.5899 52.33C55.9984 52.4532 57.24 51.4113 57.3633 50.0029L57.419 49.3653C57.5115 48.3089 58.4427 47.5275 59.4991 47.6199C60.5554 47.7124 61.3368 48.6436 61.2444 49.7L61.1886 50.3376Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_di_322_22184"
                x="-2.00104"
                y="0.0366211"
                width="154.002"
                height="154.002"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="12" />
                <feGaussianBlur stdDeviation="6" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.101961 0 0 0 0 0.101961 0 0 0 0 0.101961 0 0 0 0.15 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_322_22184"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_322_22184"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="3" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect2_innerShadow_322_22184"
                />
              </filter>
            </defs>
          </svg>
        </Container>
      </StyledContainer>
    </StyledFeedback>
  );
};
export default Feedback;

const StyledFeedback = styled.div`
  font-family: "Urbanist", sans-serif;
  height: 160vh;
  padding-top: 8rem;
  background-color: white;
  position: relative;

  h1 {
    font-weight: 600;
    font-size: 70px;
    line-height: 98%;
    letter-spacing: 0%;
    text-align: center;
    color: black;
    @media (max-width: 1200px) {
      font-size: 50px;
    }
  }

  @media (max-width: 1250px) {
    height: 170vh;
  }
  @media (max-width: 1100px) {
    height: 200vh;
  }
  @media (max-width: 850px) {
    height: 210vh;
  }

  @media (max-width: 480px) {
    height: 240vh;
  }
`;
const StyledContainer = styled.div`
  height: 70%;
  width: 60%;
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translateX(-50%);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-row-gap: 3rem;

  @media (max-width: 1200px) {
    width: 90%;
  }
  @media (max-width: 700px) {
    top: 15%;
  }
`;

const FeedBack = styled.div`
  border: 1px solid #1a1a1a12;
  box-shadow: 0px 16px 17px 0px #1a1a1a1c;
  color: black;
  width: 90%;
  padding: 2rem 2rem;
  border-radius: 1rem;
  font-weight: 600;
  font-size: 20px;
  line-height: 124%;
  letter-spacing: -1%;
  text-align: center;
  @media (max-width: 350px) {
    font-size: 15px;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SmallText = styled.p`
  font-weight: 600;
  font-size: 10px;
  line-height: 148%;
  letter-spacing: 0%;
  border-top: 1px solid grey;
  margin-top: 1rem;
  padding-top: 1rem;
`;
