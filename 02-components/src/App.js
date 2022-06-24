import React from 'react';


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
function Alert(props){
  return <div style={{"backgroundColor": props.bgColor}}>{props.message}</div>;
}

//LAB C HANDSON 2.1
function BorderedImageFrame(){
  return <img style={{
    "border": "4px solid red",
    "width": "100%"
  }} src={require("./iPhoneX.png")} alt="iphone"/>
}

//LAB D HANDSON 2.2 2.3
function BorderedImageFrame2(props){
  return <img style={{
    "border": "4px solid red",
    "width": "100%"
  }} src={props.imageUrl} alt="custom"/>
}

function DisplayMessage(props){
  return (
    <div>{props.whatever_message}</div>
  )
}

//LAB E HANDSON 2.4
function SumOfTwo(props){
  return (
    <div>
      {props.int1} + {props.int2} = {props.int1 + props.int2}
    </div>
  )
}


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
      <BorderedImageFrame2 imageUrl={require("./iPadAir2.png")}/>
      <DisplayMessage whatever_message="hello this is the whatever message"/>
      <SumOfTwo int1={1} int2={Math.floor(Math.random(100)*100+1)}/>
    </React.Fragment>
  );
}

