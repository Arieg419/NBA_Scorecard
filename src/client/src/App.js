import React, { Component } from "react";
import Header from "./Header";
import Tabs from "./Tabs";
import Games from "./Games";
import "./styles/index.css";

const navStyles = {
  position: "fixed",
  top: "0",
  width: "100%"
};

class App extends Component {
  render() {
    return (
      <div>
        <div style={navStyles}>
          <Header />
          <Tabs />
        </div>
        <Games />
      </div>
    );
  }
}

export default App;
