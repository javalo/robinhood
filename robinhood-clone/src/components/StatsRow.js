import React from "react";
import "./StatsRow.css";
import stock from "../stock.svg";
import negStock from "../negStock.svg";

function StatsRow(props) {
  var iconStock=stock;
  const percentage = (
    ((props.price - props.openPrice) / props.openPrice) *
    100
  ).toFixed(2);
  if(percentage<0) iconStock=negStock
  return (
    <div className="StatsRow">
      <div className="StatsRow-intro">
        <h1>{props.name}</h1>
        <p> {props.share && props.share + " shares"}</p>
      </div>
      <div className="StatsRow-chart">
        

        <img src={iconStock} height={16} />
      </div>
      <div className="StatsRow-numbers">
        <p className="StatsRow-price">{"$" + props.price}</p>
        <p className="StatsRow-percentage">{percentage}%</p>
      </div>
    </div>
  );
}
export default StatsRow;
