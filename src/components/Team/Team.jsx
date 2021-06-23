import React from "react";
import "./Team.css";
import Division from "../Division/Division.jsx";
import Management from "./Management.jsx";
import Card from "./Card.jsx";
import Subject from "./Subject/Subject.jsx";
import Students from "./Student.jsx";
import Card2 from "./Card2.jsx";
import FormerSecretary from "./FormerSecretary.jsx";
function Team(){
    const name="Team";
    return (
        <div>
            <Division name={name} />
            <Subject name="Management" />
            <div className="team-card">
                {Management.map((item,index)=>{
                    return(<Card key={index} name={item.name} imgURL={item.imgURL} position={item.Position} />)
                })}
            </div>
            <Subject name="Student's Body" />
            <div className="team-card">
            {
                Students.map((item,index)=>{
                    return(<Card2 key={index} name={item.name} imgURL={item.imgURL} fbURL={item.fbURL} link={item.linkedIn} />)
                })}                
            </div>
            <Subject name="Former Secretary" />
            <div className="team-card">
            {
                FormerSecretary.map((item,index)=>{
                    return(<Card2 key={index} name={item.name} imgURL={item.imgURL} fbURL={item.fbURL} link={item.linkedIn}  />)
                })}                
            </div>
            </div>
    );
}
export default Team;