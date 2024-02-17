import React from 'react'; 
import { useState } from 'react';
import Input from './Input.jsx';

export default function Entry (props){
    const [mouseIn,setMouseIn]=useState(false);
    return (
        <div className='entry'
        onMouseEnter={()=>setMouseIn(true)}
        onMouseLeave={()=>setMouseIn(false)}
        data-id={props.id}
        >
            <div className='duration'>
                <Input className='startDate' pholder="Start Date" callback={props.callback} id={props.id} value={props.startDate}/>
                <p>-</p>
                <Input className='endDate' pholder="End Date" callback={props.callback}id={props.id} value={props.endDate}/>
            </div>
            <Input className='title' pholder="Enter Some Title" callback={props.callback}id={props.id} value={props.title}/>
            <Input className='desc' pholder="Write Some Descriptions" callback={props.callback}id={props.id} value={props.desc}/>
            <button className='btn-close' onClick={props.delEntry} data-id={props.id}>X</button>
        </div>
    );
}