import * as S from "./style";
import Header from "../Header/Header";
import SectionMainTitle from "../SectionMainTitle/SectionMainTitle";
import ButtonExplore from "../ButtonExplore/ButtonExplore";

const MainPage = () => {
  return (
    <S.Main>
      <Header />
      <SectionMainTitle />
      <ButtonExplore />
    </S.Main>
  );
};

export default MainPage;
