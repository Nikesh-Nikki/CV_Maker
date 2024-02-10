import React from "react";
import Doc from "./components/Doc";
import Name from "./components/Name.jsx";
import Post from "./components/Post.jsx";
import Section from "./components/Section.jsx";

export default function App(){
    return (
        <Doc>
            <Name name='Nikesh Tadela'/>
            <Post post='Front End Dev' />
            <Section title='Education' />
        </Doc>
    );
}