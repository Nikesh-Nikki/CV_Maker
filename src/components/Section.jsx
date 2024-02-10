import React from 'react'; 
import PlusButton from './PlusButton';

export default function Section(props){
    
    return <div className="section">
        <div className='topSection'>
            <h2>{props.title}</h2>
            <PlusButton />
        </div>
        {
            
        }
    </div>;
}