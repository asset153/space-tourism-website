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
  }
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerImage = styled.div`
  display: flex;
  justify-content: center;

  & > img {
    width: 40%;
  }
`;

const ContainerTitle = styled.header`
  display: flex;
  justify-content: center;
  margin: 4rem 0;

  & > h4 {
    display: flex;
    font-size: 1.6rem;
    letter-spacing: 2.7px;
    text-transform: uppercase;

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
`;

const PlanetDescription = styled.h5`
  font-family: ${FONTS.font_family_bellefair};
  line-height: 1.5;
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
  color: ${COLORS.light_purple};
`;

const ContainerDistance = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem 0 2rem 0;
  padding: 3rem 0;
  border-top: 1px solid ${COLORS.light_purple};
  text-transform: uppercase;

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
  ContainerDistance,
  ContainerTravelTime,
};
