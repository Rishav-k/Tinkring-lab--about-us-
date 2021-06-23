import React from "react";
import "./Division.css";
 function Division(props){
     return (
         <div className="division">
             <h1>{props.name}</h1>
            <hr/>
         </div>
     )
 }
 export default Division;