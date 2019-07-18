import React from "react";
import "./App.css";
import HeaderComponent from "./components/header";
import NavBarComponent from "./components/navbar";
import BodyComponent from "./components/body";
import { DivStyle } from "./components/div/Div";
import Menu from "./components/hamburgerMenu";

function App() {
  return (
    <DivStyle>
      <HeaderComponent />
      <NavBarComponent />
      <Menu />
      <BodyComponent />
    </DivStyle>
  );
}

export default App;
