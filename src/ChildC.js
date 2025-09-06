import React, {useContext} from "react";
import {data,data1} from './App'

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

