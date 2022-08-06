import styled from "styled-components";
import { Main } from "../App/style";
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

export { Section };
