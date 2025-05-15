import styled from "styled-components";

const SecondaryHeader = () => {
  return (
    <StyledSecondaryHeader>
      <p>
        I am always striving to expand my knowledge in web development. I
        embrace new challenges and am driven to continuously learn and deepen my
        understanding in this area.
      </p>
    </StyledSecondaryHeader>
  );
};
export default SecondaryHeader;

const StyledSecondaryHeader = styled.div`
  font-family: "Inter" sans-serif;
  font-weight: 400;
  font-size: clamp(12px, 2vw, 16px);
  padding: 0rem 0.5rem;
  line-height: 1.6;
  letter-spacing: -0.02em;
  max-width: 633px;
  max-height: 78px;
  margin-top: 1.7rem;
  @media (max-width: 1100px) {
    margin-left: 1rem;
  }
`;
