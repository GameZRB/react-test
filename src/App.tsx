import * as React from 'react';
import './style.css';
import StudentItem from "./components/StudentItem";

export default function App() {
  const StudentList = [
    { name: "Tom", surname: "Curise", age: 60 },
    { name: "Johny", surname: "Depp", age: 59 },
    { name: "Keanu", surname: "Reeves", age: 58 },
    { name: "Samuel", surname: "Jackson", age: 73 }
]
  return (
    <div className="App">
      <h1>React Test.</h1>
      <StudentItem name={StudentList[0].name} surname={StudentList[0].surname} age={StudentList[0].age}></StudentItem>
      <StudentItem name={StudentList[1].name} surname={StudentList[1].surname} age={StudentList[1].age}></StudentItem>
      <StudentItem name={StudentList[2].name} surname={StudentList[2].surname} age={StudentList[2].age}></StudentItem>
      <StudentItem name={StudentList[3].name} surname={StudentList[3].surname} age={StudentList[3].age}></StudentItem>
    </div>
  )
}
