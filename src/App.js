import './App.css';
import {React, createContext} from "react";
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
          <data.Provider value={name}>
              <data1.Provider value={gender}>
                  <ChildA>

                  </ChildA>
              </data1.Provider>
          </data.Provider>
      </>
  );
}

export default App;
export {data};
