import styled from "styled-components";
import BackgroundContact from "./BackgroundContact";
import Stars from "./Stars";
import useScrollToSectionContext from "../Context/useScrollToSection";

const Contact = () => {
  const {
    sectionContact,
    scrollToSection,
    sectionAbout,
    sectionFeedBack,
    sectionHome,
    sectionProjects,
    sectionSkills,
  } = useScrollToSectionContext();

  return (
    <StyledContact ref={sectionContact}>
      <>
        <BackgroundContact />
        <Stars top="-10px" left="-100px" />
        <Stars top="-10px" right="-100px" />
      </>
      <div className="grid-container">
        <div className="grid-item">
          <h2>
            Lets make your
            <br />
            product shine bright
          </h2>
          <>
            <button onClick={() => scrollToSection(sectionFeedBack)}>
              See My FeedBacks
            </button>
          </>
        </div>
        <div className="grid-item">
          <ButtonContainer>
            <button onClick={() => scrollToSection(sectionHome)}>Home</button>
            <button onClick={() => scrollToSection(sectionAbout)}>About</button>
            <button onClick={() => scrollToSection(sectionSkills)}>
              Skills
            </button>
            <button onClick={() => scrollToSection(sectionProjects)}>
              Works
            </button>
          </ButtonContainer>
          <StyleInfo>
            <div>NnoDarsa700@gmail.com</div>
            <a href="https://www.linkedin.com/in/nino-darsavelidze-123822205/">
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.4815 18.3332H3.51854C2.49579 18.3332 1.66669 17.5041 1.66669 16.4813V3.51836C1.66669 2.49561 2.49579 1.6665 3.51854 1.6665H16.4815C17.5043 1.6665 18.3334 2.49561 18.3334 3.51836V16.4813C18.3334 17.5041 17.5043 18.3332 16.4815 18.3332ZM13.4362 15.8332H15.8334V10.9088C15.8334 8.8252 14.6523 7.81777 13.0025 7.81777C11.352 7.81777 10.6574 9.10306 10.6574 9.10306V8.05539H8.34724V15.8332H10.6574V11.7503C10.6574 10.6563 11.161 10.0053 12.1249 10.0053C13.0109 10.0053 13.4362 10.6309 13.4362 11.7503V15.8332ZM4.16669 5.60173C4.16669 6.39431 4.80433 7.03696 5.59122 7.03696C6.37811 7.03696 7.01537 6.39431 7.01537 5.60173C7.01537 4.80915 6.37811 4.1665 5.59122 4.1665C4.80433 4.1665 4.16669 4.80915 4.16669 5.60173ZM6.80726 15.8332H4.39835V8.05539H6.80726V15.8332Z"
                    fill="#1A1A1A"
                  />
                </svg>
              </div>
            </a>
            <a href="https://github.com/NiniDarsa">
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 277 286"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_2)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M138.5 0C214.994 0 277 65.636 277 146.617C277 211.382 237.361 266.323 182.363 285.728C175.341 287.172 172.848 282.593 172.848 278.689C172.848 273.856 173.014 258.069 173.014 238.45C173.014 224.779 168.582 215.856 163.61 211.309C194.454 207.677 226.863 195.278 226.863 138.964C226.863 122.948 221.489 109.879 212.597 99.6112C214.038 95.9075 218.788 80.9945 211.24 60.8029C211.24 60.8029 199.634 56.8743 173.194 75.8361C162.128 72.59 150.273 70.9567 138.5 70.8995C126.728 70.9567 114.886 72.59 103.833 75.8361C77.3661 56.8743 65.7321 60.8029 65.7321 60.8029C58.2116 80.9945 62.9621 95.9075 64.3887 99.6112C55.5385 109.879 50.1232 122.948 50.1232 138.964C50.1232 195.135 82.4629 207.724 113.224 211.428C109.263 215.089 105.676 221.546 104.429 231.027C96.5345 234.774 76.4797 241.258 64.1255 218.85C64.1255 218.85 56.7989 204.763 42.8935 203.733C42.8935 203.733 29.3897 203.548 41.9516 212.643C41.9516 212.643 51.0234 217.147 57.3252 234.093C57.3252 234.093 65.4551 260.261 103.986 251.395C104.055 263.65 104.18 275.2 104.18 278.689C104.18 282.565 101.631 287.1 94.7201 285.742C39.6802 266.365 0 211.396 0 146.617C0 65.636 62.0203 0 138.5 0Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_2">
                      <rect width="277" height="286" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </a>
          </StyleInfo>
        </div>
        <div className="grid-item">
          <h1>Let's Connect</h1>
          <form>
            <input type="text" placeholder="Enter your name" />
            <input type="text" placeholder="Enter your email" />
            <textarea placeholder="How can I help you" />
            <button>Send Message</button>
          </form>
        </div>
        <div className="grid-item">
          <p>
            <span> &copy;</span> 2025, Nino Darsavlidze
          </p>
        </div>
      </div>
    </StyledContact>
  );
};
export default Contact;

const StyledContact = styled.div`
  position: relative;
  font-family: "Urbanist", sans-serif;
  @media (max-width: 1200px) {
    height: 170vh;
  }

  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 3fr 1fr;
    gap: 2rem;
    width: 60%;
    height: 82%;
    position: absolute;
    z-index: 2;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: 1200px) {
      width: 80%;
      height: 100%;
    }
    @media (max-width: 1100px) {
      width: 95%;
      /* display: grid; */
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 2fr 2fr 1fr;
    }
  }

  .grid-item:nth-child(1) {
    grid-column: 1 / 3;
    grid-row: 1;
    justify-content: space-between;
    border-radius: 32px;
    border-width: 1px;
    padding: 2rem;
    background: #ffffff;
    border: 1px solid #1a1a1a12;
    box-shadow: 0px 16px 17px 0px #1a1a1a0a;
    display: flex;
    justify-content: space-between;

    button {
      background: #1a1a1a;
      box-shadow: 0px 12px 12px 0px #1a1a1a26;
      box-shadow: 0px 4px 6px 0px #ffffff59 inset;
      color: white;
      font-weight: 600;
      font-size: 14px;
      line-height: 142%;
      padding: 1rem;
      border-radius: 4rem;
      cursor: pointer;
      transition: all 0.4s ease;
      @media (max-width: 1100px) {
        font-size: 10px;
        line-height: 130%;
      }

      &:hover {
        background: #333333;
        color: #ffffff;
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2),
          0px 4px 6px rgba(255, 255, 255, 0.4) inset;
        transform: scale(1.05);
      }
    }

    h2 {
      color: black;
      font-weight: 600;
      font-size: 2rem;
      line-height: 116%;
      letter-spacing: -3%;
      @media (max-width: 800px) {
        font-size: 1.5rem;
      }
    }
  }

  .grid-item:nth-child(2) {
    grid-column: 1;
    grid-row: 2;
    background: #0b051f;
    position: relative;
    border-radius: 0.5rem;
    overflow: hidden;
    padding: 40px 32px;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;

      background: linear-gradient(to right, #33314b 0%, #343a6b 10%, #090419)
          top left / 80% 4px no-repeat,
        linear-gradient(to bottom, #33314b 0%, #343a6b 23%, #090419) top left /
          4px 50% no-repeat;
      background-repeat: no-repeat;
    }
    @media (max-width: 1100px) {
      display: flex;
      justify-content: space-between;
      grid-column: 1 / 3;
      grid-row: 2;
      height: 15rem;
    }
  }

  .grid-item:nth-child(3) {
    grid-column: 2;
    grid-row: 2;
    background: #0b051f;
    position: relative;
    border-radius: 0.5rem;
    overflow: hidden;
    padding: 2.5rem 2.3rem;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;

      background: linear-gradient(to right, #c5a0cb 0%, #804b8d 20%, #090419)
          top left / 80% 4px no-repeat,
        linear-gradient(to bottom, #c5a0cb 0%, #804b8d 23%, #090419) top left /
          4px 50% no-repeat;
      background-repeat: no-repeat;
    }
    @media (max-width: 1100px) {
      grid-column: 1 / 3;
      grid-row: 3;
      height: 25rem;
    }
    form {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 1.5rem 0;
      position: relative;
      z-index: 2;
      input,
      textarea {
        background: #1f1838;
        border: 1px solid #ffffff1f;
        border-radius: 1rem;
        height: 48px;
        padding: 2px 20px;
        width: 100%;
        &:nth-child(3) {
          height: 8rem;
          vertical-align: top;
          position: relative;
          padding-top: 1rem;
        }
      }
      textarea {
        max-width: 100%;
      }
      button {
        background: linear-gradient(180deg, #ffffff 0%, #f4f4f4 100%);
        height: 3rem;
        border-radius: 2rem;
        cursor: pointer;

        font-weight: 200;
        font-size: 14px;
        line-height: 142%;
        letter-spacing: 0%;
        transition: all 0.4s ease;
        &:hover {
          background: linear-gradient(180deg, #ffffff 0%, #e0e0e0 100%);
          box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
          transform: scale(1.05);
        }
      }
    }
    @media (max-width: 800px) {
      font-size: 0.8rem;
    }
  }

  .grid-item:nth-child(4) {
    grid-column: 1 / 3;
    grid-row: 3;
    height: 5rem;
    background: #0b051f;
    position: relative;
    border: 0px solid black;
    border-radius: 0.5rem;
    overflow: hidden;
    @media (max-width: 1100px) {
      grid-column: 1 / 3;
      grid-row: 4;
    }
    &:before {
      content: "";
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 1;
      background:
    /* Left-Bottom corner */ linear-gradient(
            to top,
            #33314b 0%,
            #343a6b 10%,
            #090419
          )
          bottom left / 5px 70% no-repeat,
        linear-gradient(to left, #090419 0%, #343a6b 23%, #33314b) bottom left /
          40% 5px no-repeat,
        /* Right-Top corner */
          linear-gradient(to bottom, #c5a0cb 0%, #804b8d 10%, #090419) top right /
          5px 60% no-repeat,
        linear-gradient(to right, #090419 0%, #804b8d 80%, #c5a0cb) top right /
          40% 5px no-repeat;
    }

    p {
      position: absolute;
      left: 3%;
      top: 50%;
      transform: translateY(-50%);
      font-weight: 600;
      font-size: 14px;
      line-height: 142%;
      letter-spacing: 0%;
      color: #ffffffb2;
    }
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  button {
    font-weight: 400;
    font-size: 210%;
    line-height: 50px;
    width: 50%;
    background-color: transparent;
    border: none;
    color: white;
    text-align: left;
    cursor: pointer;
    z-index: 2;

    &:hover {
      font-weight: 600;
      font-size: 220%;
      color: #804b8d;
      transform: translateY(-4px);
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    }
    @media (max-width: 1100px) {
      font-size: 120%;
    }
  }
`;
const StyleInfo = styled.div`
  height: 80%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
  a {
    display: block;
    height: 3rem;
    width: 3rem;
  }
  div {
    background: linear-gradient(180deg, #ffffff 0%, #f4f4f4 100%);
    border: 1px solid #1a1a1a12;
    border-radius: 2rem;
    color: black;
    height: 3rem;
    padding: 1rem 0.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;
    transition: all 0.4s ease;
    @media (max-width: 1100px) {
      height: 2rem;
    }

    &:hover {
      background: linear-gradient(180deg, #ffffff 0%, #e0e0e0 100%);
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
      transform: scale(1.05);
    }
    &:first-child {
      font-weight: 600;
      font-size: 14px;
      line-height: 142%;
    }

    &:nth-child(2),
    &:nth-child(3) {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
`;
