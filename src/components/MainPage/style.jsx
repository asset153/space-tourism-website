import styled, { createGlobalStyle } from "styled-components";
import { FONTS, COLORS } from "../../utils/styleVariables";
import mobileMainBackground from "../../assets/home/background-home-mobile.jpg";
import tabletMainBackground from "../../assets/home/background-home-tablet.jpg";
import desktopMainBackground from "../../assets/home/background-home-desktop.jpg";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    color: white;
  }

  :root {
    font-size: ${FONTS.default_font_size};
    font-family: ${FONTS.font_family_barlow_condesed};
    color: ${COLORS.white};

    @media (min-width: 1440px) {
    background-color: ${COLORS.dark_purple};
  } 
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  min-height: 100vh;
  height: auto;
  padding: 3rem 2rem;
  background-image: url(${mobileMainBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (min-width: 768px) {
    padding: 0;
    background-image: url(${tabletMainBackground});
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-areas:
      "header header"
      "title button";
    background-image: url(${desktopMainBackground});
  }
`;

export { Main, GlobalStyle };
