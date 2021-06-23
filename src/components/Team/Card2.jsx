import React from "react";
import "./Card2.css"; 

function Card2(props){
    return (
        <div className="card2">
           <div className="image">
        <img src={props.imgURL} alt="img" />
        </div>
        <h1>{props.name}</h1>
        <button className="btn"><a href={props.fbURL}>f</a></button>
       
        <button className="btn"> <a href={props.link}>in</a></button>
        
        </div>
        
    )
}
export default Card2;