import React, { useState } from "react";
import * as S from "./style";
import hamburger from "../../assets/shared/icon-hamburger.svg";
import close from "../../assets/shared/icon-close.svg";
const Header = () => {
  const [isHiddenMenu, setIsHiddenMenu] = useState(false);

  const handleClickHiddenMenu = function () {
    setIsHiddenMenu((prevState) => !prevState);
  };

  return (
    <S.Header>
      <S.Main_Logo></S.Main_Logo>
      <S.Img_Hamburger
        src={hamburger}
        alt="hamburger-menu"
        onClick={handleClickHiddenMenu}
      />
      <S.Nav isHiddenMenu={isHiddenMenu}>
        <S.Img_Close
          src={close}
          alt="close-menu"
          onClick={handleClickHiddenMenu}
        />
        <S.Ul>
          <S.Li>
            <S.Span>00</S.Span> <S.P>home</S.P>
          </S.Li>
          <S.Li>
            <S.Span>01</S.Span> <S.P>destination</S.P>
          </S.Li>
          <S.Li>
            <S.Span>02</S.Span> <S.P>crew</S.P>
          </S.Li>
          <S.Li>
            <S.Span>03</S.Span> <S.P>technology</S.P>
          </S.Li>
        </S.Ul>
      </S.Nav>
    </S.Header>
  );
};

export default Header;
