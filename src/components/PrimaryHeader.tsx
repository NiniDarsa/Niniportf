import styled from "styled-components";

const PrimaryHeader = () => {
  return (
    <>
      <StyledHeader>
        Hi, I'm <b>Nino Darsavelidze,</b>
        <br /> I Create Outstanding <br /> Web Projects
      </StyledHeader>

      <StyledLittleHeader>
        Designing simple <br /> user experiences.
      </StyledLittleHeader>
    </>
  );
};
export default PrimaryHeader;

const StyledHeader = styled.h1`
  font-family: "Outfit", sans-serif;
  font-weight: 600;
  font-size: clamp(30px, 5vw, 47px);
  padding: 0rem 0.5rem;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: white;

  b {
    color: #5a7bfe;
  }
  @media (max-width: 1100px) {
    margin-left: 1rem;
  }
`;
const StyledLittleHeader = styled.h3`
  font-family: "Caveat", cursive;
  font-weight: 400;
  font-size: clamp(20px, 3vw, 30px);
  line-height: 1;
  text-align: center;
  color: #ffffffa1;
  transform: translate(4rem, -2.8rem) rotate(-8deg);

  @media (max-width: 1100px) {
    transform: translate(5rem, -1.5rem) rotate(-8deg);
  }
  @media (max-width: 300px) {
    transform: translate(5rem, -0.5rem) rotate(-8deg);
  }
`;
