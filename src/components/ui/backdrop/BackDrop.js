import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

import "./BackDrop.css";

const backdrop = ({ show, message }) => {
  const cssClasses = ["Backdrop", show ? "BackdropOpen" : "BackdropClosed"];
  return (
    <div className={cssClasses.join(" ")}>
      {" "}
      <div
        style={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>{message}... </h1>
        <CircularProgress />
      </div>
    </div>
  );
};

export default backdrop;
