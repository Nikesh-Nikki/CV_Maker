import React from 'react'; 


export default function PlusButton (props){
    return <button className={`add ${(props.visibility)?props.visibility:' '}`} onClick={props.callback}>+</button> ;
}