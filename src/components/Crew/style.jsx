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
  }

  @media (min-width: 1024px) {
    background-image: url(${desktopCrewBackground});
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

const Article = styled(ArticleFromDestination)``;
const ContainerImage = styled(ContainerImageFromDestination)``;
const ContainerInformationAboutCrew = styled(ContainerInformationAboutPlanet)``;
const ContainerTitle = styled(ContainerTitleFromDestination)``;
const ContainerButtons = styled(ContainerButtonsFromDestination)``;

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

  @media (min-width: 768px) {
    font-size: 2.4rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.2rem;
  }
`;

const CrewDescription = styled(PlanetDescription)`
  font-family: ${FONTS.font_family_barlow_condesed};
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
