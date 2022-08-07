import React, { useContext, useState } from "react";
import Header from "../Header/Header";
import * as S from "./style";
import { Context } from "../store/Context";

const Destination = () => {
  const [planet, setPlanet] = useState("Moon");
  const { destinations } = useContext(Context);

  console.log(destinations);

  const handleClickChoosePlanets = function (planet) {
    return setPlanet(planet);
  };

  const Planet = destinations
    ?.filter((item) => item.name === planet)
    .map((item) => {
      return (
        <S.Article key={item.name}>
          <S.ContainerTitle>
            <h4>
              <span>01</span>
              <p>Pick your destination</p>
            </h4>
          </S.ContainerTitle>

          <S.ContainerImage>
            <img src={item.images.webp} alt="moon-image" />
          </S.ContainerImage>

          <S.ContainerInformationAboutPlanet>
            <S.ContainerButtons>
              <button onClick={() => handleClickChoosePlanets("Moon")}>
                Moon
              </button>

              <button onClick={() => handleClickChoosePlanets("Mars")}>
                Mars
              </button>

              <button onClick={() => handleClickChoosePlanets("Europa")}>
                Europa
              </button>

              <button onClick={() => handleClickChoosePlanets("Titan")}>
                Titan
              </button>
            </S.ContainerButtons>

            <S.PlanetName>{item.name}</S.PlanetName>
            <S.PlanetDescription>{item.description}</S.PlanetDescription>

            <S.ContainerDistanceAndTravelTime>
              <S.ContainerDistance>
                <p>avg. distance</p>
                <span>{item.distance}</span>
              </S.ContainerDistance>

              <S.ContainerTravelTime>
                <p>est. travel time</p>
                <span>{item.travel}</span>
              </S.ContainerTravelTime>
            </S.ContainerDistanceAndTravelTime>
          </S.ContainerInformationAboutPlanet>
        </S.Article>
      );
    });

  return (
    <S.Section>
      <Header />
      {Planet}
    </S.Section>
  );
};

export default Destination;
