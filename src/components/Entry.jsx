import React from 'react'; 
import Input from './Input.jsx';


export default function Entry (props){
    return (
        <div className='entry'>
            <Input className='entry-start-date' value={props.startDate}/>
            <Input className='entry-end-date' value={props.endDate}/>
            <Input className='entry-title' value={props.title}/>
            <Input classNam='entry-desc' value={props.desc}/>
        </div>
    );
}