import './App.css';
import React, {useMemo, useState} from "react";

//Rule1: use parent element
//Rule2: js expressions must be wrapped in {}
//Rule3: can't use if-else but ternary is okay
//Rule4: attribute class = classname
//create, provider, useContext


function App() {
    const [add, setAdd]=useState(0);
    const [count, setCount]=useState(0);
    const Learning=useCallback(()=>{
    },[])

    return (
        <div className='App'>
          <h1>Learning useCallback</h1>
            <ChildA Learning={Learning} count={count}/>
          <h1>{add}</h1>
            <button onClick={()=>setAdd(add+1)}>Addition</button>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+2)}>Count</button>
        </div>
  );
}

export default App;
