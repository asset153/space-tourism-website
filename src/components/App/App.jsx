import React, { useEffect, useState } from "react";
import { Context } from "../store/Context";
import * as S from "../MainPage/style";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import Crew from "../Crew/Crew";
import Destination from "../Destination/Destination";
import Technology from "../Technology/Technology";

const App = function () {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("./src/data.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <Context.Provider value={data}>
      <S.GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
};

export default App;
