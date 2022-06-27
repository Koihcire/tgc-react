import React from "react";
import NumberBox from "./NumberBox";
import AlertBox from "./AlertBox";


function App() {
  return (
    <React.Fragment>
      <h1>hello world</h1>
      <NumberBox initialValue={15}/>
      <AlertBox initialValue={"this is the default placeholder message"}/>
    </React.Fragment>
  );
}

export default App;
