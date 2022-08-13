import React, { useState, useContext } from "react";
import { Context } from "../store/Context";
import * as S from "./style";
import Header from "../Header/Header";

const Crew = () => {
  const [crew, setCrew] = useState("Douglas Hurley");
  const { crew: crews } = useContext(Context);

  const handleClickChooseCrews = function (crew) {
    return setCrew(crew);
  };

  const Crews = crews
    ?.filter((element) => element.name === crew)
    .map((element) => {
      return (
        <>
          <S.ContainerTitle>
            <h4>
              <span>02</span>
              <p>Meet your crew</p>
            </h4>
          </S.ContainerTitle>
          <S.Article key={element.name}>
            <S.ContainerImage>
              <img src={element.images.webp} alt="moon-image" />
            </S.ContainerImage>

            <S.ContainerButtons>
              <button
                onClick={() => handleClickChooseCrews("Douglas Hurley")}
              ></button>

              <button
                onClick={() => handleClickChooseCrews("Mark Shuttleworth")}
              ></button>

              <button
                onClick={() => handleClickChooseCrews("Victor Glover")}
              ></button>

              <button
                onClick={() => handleClickChooseCrews("Anousheh Ansari")}
              ></button>
            </S.ContainerButtons>

            <S.ContainerInformationAboutCrew>
              <S.CrewRole>{element.role}</S.CrewRole>
              <S.CrewName>{element.name}</S.CrewName>
              <S.CrewDescription>{element.bio}</S.CrewDescription>
            </S.ContainerInformationAboutCrew>
          </S.Article>
        </>
      );
    });
  console.log(crews);
  return (
    <S.Section>
      <Header />
      {Crews}
    </S.Section>
  );
};

export default Crew;
