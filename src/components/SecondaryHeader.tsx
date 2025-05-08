import styled from "styled-components";

const SecondaryHeader = () => {
  return (
    <StyledSecondaryHeader>
      <p>
        I am always striving to expand my knowledge in web development. I
        embrace new
      </p>
      <p>
        challenges and am driven to continuously learn and deepen my
        understanding in this area.
      </p>
    </StyledSecondaryHeader>
  );
};
export default SecondaryHeader;

const StyledSecondaryHeader = styled.div`
  font-family: "Inter" sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: -2%;
  max-width: 633px;
  max-height: 78px;
  margin-top: 27px;
  @media (max-width: 700px) {
    font-size: 14px;
    padding: 0rem 1rem;
  }
`;
