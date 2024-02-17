import React from 'react'; 
import { useState } from 'react';
import Input from './Input.jsx';


export default function Name (props){
    const [name,setName]=useState(props.name);
    function nameChange(event){
        setName(event.target.value);
    }
    return <Input className='name' callback= {nameChange} pholder={props.pholder} value={name}/>;
}