import React from "react";

function Result(props) {
  return (
    <div>
      <input type="text" value={props.title}></input>
      <label>TRY</label>
    </div>
  );
}

export default Result;
