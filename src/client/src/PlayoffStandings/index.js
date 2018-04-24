import React, { Component } from "react";
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

const PlayoffStandings = ({playoffSeries}) =>
      playoffSeries ? (
        <div style={styles}>
          {playoffSeries.map(series =>(
            <Card
              hTeam={series.hTeam}
              vTeam={series.vTeam}
              confName={series.confName}
              gameNumber={series.gameNumber}
              roundNum={series.roundNum}
              summaryStatusText={series.summaryStatusText}
            /> ))}
        </div>) : null;


PlayoffStandings.propTypes = {
  playoffSeries: PropTypes.array,
}

export default PlayoffStandings;
