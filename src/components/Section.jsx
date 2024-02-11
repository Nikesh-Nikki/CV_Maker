import React from 'react'; 
import PlusButton from './PlusButton';
import { useState } from 'react';
import Entry from './Entry';

//Section contains the heading like (Education and Experience)
//it also has a plusbutton that becomes visible when hovered the top section
//and it will have the array of entries as state

const defaultEntry = {
    startDate : 'st',
    endDate : 'end',
    title : 'title',
    desc : 'desc'
};

export default function Section(props){
    const [entries,setEntries]=useState([]);
    function addEntry(){
        setEntries([...entries,defaultEntry]);
    }
    return <div className="section">
        <div className='topSection'>
            <h2>{props.title}</h2>
            <PlusButton callback={addEntry}/>
        </div>
        {
            entries.map((entry)=><Entry {...entry}/>)
        }
    </div>;
}