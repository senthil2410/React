import React, { useState } from "react";

const State=()=>
{
    const[counter,setCounter]=useState(0);
     
     function incrementBYOne()
     {
        setCounter(counter+1);
     }

     function decrementBYOne()
     {
        setCounter(counter-1);
     }

     return(
        <div>
            <h2>Increment and Decrement</h2>
                <h3>{counter}</h3>
            <button onClick={incrementBYOne} >Increment</button>
             <button onClick={decrementBYOne} >Decrement</button>
        </div>
     );


};

export default State;