import React from 'react'; 
import Input from './Input.jsx';


export default function Entry (props){
    return (
        <div className='entry'>
            <Input className='entry-start-date' />
            <Input className='entry-end-date' />
            <Input className='entry-title'/>
            <Input classNam='entry-desc' />
        </div>
    );
}