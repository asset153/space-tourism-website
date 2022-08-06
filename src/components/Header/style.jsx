import styled from "styled-components";
import logo from "../../assets/shared/logo.svg";

const Header = styled.header`
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* background-color: orange; */

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
    grid-area: header;
  }
`;

const Img_Hamburger = styled.img`
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }

  @media (min-width: 1024px) {
  }
`;

const Nav = styled.nav`
  display: ${(props) => (props.isHiddenMenu ? "flex" : "none")};
  flex-direction: column;
  position: fixed;
  width: 60%;
  min-height: 100vh;
  height: auto;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 4rem 2rem;
  /* background-color: rgba(0, 0, 0, 0.1); */
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  animation: hidden 0.5s 1;
  z-index: 999;

  @keyframes hidden {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @media (min-width: 768px) {
    display: flex;
    height: 100%;
    min-height: auto;
    width: 60%;
    position: static;
    padding: 0;
    /* background-color: rgba(0, 0, 0, 0.1); */
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(15px);
  }

  @media (min-width: 1024px) {
  }
`;

const Img_Close = styled.img`
  width: 2rem;
  height: 2rem;
  align-self: flex-end;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 5rem 0;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    padding: 0 2rem;
  }

  @media (min-width: 1024px) {
    padding-right: 8rem;
  }
`;

const Li = styled.li`
  display: flex;
  margin: 2rem 0;

  :hover {
    cursor: pointer;
    border-right: 5px solid #fff;
  }

  @media (min-width: 768px) {
    justify-content: center;
    align-items: center;
    margin: 0 2rem;
    height: 10rem;
    position: relative;

    :hover {
      border-right: none;
      ::after {
        content: "";
        display: inline-block;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 5px;
        background-color: white;
      }
    }
  }
`;

const P = styled.p`
  font-size: 1.6rem;
  letter-spacing: 2.7px;
  text-transform: uppercase;
`;

const Span = styled.span`
  font-size: 1.6rem;
  font-weight: bold;
  margin-right: 1.5rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Main_Logo = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;

  @media (min-width: 768px) {
    margin-left: 4rem;
  }
`;

export { Header, Nav, Ul, Main_Logo, Img_Close, Li, P, Span, Img_Hamburger };
