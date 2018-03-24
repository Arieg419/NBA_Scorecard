import React, { Component } from "react";
import Card from "./card";

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  backgroundColor: "#000",
  color: "#fff",
  overflowY: "scroll",
  paddingTop: "125px",
  textAlign: "center"
};

const games = [
  { home: "Lakers", homeScore: 143, away: "Magic", awayScore: 132 },
  { home: "Bulls", homeScore: 143, away: "Knicks", awayScore: 132 },
  { home: "Raptors", homeScore: 143, away: "Cavaliers", awayScore: 132 },
  { home: "Sixers", homeScore: 143, away: "Twolves", awayScore: 132 }
];

class Games extends Component {
  render() {
    return <div style={styles}>{games.map(game => <Card />)}</div>;
  }
}

export default Games;
