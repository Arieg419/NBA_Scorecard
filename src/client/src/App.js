import React, { Component } from "react";
import Header from "./Header";
import Tabs from "./Tabs";
import Games from "./Games";
import "./styles/index.css";
import { parseAPI, getTeamsData } from "../api";

const navStyles = {
  position: "fixed",
  top: "0",
  width: "100%"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    };
  }

  async componentWillMount() {
    const { data } = await parseAPI();
    this.setState({ games: getTeamsData(data.games) });
  }

  render() {
    // this.state.games.length && console.log(this.state.games);
    return (
      <div>
        <div style={navStyles}>
          <Header />
          <Tabs />
        </div>
        <Games games={this.state.games} />
      </div>
    );
  }
}

export default App;
