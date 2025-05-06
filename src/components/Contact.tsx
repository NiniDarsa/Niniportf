import styled from "styled-components";
import BackgroundContact from "./BackgroundContact";

const Contact = () => {
  return (
    <StyledContact>
      <BackgroundContact />
      <div className="grid-container">
        <div className="grid-item">Row 1 – full width</div>
        <div className="grid-item">Row 2 – left</div>
        <div className="grid-item">Row 2 – right</div>
        <div className="grid-item">Row 3 – full width</div>
      </div>
    </StyledContact>
  );
};
export default Contact;

const StyledContact = styled.div`
  position: relative;

  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 3fr 1fr;
    gap: 2rem;
    width: 70%;
    height: 80%;
    position: absolute;
    z-index: 2;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
  }

  .grid-item:nth-child(1) {
    grid-column: 1 / 3; /* span full width */
    grid-row: 1;
    justify-content: space-between;
    border-radius: 32px;
    border-width: 1px;
    padding: 32px;
    background: #ffffff;
    border: 1px solid #1a1a1a12;
    box-shadow: 0px 16px 17px 0px #1a1a1a0a;
  }

  .grid-item:nth-child(2) {
    grid-column: 1;
    grid-row: 2;
    background: #0b051f;
    border-radius: 2rem;
    border-image-source: linear-gradient(
      219.75deg,
      #ffffff -4.65%,
      rgba(241, 43, 255, 0) 25.09%
    );
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      pointer-events: none;
      z-index: -1;
      background: linear-gradient(to right, #ffffff, #1842ff),
        linear-gradient(to bottom, #ffffff, #1842ff);
      background-repeat: no-repeat;
      background-size: 2px 100%, 100% 2px;
      background-position: left top, left top;
    }
  }

  .grid-item:nth-child(3) {
    grid-column: 2;
    grid-row: 2;
    background: #0b051f;
    border: 3px solid;
    border-radius: 2rem;
    border-image-source: linear-gradient(
      219.75deg,
      #ffffff -4.65%,
      rgba(241, 43, 255, 0) 25.09%
    );
  }

  .grid-item:nth-child(4) {
    grid-column: 1 / 3; /* span full width */
    grid-row: 3;
    height: 5rem;
    background: #0b051f;
    border: 2px solid;
    border-radius: 2rem;
    border-image-source: linear-gradient(
      219.75deg,
      #ffffff -4.65%,
      rgba(28, 89, 255, 0) 25.09%
    );
  }
`;
