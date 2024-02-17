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
    const [mouseIn,setMouseIn]=useState(false);
    function addEntry(){
        let id=entries.length?(entries[entries.length-1].id+1):0;
        setEntries([...entries,{...defaultEntry,id}]);
    }
    function deleteEntry(event){
        console.log(event.target.dataset.id);
        setEntries(
            entries.filter((entry)=>entry.id!=event.target.dataset.id)
        );
    }
    function mouseOverHandler(event){
        setMouseIn(true);
    }
    function mouseLeaveHandler(event){
        setMouseIn(false);
    }
    function inputOnChange(event){
        setEntries(
            entries.map((entry)=>{
                if(entry.id==event.target.dataset.id){
                    console.log(event.target.dataset.role);
                    entry[event.target.dataset.role]=event.target.value;
                    return entry;
                }else return entry;
            })
        );
    }
    return <div className="section">
                <div className='topSection' 
                    onMouseOver={mouseOverHandler}
                    onMouseLeave ={mouseLeaveHandler}
                >
                    <h2>{props.title}</h2>
                    <PlusButton callback={addEntry} visibility={mouseIn?'opaque':'transparent'}/>
                </div>
                {
                    entries.map((entry)=><Entry {...entry} key={entry.id} id={entry.id} callback={inputOnChange} delEntry={deleteEntry}/>)
                }
            </div>;
}