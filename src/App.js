import React from "react";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import { useRef, useState, useEffect } from "react";

function App (){
    const [name , setName] = useState ("");
    const [age , setAge] = useState ("");
    const [gender , setGender] = useState ("");
    const [email,setEmail] =useState ("");
     
    function onSubmitHnadeler(){
        alert (`Name is${name}      Age is ${age}          Gender is ${gender}          email is${email} `);
    }

    return(
        <div className="container">
            <h2 className="text-center">Some infromtion About You</h2>
              <form onSubmit={onSubmitHnadeler}>
                <div className="md-3">
                <label className="form-label fw-bolder">Name</label>    
                 <input className="form-control" placeholder="Name "name="name" type="text" value={name} onChange={(event)=>setName (event.target.value)} />
                </div>
                <div className="mt-3">
                <label className="form-label fw-bolder ">Date of birth</label>    
                 <input  placeholder="Age " name="age" type="date" value={age} onChange={(event)=>setAge (event.target.value)} />
                </div>
                <div>
                    <label className="form-label fw-bolder">Gender</label>
                </div>
                <div>
                    <input type="radio" name="gender" value='male' onChange={(event)=> setGender(event.target.value)}/>
                    <label className="form-label">Male</label>
                    <input type="radio" name="gender" value='fe male' onChange={(event)=> setGender(event.target.value)}/>
                    <label className="form-label">Female</label>
                </div>
                <div>   
                    <label className="form-label fw-bolder">Email</label>
                    <input placeholder="email" className="" type='email'value={email} onChange={(event)=>setEmail (event.target.value)}/>
                </div>
                <input type='submit' value='Submit'/>
                
            
           
            
        </form>
        </div>
      
    )
}
export default App
