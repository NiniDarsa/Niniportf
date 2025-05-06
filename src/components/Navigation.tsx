import styled from "styled-components";

const Navigation = () => {
  return (
    <StyledNav>
      <ul>
        <StyledLi>
          <button>
            <p>Nino</p>
            <p>Experienced Developer</p>
          </button>
        </StyledLi>
        <li>
          <button>Home</button>
          <StyledLine />
        </li>

        <li>
          <button>About</button>
          <StyledLine />
        </li>

        <li>
          <button>SkillSet</button>
          <StyledLine />
        </li>

        <li>
          <button>My Works</button>
          <StyledLine />
        </li>

        <li>
          <button>Testimonials</button>
          <StyledLine />
        </li>

        <li>
          <button>Contact Me</button>
          <StyledLine />
        </li>
      </ul>
    </StyledNav>
  );
};
export default Navigation;

const StyledNav = styled.nav`
  max-width: 70%;
  width: 70%;
  padding: 8px 18px;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 40%);
  z-index: 10;
  margin: 0 auto;
  background-color: #292539;
  border-radius: 3rem;
  border: 1px solid #2b56f091;
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      width: 100%;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0%;
      text-align: center;

      &:hover p {
        width: 100%;
        opacity: 1;
        transform: translateX(0%);
      }

      button {
        background-color: transparent;
        border: none;
        color: white;
        cursor: pointer;
      }
    }
  }
`;
const StyledLi = styled.li`
  padding: 8px 20px;
  width: 10rem;
  border-right: 1px solid grey;

  button {
    width: 100%;
    height: 100%;
    padding: 5px;
    background: linear-gradient(180deg, #ffffff 0%, #f4f4f4 100%);
    border-radius: 3rem;
    p {
      color: #1a1a1a;
      &:nth-child(2) {
        font-size: 0.6rem;
      }
    }
  }
`;

const StyledLine = styled.p`
  width: 0%;
  height: 0.1rem;
  opacity: 0;
  background-color: white;
  transition: all 0.4s ease-in-out;
`;
