import "./App.css";
import React, { useState } from "react";
import Enrty from "./Enrty";
import Result from "./Result";

function App() {
  const [global, setGlobal] = useState();

  const callback = (data) => {
    setGlobal(data);
  };

  return (
    <div className="App">
      <Enrty parentCallback={callback} />
      <Result title={global} />
    </div>
  );
}

export default App;
