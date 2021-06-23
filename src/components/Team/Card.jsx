import React from "react";
import "./Card.css";


function Card(props){
    return(
        
        <div className="card">
        <div className="image">
        <img src={props.imgURL} alt="img" />
        </div>
        <h1>{props.name}</h1>
        <h2>{props.position}</h2>
        </div>
    )
}
export default Card;