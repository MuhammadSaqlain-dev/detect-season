import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
  summer: {
    text: `Let's go to beach!`,
    iconClass: "sun",
  },
  winter: {
    text: `Burr! it is chilly`,
    iconClass: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (2 < month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

function SeasonsDisplay(props) {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconClass } = seasonConfig[season];

  return (
    <div className={`seasons-display ${season}`}>
      <i className={`${iconClass} icon-left icon massive`}></i>
      <h1>
        <div>{text}</div>
      </h1>
      <i className={`${iconClass} icon-right icon massive`}></i>
    </div>
  );
}

export default SeasonsDisplay;
