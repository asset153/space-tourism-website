import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/Context";
import * as S from "./style";
import Header from "../Header/Header";

const Technology = () => {
  const { technology } = useContext(Context);
  const [technologySelected, setTechnologySelected] =
    useState("Launch vehicle");

  const myFirstCustomeHook = function () {
    const [windowSize, SetWindowSize] = useState(null);

    useEffect(() => {
      function handleResize() {
        SetWindowSize(window.innerWidth);
      }

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
  };

  const size = myFirstCustomeHook();

  console.log(size);

  const chooseTechnology = function (name) {
    setTechnologySelected(name);
  };

  const dataOfTechnology = technology
    ?.filter((element) => element.name === technologySelected)
    .map((element) => {
      return (
        <S.Article key={element.name}>
          <S.Header>
            <h4>
              <span>03</span>
              <p>SPACE LAUNCH 101</p>
            </h4>
          </S.Header>

          <S.Img
            src={
              size < 1024 ? element.images.landscape : element.images.portrait
            }
            alt="technology vehicle"
          />

          <S.Buttons>
            <button onClick={() => chooseTechnology("Launch vehicle")}>
              1
            </button>
            <button onClick={() => chooseTechnology("Spaceport")}>2</button>
            <button onClick={() => chooseTechnology("Space capsule")}>3</button>
          </S.Buttons>

          <S.ContainerDescriptionTechnology>
            <h5>THE TERMINOLOGY…</h5>
            <h6>{element.name}</h6>
            <p>{element.description}</p>
          </S.ContainerDescriptionTechnology>
        </S.Article>
      );
    });

  return (
    <S.Section>
      <Header />
      {dataOfTechnology}
    </S.Section>
  );
};

export default Technology;
