import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

const ButtonExplore = () => {
  const navigate = useNavigate();

  const handleClickExplore = () => {
    navigate("/destination");
  };

  return <S.Button onClick={handleClickExplore}>explore</S.Button>;
};

export default ButtonExplore;
