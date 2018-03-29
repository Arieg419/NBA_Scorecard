import React from "react";
import PropTypes from "prop-types";

const styles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  alignSelf: "center",
  width: "292px",
  height: "71px",
  marginTop: "15px",
  backgroundColor: "#141414",
  fontFamily: "LucidaGrande"
};

import celtics from "../img/boston-celtics-logo-vector.png";
import lakers from "../img/los-angeles-lakers-logo-vector.png";

const Card = ({ hTeam, vTeam }) => {
  return hTeam && vTeam ? (
    <div style={styles} key={`${hTeam.triCode}-${vTeam.triCode}`}>
      <img
        alt="homeTeam"
        src={celtics}
        style={{ height: "50px", width: "50px" }}
      />
      <p className="">{hTeam.score}</p>
      <p className="">Final</p>
      <p className="">{vTeam.score}</p>
      <img
        alt="visitingTeam"
        src={lakers}
        style={{ height: "50px", width: "50px" }}
      />
    </div>
  ) : null;
};

Card.propTypes = {
  hTeam: PropTypes.shape({
    losses: PropTypes.string,
    wins: PropTypes.string,
    score: PropTypes.string,
    teamId: PropTypes.string,
    triCode: PropTypes.string
  }),
  vTeam: PropTypes.shape({
    losses: PropTypes.string,
    wins: PropTypes.string,
    score: PropTypes.string,
    teamId: PropTypes.string,
    triCode: PropTypes.string
  })
};

export default Card;
