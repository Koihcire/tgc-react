import React from 'react';
import BorderedImageFrame from "./js/BorderedImageFrame";
import BorderedImageFrame2 from "./js/BorderedImageFrame2";
import DisplayMessage from './js/DisplayMessage';
import SumOfTwo from './js/SumOfTwo';
import Alert from './js/Alert';


function sayHello(){
  return "hellooo";
}

function sayGoodbye(){
  // under the hood, jsx are just js objects, meaning they can be assigned to variables
  let g = <p>goodbye world</p>
  return g;
}

function foobar(){
  return <h3>foobar</h3>
}

//a component in react is a 1.function, 2. returns jsx, 3. first alphabet is uppercase, 4. can be used in jsx as if its html element
//all components have been transferred to its own file in the src folder

export default function App() {
  return (
    <React.Fragment>
      <h1>hello world</h1>
      {/* calling a js function using {} */}
      {sayHello()}
      {sayGoodbye()}
      {foobar()}

      <Alert bgColor="red" message="yooo"/>
      <Alert bgColor="yellow" message="heieeeee"/>

      <BorderedImageFrame/>
      <BorderedImageFrame2 imageUrl={require("./images/iPadAir2.png")}/>
      <DisplayMessage whatever_message="hello this is the whatever message"/>
      <SumOfTwo int1={1} int2={Math.floor(Math.random(100)*100+1)}/>
    </React.Fragment>
  );
}

