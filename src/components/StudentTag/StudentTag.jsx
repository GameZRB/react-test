import React from 'react';
import "./StudentTag.css";

function StudentTag(props) {
  const year = new Date().getFullYear() - props.age;
  let yearClassName = "Tag ";
  switch(year%4){
    case 1:
      yearClassName += "Red";
      break;
    case 2:
      yearClassName += "Green";
      break;
    case 3:
      yearClassName += "LightBlue";
      break;
    case 0:
      yearClassName += "Blue";
      break;

  }

  let retired;
  if (props.age >= 60){
    retired = true;
  }else {
    retired = false;
  }
  
  
  return(
    <div className="AgeGroup">
      <div className={retired? "Tag Red Retired" : "Tag Green Working"}>{retired ? "Retired" : "Working"}</div>
      <div className={yearClassName}>{year}</div>
    </div>
  );
}

export default StudentTag