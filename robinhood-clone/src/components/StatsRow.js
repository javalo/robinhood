import React from "react";
import "./StatsRow.css";
import iconChart from "../stock.svg";

function StatsRow(props) {
  const percentage = (
    ((props.price - props.openPrice) / props.openPrice) *
    100
  ).toFixed(2);
  return (
    <div className="StatsRow">
      <div className="StatsRow-intro">
        <h1>{props.name}</h1>
        <p> {props.share && props.share + " shares"}</p>
      </div>
      <div className="StatsRow-chart">
        <img src={iconChart} height={16} />
      </div>
      <div className="StatsRow-numbers">
        <p className="StatsRow-price">{"$" + props.price}</p>
        <p className="StatsRow-percentage">{percentage}%</p>
      </div>
    </div>
  );
}
export default StatsRow;
