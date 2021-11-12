import React from "react";

import { Header } from "./components";
import Home from "./pages/Home";

// import Button from "./Button";

function App() {
  // const clickButton = () => {
  //   alert("Alert!");
  // };

  return (
    <div className="wrapper">
      <Header />
      {/* <Button outline>Button without .text</Button>
      <Button>Button with .children</Button>
      <Button onClick={clickButton}>Alert!</Button>
      <Button onClick={() => alert("Push")}>Push!</Button> */}

      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
