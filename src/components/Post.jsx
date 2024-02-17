import React from 'react'; 
import { useState } from 'react';
import Input from './Input.jsx';

export default function Post (props){
    const [post,setPost]=useState(props.post);
    function changePost(event){
        setPost(event.target.value);
    }
    return <Input className='post' callback = {changePost} pholder={props.pholder} value={post}/>
}