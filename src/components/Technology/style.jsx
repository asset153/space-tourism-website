import styled from "styled-components";
import { COLORS, FONTS } from "../../utils/styleVariables";
import mobileTechnologyBackground from "../../assets/technology/background-technology-mobile.jpg";
import tabletTechnologyBackground from "../../assets/technology/background-technology-tablet.jpg";
import desktopTechnologyBackground from "../../assets/technology/background-technology-desktop.jpg";

const Section = styled.section`
  min-height: 100vh;
  background-image: url(${mobileTechnologyBackground});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (min-width: 768px) {
    background-image: url(${tabletTechnologyBackground});
  }

  @media (min-width: 1024px) {
    background-image: url(${desktopTechnologyBackground});
  }
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-areas:
      "title title title"
      "btns descr img";
    margin-left: 8rem;
  }
`;

const Header = styled.header`
  margin: 4rem 0;

  @media (min-width: 768px) {
    align-self: flex-start;
  }

  @media (min-width: 1024px) {
    grid-area: title;
    margin: 0;
    margin-top: 4rem;
    margin-left: 2rem;
  }

  & > h4 {
    display: flex;
    font-size: 1.6rem;
    letter-spacing: 2.7px;

    @media (min-width: 768px) {
      font-size: 2rem;
    }

    @media (min-width: 1024px) {
      font-size: 2.8rem;
      letter-spacing: 4.7px;
    }

    & > span {
      font-weight: bold;
      opacity: 0.5;
      margin-right: 1rem;
    }
  }
`;

const Img = styled.img`
  width: 100%;

  @media (min-width: 1024px) {
    width: 515px;
    height: 527px;
    grid-area: img;
  }
`;

const Buttons = styled.div`
  display: flex;
  margin: 4rem 0;

  @media (min-width: 1024px) {
    flex-direction: column;
    grid-area: btns;
  }

  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    margin: 0 2rem;
    border: 1px solid ${COLORS.light_purple};
    border-radius: 50%;
    background-color: transparent;
    font-size: 3.2rem;

    @media (min-width: 768px) {
      width: 60px;
      height: 60px;
      margin: 2rem;
    }

    @media (min-width: 1024px) {
      width: 80px;
      height: 80px;
    }

    &:hover {
      cursor: pointer;
      background-color: white;
      color: #000;
    }
  }
`;

const ContainerDescriptionTechnology = styled.div`
  text-align: center;
  padding: 0 2rem;

  @media (min-width: 1024px) {
    grid-area: descr;
    text-align: start;
  }

  & > h5 {
    font-size: 1.4rem;
    letter-spacing: 2.4px;

    @media (min-width: 768px) {
      font-size: 1.6rem;
      letter-spacing: 2.7px;
    }
  }

  & > h6 {
    margin: 2rem 0;
    font-size: 2.4rem;
    text-transform: uppercase;
    font-weight: normal;

    @media (min-width: 768px) {
      font-size: 4rem;
    }

    @media (min-width: 1024px) {
      font-size: 5.6rem;
    }
  }

  & > p {
    font-size: 1.5rem;
    line-height: 2;
    color: ${COLORS.light_purple};

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }

    @media (min-width: 1024px) {
      font-size: 1.8rem;
      width: 75%;
    }
  }
`;

export {
  Section,
  Article,
  Img,
  Header,
  Buttons,
  ContainerDescriptionTechnology,
};
