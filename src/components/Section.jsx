import React from 'react'; 
import PlusButton from './PlusButton';

//Section contains the heading like (Education and Experience)
//it also has a plusbutton that becomes visible when hovered the top section
//and it will have the array of entries as state

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