import './App.css';
import {useRef, React, useState} from "react";
import ChildA from "./ChildA";

//Rule1: use parent element
//Rule2: js expressions must be wrapped in {}
//Rule3: can't use if-else but ternary is okay
//Rule4: attribute class = classname

function App() {
    const refElement=useRef("");
    const [name,setName]=useState("Shreyash")

    function Reset() {
        setName("")
        refElement.current.focus()
    }

    function handleInput() {
        refElement.current.style.color="gray"
    }

    return (
      <>
          <h1>Learning useRef</h1>
          <input ref={refElement} type="text" value={name} onChange={(e)=> setName(e.target.value)}></input>
          <button onClick={Reset}>Reset</button>
          <button onClick={handleInput}>handleInput</button>
      </>
  );
}

export default App;
