import React, { useState } from 'react'; 


export default function Input (props){
    return <input type='text' 
    onChange={props.callback}
    className={props.className}
     value={props.value}
        spellCheck={false}
        data-role={props.className}
        data-id={props.id}
    />
}