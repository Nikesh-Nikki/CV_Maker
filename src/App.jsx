import React from "react";
import Doc from "./components/Doc";
import Name from "./components/Name.jsx";
import Post from "./components/Post.jsx";
import Section from "./components/Section.jsx";

export default function App(){
    return (
        <Doc>
            <div id="header">
                <Name name='Nikesh Tadela' pholder="Type Name Here"/>
                <Post post='Front End Dev' pholder="Designation goes here"/>
            </div>
            <Section title='Education' />
            <Section title = 'Experience' />
        </Doc>
    );
}