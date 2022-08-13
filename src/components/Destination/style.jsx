import styled from "styled-components";
import { COLORS, FONTS } from "../../utils/styleVariables";
import { Main } from "../MainPage/style";
import mobileDestinationBackground from "../../assets/destination/background-destination-mobile.jpg";
import tabletDestinationBackground from "../../assets/destination/background-destination-tablet.jpg";
import desktopDestinationBackground from "../../assets/destination/background-destination-desktop.jpg";

const Section = styled(Main)`
  background-image: url(${mobileDestinationBackground});

  @media (min-width: 768px) {
    background-image: url(${tabletDestinationBackground});
  }

  @media (min-width: 1024px) {
    background-image: url(${desktopDestinationBackground});
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "title title"
      "images info";

    margin-bottom: 5rem;
  }
`;

const ContainerInformationAboutPlanet = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    align-items: flex-start;
  }
`;

const ContainerImage = styled.div`
  display: flex;
  justify-content: center;

  & > img {
    width: 40%;

    @media (min-width: 768px) {
      width: 60%;
    }

    @media (min-width: 1024px) {
      width: 100%;
      grid-area: images;
    }
  }
`;

const ContainerTitle = styled.header`
  display: flex;
  justify-content: center;
  margin: 4rem 0;

  @media (min-width: 768px) {
    width: 100%;
    justify-content: flex-start;
    padding-left: 4rem;
  }

  @media (min-width: 1024px) {
    grid-area: title;
  }

  & > h4 {
    display: flex;
    font-size: 1.6rem;
    letter-spacing: 2.7px;
    text-transform: uppercase;

    @media (min-width: 768px) {
      font-size: 2rem;
      letter-spacing: 3.4px;
    }

    @media (min-width: 768px) {
      font-size: 2.8rem;
      letter-spacing: 4.7px;
    }

    & > span {
      color: grey;
      opacity: 0.5;
    }

    & > p {
      margin-left: 2rem;
      font-weight: 400;
    }
  }
`;

const ContainerButtons = styled.div`
  margin: 2rem 0;
  min-height: 50px;

  @media (min-width: 1024px) {
  }

  & > button {
    margin: 1rem;
    text-transform: uppercase;
    letter-spacing: 2.4px;
    font-size: 1.4rem;
    font-weight: 400;
    background-color: transparent;
    color: ${COLORS.light_purple};
    border: none;
    cursor: pointer;
    position: relative;

    @media (min-width: 768px) {
      font-size: 1.6rem;
      letter-spacing: 2.7px;
    }

    :hover {
      ::after {
        content: "";
        display: block;
        width: 100%;
        height: 3px;
        position: absolute;
        bottom: -60%;
        background-color: white;
      }
    }
  }
`;

const PlanetName = styled.h5`
  font-family: ${FONTS.font_family_bellefair};
  font-size: 5.6rem;
  font-weight: 400;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 8rem;
  }

  @media (min-width: 1024px) {
    font-size: 10rem;
  }
`;

const PlanetDescription = styled.h5`
  font-family: ${FONTS.font_family_bellefair};
  line-height: 1.5;
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
  color: ${COLORS.light_purple};

  @media (min-width: 768px) {
    line-height: 2;
    font-size: 1.6rem;
    width: 75%;
  }

  @media (min-width: 1024px) {
    line-height: 2;
    font-size: 1.8rem;
    text-align: start;
  }
`;

const ContainerDistanceAndTravelTime = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 75%;
    margin-top: 3rem;
    padding-top: 2rem;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border-top: 1px solid ${COLORS.light_purple};
  }

  @media (min-width: 1024px) {
  }
`;

const ContainerDistance = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem 0 2rem 0;
  padding: 3rem 0;
  border-top: 1px solid ${COLORS.light_purple};
  text-transform: uppercase;

  @media (min-width: 768px) {
    margin: 0;
    padding: 0;
    border-top: none;
  }

  & > p {
    margin-bottom: 1.5rem;
    letter-spacing: 2.4px;
    font-size: 1.4rem;
    color: ${COLORS.light_purple};
  }

  & > span {
    font-family: ${FONTS.font_family_bellefair};
    font-size: 2.8rem;
  }
`;

const ContainerTravelTime = styled(ContainerDistance)`
  border: none;
  margin: 0;
  padding: 0;
`;

export {
  Section,
  Article,
  ContainerImage,
  ContainerTitle,
  ContainerButtons,
  PlanetName,
  PlanetDescription,
  ContainerDistanceAndTravelTime,
  ContainerDistance,
  ContainerTravelTime,
  ContainerInformationAboutPlanet,
};
