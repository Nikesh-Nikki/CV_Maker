import React from 'react'; 
import { useState } from 'react';
import Input from './Input.jsx';


export default function Name (props){
    const [name,setName]=useState('NikkiBucky');
    return <Input className='name' value={name}/>;
}