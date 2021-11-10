import { useState } from "react";
import Blog from "./components/Blog";

function App() {
  const [state, setState] = useState();

  function handleChange(e) {
    // console.log("event: ", e);
    // console.log("value: ", e.target.value);
    const { value } = e.target;
    setState(value);
  }

  function handleClick(e) {
    setState("");
  }

  return (
    <div>
      <h1 style={{ paddingLeft: "10px" }}>Input: {state}</h1>
      <p style={{ paddingLeft: "10px" }}>Input</p>
      <input
        style={{ paddingLeft: "10px" }}
        name="inputReact"
        onChange={handleChange}
        value={state}
      />
      <button onClick={handleClick}>Clear input</button>

      <br />
      <br />
      <br />

      <center>
        <Blog titleTxt="TITLE 1" contentTxt="content 1" />
        <Blog titleTxt="TITLE 2" contentTxt="content 2" />
        <Blog titleTxt="TITLE 3" contentTxt="content 3" />
        <Blog />
      </center>
    </div>
  );
}

export default App;
