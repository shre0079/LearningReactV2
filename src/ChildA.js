import React from "react";
import ChildB from "./ChildB";

function ChildA({name}){
return(
    <ChildB name={name}></ChildB>
)
}
export default ChildA;