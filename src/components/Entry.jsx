import React from 'react'; 
import Input from './Input.jsx';


export default function Entry (props){
    return (
        <div className='entry'>
            <Input className='startDate' callback={props.callback} id={props.id} value={props.startDate}/>
            <Input className='endDate' callback={props.callback}id={props.id} value={props.endDate}/>
            <Input className='title' callback={props.callback}id={props.id} value={props.title}/>
            <Input className='desc' callback={props.callback}id={props.id} value={props.desc}/>
        </div>
    );
}