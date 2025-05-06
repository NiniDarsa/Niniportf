import styled from "styled-components";

const ButtonContainer = () => {
  return (
    <StyledBtnContainer>
      <StyledButtonFirst>Start a Project</StyledButtonFirst>
      <StyledButtonSecond>Explore a Work</StyledButtonSecond>
    </StyledBtnContainer>
  );
};
export default ButtonContainer;

const StyledBtnContainer = styled.div`
  margin-top: 2rem;

  button {
    width: 10rem;
    height: 4.5rem;
    border-radius: 1000px;
    color: white;
    cursor: pointer;
    transition: all 0.2s ease;
  }
`;
const StyledButtonSecond = styled.button`
  background: linear-gradient(180.89deg, #a39dff 0.76%, #506dff 99.23%);
  box-shadow: 0px 12px 12px 0px #1a1a1a0d;

  box-shadow: 0px 4px 6px 0px #ffffff59 inset;
  &:hover {
    background: linear-gradient(180.89deg, #bcb6ff 0.76%, #3355ff 99.23%);
    box-shadow: 0 0 10px #8d9dff, inset 0px 4px 8px 0px #ffffff80;
    transform: scale(1.03);
  }
`;
const StyledButtonFirst = styled.button`
  background-color: #1a1a1a;
  box-shadow: 0px 12px 12px 0px #1a1a1a26;

  box-shadow: 0px 4px 6px 0px #ffffff59 inset;
  margin-right: 0.6rem;
  &:hover {
    background-color: #333333;
    box-shadow: 0px 8px 16px 0px #00000055, inset 0px 4px 8px 0px #ffffff80;
    transform: scale(1.03);
  }
`;
