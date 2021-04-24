import React, { useState } from "react";
import axios from "axios";

function Enrty({ parentCallback }) {
  const [data, setData] = useState(0);

  const ChangeValue = (event) => {
    setData(event.target.value);
  };

  const ChangeButton = () => {
    axios
      .get("https://api.exchangerate.host/latest?base=USD")
      .then((response) => {
        const rates = response.data.rates.TRY;
        const results = rates * data;
        parentCallback(results);
      });
  };

  return (
    <div>
      <input type="text" value={data} onChange={ChangeValue}></input>
      <label>USD</label>
      <button onClick={ChangeButton}>Change</button>
    </div>
  );
}

export default Enrty;
