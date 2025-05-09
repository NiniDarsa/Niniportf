import styled from "styled-components";
import useScrollToSectionContext from "../Context/useScrollToSection";

type NavigationProp = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};
const Navigation = ({ isOpen, setIsOpen }: NavigationProp) => {
  const {
    sectionAbout,
    sectionContact,
    sectionFeedBack,
    sectionHome,
    sectionProjects,
    sectionSkills,
    scrollToSection,
  } = useScrollToSectionContext();

  return (
    <StyledNav $isopen={isOpen}>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <ul>
        <StyledLi>
          <button>
            <a href="https://github.com/NiniDarsa">
              <p>Nino</p>
              <p>Front-end Developer</p>
            </a>
          </button>
        </StyledLi>

        <li>
          <button
            onClick={() => {
              scrollToSection(sectionHome), setIsOpen(false);
            }}
          >
            Home
          </button>
          <StyledLine />
        </li>

        <li>
          <button
            onClick={() => {
              scrollToSection(sectionAbout), setIsOpen(false);
            }}
          >
            About
          </button>
          <StyledLine />
        </li>

        <li>
          <button
            onClick={() => {
              scrollToSection(sectionSkills), setIsOpen(false);
            }}
          >
            SkillSet
          </button>
          <StyledLine />
        </li>

        <li>
          <button
            onClick={() => {
              scrollToSection(sectionProjects), setIsOpen(false);
            }}
          >
            My Works
          </button>
          <StyledLine />
        </li>

        <li>
          <button
            onClick={() => {
              scrollToSection(sectionFeedBack), setIsOpen(false);
            }}
          >
            Testimonials
          </button>
          <StyledLine />
        </li>

        <li>
          <button
            onClick={() => {
              scrollToSection(sectionContact), setIsOpen(false);
            }}
          >
            Contact Me
          </button>
          <StyledLine />
        </li>
      </ul>
    </StyledNav>
  );
};
export default Navigation;

const StyledNav = styled.nav<{ $isopen: boolean }>`
  width: 70%;
  padding: 2px 10px;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 40%);
  z-index: 10;
  margin: 0 auto;
  background-color: #292539;
  border-radius: 3rem;
  border: 1px solid #2b56f091;

  @media (max-width: 750px) {
    height: ${({ $isopen }) => ($isopen ? "100%" : "8%")};
    transform: ${({ $isopen }) =>
      $isopen ? "translate(-50%, 0)" : "translate(-50%, 40%)"};
    width: ${({ $isopen }) => ($isopen ? "100%" : "9%")};
    left: ${({ $isopen }) => ($isopen ? "" : "10%")};
    display: ${({ $isopen }) => ($isopen ? "" : "flex")};
    justify-content: center;
    align-items: center;
    border-radius: ${({ $isopen }) => ($isopen ? "0%" : "3rem")};
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 750px) {
      display: ${({ $isopen }) => ($isopen ? "flex" : "none")};
      flex-direction: ${({ $isopen }) => ($isopen ? "column" : "row")};
      transition: all 0.3s ease-in-out;
      padding: ${({ $isopen }) => ($isopen ? "5rem" : "0rem")};
    }

    li {
      width: 100%;
      height: 100%;

      text-align: center;
      @media (max-width: 750px) {
        font-size: ${({ $isopen }) => ($isopen ? "10rem" : "16px")};
      }

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
        width: 100%;
        height: 100%;
        padding: 0.5rem;
        font-weight: 200;
        font-size: 16px;

        @media (max-width: 650px) {
          padding-right: 4px;
        }

        @media (max-width: 600px) {
          padding-right: 4px;
        }
      }
    }
  }
  @media (max-width: 1200px) {
    padding: 0;
  }
`;
const StyledLi = styled.li`
  padding: 6px 7px;
  width: 10rem;
  border-right: 1px solid grey;

  @media (max-width: 750px) {
    border-right: none;
  }
  button {
    width: 100%;
    height: 100%;
    padding: 5px;
    background: linear-gradient(180deg, #ffffff 0%, #f4f4f4 100%);
    border-radius: 3rem;
    a {
      color: #1a1a1a;
      text-decoration: none;
    }
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
const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  padding: 1rem;
  flex-direction: column;
  gap: 5px;

  span {
    width: 25px;
    height: 3px;
    background-color: white;
  }

  @media (max-width: 750px) {
    display: flex;

    position: absolute;
    z-index: 2;
  }
`;
