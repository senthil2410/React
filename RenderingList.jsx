import React from "react";

const RenderingList=()=>
{
    const Students=[
        {id:1,name:"Senthil",dept:"IT"},
        {id:2,name:"Kumar",dept:"CSE"},
        {id:3,name:"Suchind",dept:"IT"},
        {id:4,name:"Thainesh",dept:"ECE"}
    ]


    return(
        <div>
          <div className="table">
            <ul>
           {Students.map((student) => (
           <li key={student.id} className="">
           {student.name} {student.dept}
         </li>
          ))}
          </ul>
          </div>
        </div>
    );
};


export default RenderingList;