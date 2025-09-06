import './App.css';
import React, {useMemo, useState} from "react";

//Rule1: use parent element
//Rule2: js expressions must be wrapped in {}
//Rule3: can't use if-else but ternary is okay
//Rule4: attribute class = classname
//create, provider, useContext

const data= createContext();
const data1=createContext();

function App() {
    const [add, setAdd]=useState(0);
    const [minus, setMinus]=useState(100);

    const multiply= useMemo( function multiply(){
        console.log("@#$%")
        return add*10;
        },[add]
    )

    return (
      <div className='App'>
          <h1>Learning useMemo</h1>
          {multiply}<br/>
          <button onClick={()=>setAdd(add+1)}>Addition</button>
          <span>{add}</span><br/>
          <button onClick={()=>setMinus(minus-1)}>Substraction</button>
          <span>{minus}</span><br/>
      </div>
  );
}

export default App;
export {data,data1};
