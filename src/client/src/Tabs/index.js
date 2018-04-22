import React, { Component } from "react";
import { TABS } from "../App";

const styles = {
  backgroundColor: "#824C0A",
  height: "40px",
  color: "#fff"
};

const tabBarStyles = {
  display: "flex",
  justifyContent: "space-around",
  alignContent: "center",
  listStyle: "none",
  lineHeight: "40px",
  height: "40px",
  fontFamily: "LucidaGrande",
  fontWeight: "lighter"
};

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: true,
      rosters: false,
      teams: false,
      players: false
    };
  }
  render() {
    return (
      <div style={styles}>
        <ul style={tabBarStyles}>
          <li
            onClick={() => this.props.setSelectedTab(TABS.GAMES)}
            style={this.state.games ? { borderBottom: "1px solid #fff" } : null}
          >
            Games
          </li>
          <li
            onClick={() => this.props.setSelectedTab(TABS.PLAYOFF_STANDINGS)}
            style={
              this.state.rosters ? { borderBottom: "1px solid #fff" } : null
            }
          >
            Playoff Standings
          </li>
          <li>Teams</li>
          <li>Players</li>
        </ul>
      </div>
    );
  }
}

export default Tabs;
