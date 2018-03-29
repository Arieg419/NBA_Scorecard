import React from "react";
import PropTypes from "prop-types";
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

const Games = ({ games }) =>
  games ? (
    <div style={styles}>
      {games.map(game => (
        <Card
          hTeam={game.hTeam}
          vTeam={game.vTeam}
          key={`${game.hTeam.triCode}`}
        />
      ))}
    </div>
  ) : null;

Games.propTypes = {
  games: PropTypes.array
};

export default Games;
