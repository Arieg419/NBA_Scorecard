import React from "react";

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

const Card = props => (
  <div style={styles}>
    <img src={celtics} style={{ height: "50px", width: "50px" }} />
    <p className="">132</p>
    <p className="">Final</p>
    <p className="">143</p>
    <img src={lakers} style={{ height: "50px", width: "50px" }} />
  </div>
);

export default Card;
