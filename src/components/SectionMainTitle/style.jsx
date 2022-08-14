import styled from "styled-components";
import { FONTS, COLORS } from "../../utils/styleVariables";

const Section = styled.section`
  text-align: center;
  margin-top: 10rem;

  @media (min-width: 1024px) {
    margin-top: 0;
    margin-left: 10rem;
    grid-area: title;
    width: 60%;
    text-align: start;
  }
`;

const H1 = styled.h1`
  font-family: ${FONTS.font_family_barlow_condesed};
  font-size: 1.6rem;
  letter-spacing: 2.7px;
  text-transform: uppercase;
  font-weight: 400;
  color: ${COLORS.light_purple};

  @media (min-width: 768px) {
    font-size: 2rem;
    letter-spacing: 3.4px;
  }

  @media (min-width: 1024px) {
    font-size: 2.8rem;
  }
`;

const H2 = styled.h2`
  margin: 2rem 0;
  font-family: ${FONTS.font_family_bellefair};
  font-size: 8rem;
  font-weight: 400;
  text-transform: uppercase;
  color: ${COLORS.white};

  @media (max-width: 320px) {
    font-size: calc(8rem / 2);
  }

  @media (max-width: 160px) {
    font-size: calc(8rem / 3);
  }

  @media (min-width: 768px) {
    font-size: 15rem;
  }

  @media (min-width: 1024px) {
  }
`;

const H3 = styled.h3`
  margin-bottom: 10rem;
  font-family: ${FONTS.font_family_barlow_condesed};
  font-size: 1.5rem;
  line-height: 1.5;
  letter-spacing: 1px;
  font-weight: 400;
  color: ${COLORS.light_purple};

  @media (min-width: 768px) {
    margin-bottom: 10rem;
    font-size: 1.6rem;
    padding: 0 15rem;
  }

  @media (min-width: 1024px) {
    padding: 0;
    width: 70%;
    font-size: 1.8rem;
  }
`;

export { Section, H1, H2, H3 };
