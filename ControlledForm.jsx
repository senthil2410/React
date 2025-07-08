import React from "react";
import { useState } from "react";


const ControlledForm=()=>
{
    const[user,setUser]=useState({
        name:"",
        email:"",
        phone:""
    })

    const handleChange=(e)=>
    {
       const{name,value}=e.target;
       setUser((prevUser)=>({
           ...prevUser,
           [name]:value
       }))
    }

    const handleSubmit=(e)=>
    {
          alert(`the  user data : ${user.name} \n ${user.email}\n ${user.phone}`)
    }

    return(
        <div>
            <div className="container">

               
                 <h2 className="header">User Form</h2>
            
            <form onSubmit={handleSubmit}>
                <div className="form-group ">
                    <input type="text" className="form-control" placeholder="User NAME" name="name" value={user.name} onChange={handleChange}/>
                </div>
                <div className="form-group ">
                    <input type="email" className="form-control" placeholder="Email" name="email" value={user.email} onChange={handleChange}/>
                </div>
                <div className="form-group ">
                    <input type="phone"className="form-control" placeholder="Password"  name="phone"value={user.phone} onChange={handleChange}/>
                </div>

                <button type="submit">SUBMIT</button>
            </form>
            </div>
 
            </div>
    );
}

export default ControlledForm;