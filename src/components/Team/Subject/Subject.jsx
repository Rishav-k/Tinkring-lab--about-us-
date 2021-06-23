import React from "react";
import "./Subject.css";
 function Subject(props){
     return (
         <div className="subject">
             <h1>{props.name}</h1>
            
         </div>
     )
 }
 export default Subject;