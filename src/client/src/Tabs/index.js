import React, { Component } from "react";

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
            style={this.state.games ? { borderBottom: "1px solid #fff" } : null}
          >
            Games
          </li>
          <li
            style={
              this.state.rosters ? { borderBottom: "1px solid #fff" } : null
            }
          >
            Rosters
          </li>
          <li>Teams</li>
          <li>Players</li>
        </ul>
      </div>
    );
  }
}

export default Tabs;
