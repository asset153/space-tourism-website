import * as S from "./style";
import Header from "../Header/Header";
import SectionMainTitle from "../SectionMainTitle/SectionMainTitle";
import ButtonExplore from "../ButtonExplore/ButtonExplore";

const App = () => {
  return (
    <S.Main>
      <S.GlobalStyle />
      <Header />
      <SectionMainTitle />
      <ButtonExplore />
    </S.Main>
  );
};

export default App;
