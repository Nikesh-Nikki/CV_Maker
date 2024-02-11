import React from 'react'; 
import { useState } from 'react';
import Input from './Input.jsx';


export default function Name (props){
    const [name,setName]=useState('NikkiBucky');
    function nameChange(event){
        setName(event.target.value);
    }
    return <Input className='name' callback= {nameChange} value={name}/>;
}