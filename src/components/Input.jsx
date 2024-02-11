import React, { useState } from 'react'; 


export default function Input (props){
    const [value,setValue]=useState(props.value);
    return <input type='text' onChange={(e)=>setValue(e.target.value)}
    className={props.className} value={value}
        spellCheck={false}
    />
}