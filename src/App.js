import React from "react";
import './App.css';
import { Adr } from "./Component/Profile/Address";
import { Name } from "./Component/Profile/FullName";
import { Photo } from "./Component/Profile/ProfilePhoto";
function App() {
  return (
    <div className="App">
     
  <Photo />
  <Name />
  <Adr/>
  <p>Hi, It's me Marwa. I'm a full stack web developer . web development is my passion .</p>
    </div>
  );
}

export default App;
