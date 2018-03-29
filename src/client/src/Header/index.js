import React from "react";

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#F7961F",
  height: "80px",
  textAlign: "center",
  color: "#fff"
};

// const getDate = () => {
//   const today = new Date();
//   let dd = today.getDate();
//   let mm = today.getMonth() + 1; //January is 0!
//   const yyyy = today.getFullYear();
//   dd = dd < 10 ? `0${dd}` : dd;
//   mm = mm < 10 ? `0${mm}` : mm;
//   return `${mm}/${dd}/${yyyy}`;
// };

const Header = props => (
  <div style={styles}>
    <div style={{ fontFamily: "GillSans", fontSize: "20px" }}>
      March 25th, 2018
    </div>
    <p
      style={{ fontFamily: "LucidaGrande", fontSize: "14px", marginTop: "6px" }}
    >
      9 games today
    </p>
  </div>
);

export default Header;
