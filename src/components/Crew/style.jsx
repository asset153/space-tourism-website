import styled from "styled-components";
import { COLORS, FONTS } from "../../utils/styleVariables";
import { Main } from "../MainPage/style";
import {
  Article as ArticleFromDestination,
  ContainerImage as ContainerImageFromDestination,
  ContainerInformationAboutPlanet,
  ContainerTitle as ContainerTitleFromDestination,
  ContainerButtons as ContainerButtonsFromDestination,
  PlanetName,
  PlanetDescription,
} from "../Destination/style";
import mobileCrewBackground from "../../assets/crew/background-crew-mobile.jpg";
import tabletCrewBackground from "../../assets/crew/background-crew-tablet.jpg";
import desktopCrewBackground from "../../assets/crew/background-crew-desktop.jpg";

const Section = styled(Main)`
  background-image: url(${mobileCrewBackground});

  @media (min-width: 768px) {
    background-image: url(${tabletCrewBackground});
    justify-content: space-between;
  }

  @media (min-width: 1024px) {
    background-image: url(${desktopCrewBackground});
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

const ContainerTitle = styled(ContainerTitleFromDestination)`
  & > h4 {
    @media (min-width: 768px) {
      font-size: 2rem;
      letter-spacing: 3.4px;
    }
  }
`;

const Article = styled(ArticleFromDestination)`
  @media (min-width: 768px) {
    flex-direction: column-reverse;
    justify-content: space-between;
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-areas:
      "descr img"
      "btns img";
    grid-template-columns: 1fr 1fr;
    margin-bottom: 0;
    margin-left: 4rem;
  }
`;

const ContainerImage = styled(ContainerImageFromDestination)`
  & > img {
    @media (min-width: 768px) {
      width: 100%;
    }
  }

  @media (min-width: 1024px) {
    grid-area: img;
    width: 70%;
  }
`;

const ContainerInformationAboutCrew = styled(ContainerInformationAboutPlanet)`
  @media (min-width: 1024px) {
    grid-area: descr;
  }
`;

const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${COLORS.light_purple};
  opacity: 0.5;
  width: 100%;
  padding: 2rem 0;

  @media (min-width: 768px) {
    border-top: none;
  }

  @media (min-width: 1024px) {
    grid-area: btns;
    justify-content: flex-start;
    padding: 0;
  }

  & > button {
    margin: 1rem;
    background-color: white;
    border: none;
    opacity: 0.5;
    width: 15px;
    height: 15px;
    border-radius: 50%;

    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  }
`;

const CrewName = styled(PlanetName)`
  font-size: 2.4rem;
  margin: 0.5rem 0 2rem 0;

  @media (min-width: 768px) {
    font-size: 4rem;
  }

  @media (min-width: 1024px) {
    font-size: 5.6rem;
  }
`;

const CrewRole = styled(CrewName)`
  font-size: 1.6rem;
  opacity: 0.5;
  margin: 0.5rem 0 1rem 0;

  @media (min-width: 768px) {
    font-size: 2.4rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.2rem;
  }
`;

const CrewDescription = styled(PlanetDescription)`
  font-family: ${FONTS.font_family_barlow_condesed};
  width: 75%;
  line-height: 1.75;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    font-size: 1.8rem;
  }
`;

export {
  Section,
  Article,
  ContainerImage,
  ContainerInformationAboutCrew,
  ContainerTitle,
  ContainerButtons,
  CrewRole,
  CrewName,
  CrewDescription,
};
