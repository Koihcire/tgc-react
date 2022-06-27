import React from "react"
import NumberBox from "./NumberBox";
import TickleBox from "./TickleBox";
import Dice from "./Dice";

function App() {
  return (
    <React.Fragment>
      <h1>hello world</h1>

      <NumberBox initialValue={24}/>
      <TickleBox/>
      <Dice/>
    </React.Fragment>
  );
}

export default App;
