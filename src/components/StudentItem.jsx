import React from 'react';
import "./StudentItem.css";
import StudentTag from "./StudentTag/StudentTag";

function StudentItem(props) {
  
  return( 
  <div className="StudentItem">
    <div>{props.name}</div>
    <div>{props.surname}</div>
    <div>{props.age}</div>
    <StudentTag age={props.age}/>
    
  </div>
  );
}

export default StudentItem;
