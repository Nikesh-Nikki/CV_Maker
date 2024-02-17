import React from 'react'; 
import Input from './Input.jsx';


export default function Entry (props){
    return (
        <div className='entry'>
            <div className='duration'>
                <Input className='startDate' pholder="Start Date" callback={props.callback} id={props.id} value={props.startDate}/>
                <p>-</p>
                <Input className='endDate' pholder="End Date" callback={props.callback}id={props.id} value={props.endDate}/>
            </div>
            <Input className='title' pholder="Enter Some Title" callback={props.callback}id={props.id} value={props.title}/>
            <Input className='desc' pholder="Write Some Descriptions" callback={props.callback}id={props.id} value={props.desc}/>
        </div>
    );
}