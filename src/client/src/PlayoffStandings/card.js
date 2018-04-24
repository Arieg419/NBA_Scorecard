import React from "react";
import PropTypes from "prop-types";
import triCodes from "../../api/triCodes";

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

const buildImgPath = triCode => triCodes[triCode];

const StandingsCard = ({ hTeam, vTeam, roundNum, triCode }) => {
  return hTeam && vTeam ? (
    <div style={styles} key={`${hTeam.teamId}-${vTeam.teamId}`}>
      <img
        alt="homeTeam"
        src={buildImgPath(triCode)}
        style={{ height: "50px", width: "50px" }}
      />
      <p className="">{hTeam.wins} ({hTeam.seedNumber})</p>
      <p className="">Round {roundNum}</p>
      <p className="">{vTeam.wins} ({vTeam.seedNumber})</p>
      <img
        alt="visitingTeam"
        src={buildImgPath(triCode)}
        style={{ height: "50px", width: "50px" }}
      />
    </div>
  ) : null;
};

StandingsCard.defaultProps = {
  triCode: "PHI"
}

StandingsCard.propTypes = {
  confName: PropTypes.string,
  gameNumber: PropTypes.number,
  roundNum: PropTypes.string,
  summaryStatusText: PropTypes.string,
  hTeam: PropTypes.shape({
    wins: PropTypes.string,
    seedNumber: PropTypes.string,
    teamId: PropTypes.string
  }),
  vTeam: PropTypes.shape({
    wins: PropTypes.string,
    seedNumber: PropTypes.string,
    teamId: PropTypes.string
  })
};

export default StandingsCard;
