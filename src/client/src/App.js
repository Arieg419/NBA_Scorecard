import React, { Component } from "react";
import Header from "./Header";
import Tabs from "./Tabs";
import Games from "./Games";
import PlayoffStandings from "./PlayoffStandings";
import "./styles/index.css";
import { getGameScores, getTeamsData } from "../api";

const navStyles = {
  position: "fixed",
  top: "0",
  width: "100%"
};

export const TABS = {
  GAMES: "GAMES",
  PLAYOFF_STANDINGS: "PLAYOFF_STANDINGS",
  LEADING_PLAYERS: "LEADING_PLAYERS",
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: TABS.GAMES,
      games: []
    };
    this.setSelectedTab = this.setSelectedTab.bind(this);
  }

  async componentWillMount() {
    const { data } = await getGameScores();
    this.setState({ games: getTeamsData(data.games) });
  }

  setSelectedTab(selectedTab) {
    this.setState({
      selectedTab
    });
  }

  renderSelectedTab() {
    switch (this.state.selectedTab) {
      case TABS.GAMES:
        return (<Games games={this.state.games} />);
      case TABS.PLAYOFF_STANDINGS:
        return (<PlayoffStandings />);
    }
  }

  render() {
    return (
      <div>
        <div style={navStyles}>
          <Header />
          <Tabs setSelectedTab={this.setSelectedTab}/>
        </div>
        {this.renderSelectedTab()}
      </div>
    );
  }
}

export default App;
