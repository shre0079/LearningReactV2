import './App.css';
import {useState, React} from "react";

//Rule1: use parent element
//Rule2: js expressions must be wrapped in {}
//Rule3: can't use if-else but ternary is okay
//Rule4: attribute class = classname

function App() {
    const [count, setCounter]=useState(0)
    function updateCount(){
        setCounter(count+1)
    }

    return (
      <>
          <h1>Button Clicked {count} times</h1>
          <button onClick={updateCount}>Click</button>
      </>
  );
}

export default App;
