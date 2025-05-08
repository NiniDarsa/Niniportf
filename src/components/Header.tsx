import styled from "styled-components";
import MainHeader from "./PrimaryHeader";
import SecondaryHeader from "./SecondaryHeader";
import ButtonContainer from "./ButtonContainer";

const Header = () => {
  return (
    <StyledHeaderContainer>
      <MainHeader />
      <SecondaryHeader />
      <ButtonContainer />
    </StyledHeaderContainer>
  );
};
export default Header;

const StyledHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
