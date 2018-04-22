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

const PlayoffStandings = (props) => {
    return (<div style={styles}>
      <Card
        hTeam={{triCode: "PHI", wins: "2"}}
        vTeam={{triCode: "PHI", wins: "2"}}
      />
    </div>);
}

export default PlayoffStandings;
