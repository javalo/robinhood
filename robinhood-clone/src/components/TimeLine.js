import React from "react";
import "./TimeLine.css";

function TimeLine() {
  return (
    <div className="TimeLine-container">
      <div className="TimeLine-buttons-container">
        <div className="TimeLine-button">LIVE</div>
        <div className="TimeLine-button">1D</div>
        <div className="TimeLine-button active">1W</div>
        <div className="TimeLine-button">3M</div>
        <div className="TimeLine-button">1Y</div>
        <div className="TimeLine-button">ALL</div>
      </div>
    </div>
  );
}

export default TimeLine;
