import './App.css';
import {useRef, React, useState} from "react";
import ChildA from "./ChildA";

//Rule1: use parent element
//Rule2: js expressions must be wrapped in {}
//Rule3: can't use if-else but ternary is okay
//Rule4: attribute class = classname

function App() {
const name= "Shreyash"
    return (
      <>
          <ChildA npame={name}></ChildA>
      </>
  );
}

export default App;
