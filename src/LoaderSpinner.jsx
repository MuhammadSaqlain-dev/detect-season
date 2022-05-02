import React from "react";

function LoaderSpinner(props) {
  // Specifying Default Props
  const { message = `Loading...` } = props;
  return (
    <div>
      <div className="ui active dimmer">
        <div className="ui text loader">{message}</div>
      </div>
    </div>
  );
}

export default LoaderSpinner;
