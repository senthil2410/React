import React from "react";
import Login from "./Login.jsx";
import Home from "./Home.jsx";
const ConditionalRendering=({isLoggedin})=>
{
    return(
        <div>
            {
                (isLoggedin)?(<Home />):(<Login/>)
            }
        </div>
    )
}

export default ConditionalRendering;