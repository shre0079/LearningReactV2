import './App.css';
import {useState, React, useEffect} from "react";

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
          <h1>Button Clicked {count} times</h1>
          <button onClick={updateCount}>Click</button>
          <button onClick={updateData}> Update Data</button>
      </>
  );
}

export default App;
