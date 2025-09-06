import './App.css';
import {useRef, React, useState} from "react";
import ChildA from "./ChildA";

//Rule1: use parent element
//Rule2: js expressions must be wrapped in {}
//Rule3: can't use if-else but ternary is okay
//Rule4: attribute class = classname


const data= createContext();
function App() {
const name= "Shreyash"
    return (
      <>
          <data.Provider value ={name}>
          <ChildA name={name}></ChildA>
          </data.Provider>
      </>
  );
}

export default App;
export {data};
