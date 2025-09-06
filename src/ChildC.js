import React from "react";
import {data} from './App'

function ChildC(){
    const name = useContext(data);
    const gender = useContext(data1);
return(
    <>
        <data.Consumer>
            {
                (name)=>{
                    return(
                        <h1>My name is {name}</h1>
                    )
                }
            }
        </data.Consumer>
    </>
)
}
export default ChildC;

