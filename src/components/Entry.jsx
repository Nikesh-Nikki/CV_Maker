import React from 'react'; 
import Input from './Input.jsx';


export default function Entry (props){
    return (
        <div className='entry'>
            <div className='duration'>
                <Input className='startDate' callback={props.callback} id={props.id} value={props.startDate}/>
                <p>-</p>
                <Input className='endDate' callback={props.callback}id={props.id} value={props.endDate}/>
            </div>
            <Input className='title' callback={props.callback}id={props.id} value={props.title}/>
            <Input className='desc' callback={props.callback}id={props.id} value={props.desc}/>
        </div>
    );
}