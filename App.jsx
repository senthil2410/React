import React from "react";
import DisplayingData from "./DisplayingData";
import ConditionalRendering from "./ConditionalRendering";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import State from "./State";
import RenderingList from "./RenderingList.jsx";
import Category from "./Category.jsx";
import ControlledForm from "./ControlledForm.jsx";

const Greeting=({name})=>
{
     return(
      <>
      <h2>Welcome {name} </h2></>
     )
}

function App() {
  

  return (
   <Router>
   {/* <h1>Welcome to react app</h1>
   <Greeting name="Senthil" />
   <DisplayingData />
   <ConditionalRendering  isLogged={true} /> */}

   <Routes>
       < Route path="/state" element={<State/>} />
       <Route path="/list" element={<RenderingList/>}/>
       <Route path="/category" element={<Category/>}/>
       <Route path="/form"  element={<ControlledForm/>}/>
   </Routes>

   </Router>
  )
}

export default App;
