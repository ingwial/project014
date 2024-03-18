import { useState } from "react";
import "./App.css";

function App() {
  const [studies, setStudies] = useState("primary");

  function changeStudies(e) {
    setStudies(e.target.value);
  }

  return (
    <div>
      <p>
        <input
          type="radio"
          value="primary"
          checked={studies === "primary"}
          onChange={changeStudies}
        />
        Primary
      </p>
      <p>
        <input
          type="radio"
          value="secundary"
          checked={studies === "secundary"}
          onChange={changeStudies}
        />
        Secundary
      </p>
      <p>
        <input
          type="radio"
          value="universitary"
          checked={studies === "universitary"}
          onChange={changeStudies}
        />
        Universitary
      </p>
      <p>Studies selected: {studies}</p>
    </div>
  );
}

export default App;
