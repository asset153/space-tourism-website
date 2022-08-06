import styled from "styled-components";
import { FONTS, COLORS } from "../../utils/styleVariables";

const Button = styled.button`
  position: relative;
  width: 15rem;
  height: 15rem;
  font-size: 2rem;
  font-family: ${FONTS.font_family_bellefair};
  text-transform: uppercase;
  border-radius: 50%;
  border: none;
  background-color: ${COLORS.white};
  transition: box-shadow 0.2s linear;
  cursor: pointer;

  :hover,
  :active {
    backdrop-filter: blur(15px);
    box-shadow: 0px 0px 0px 60px rgba(255, 255, 255, 0.2);
  }

  @media (min-width: 768px) {
    width: 24rem;
    height: 24rem;
  }

  @media (min-width: 1024px) {
    grid-area: button;
    margin-right: 8rem;
  }
`;

export { Button };
