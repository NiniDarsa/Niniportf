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
  font-size: 46px;
  line-height: 120%;
  letter-spacing: -2%;
  color: white;

  b {
    color: #5a7bfe;
  }
  @media (max-width: 1100px) {
    font-size: 43px;
  }
  @media (max-width: 700px) {
    font-size: 37px;
    padding: 0rem 1rem;
  }
  @media (max-width: 490px) {
    font-size: 30px;
  }
  @media (max-width: 400px) {
    font-size: 26px;
  }
`;
const StyledLittleHeader = styled.h3`
  font-family: "Caveat", cursive;
  font-weight: 400;
  font-size: 21.4px;
  line-height: 96%;
  letter-spacing: 0%;
  text-align: center;
  color: #ffffffa1;
  transform: translate(30px, -45px) rotate(-8deg);
  @media (max-width: 1100px) {
    font-size: 20px;
  }
`;
