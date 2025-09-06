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
const name= "Shreyash";
const gender="Male";
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
export {data,data1};
