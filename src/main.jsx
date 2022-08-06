import React from "react";
import ReactDOM from "react-dom/client";
import * as S from "./components/App/style";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App/App";
import Crew from "./components/Crew/Crew";
import Destination from "./components/Destination/Destination";
import Technology from "./components/Technology/Technology";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <S.GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="crew" element={<Crew />} />
        <Route path="technology" element={<Technology />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
