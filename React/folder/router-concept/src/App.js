import React from 'react';
import {Routes, Route} from 'react-router-dom';
 import Home from "./componenets/Home";
 import About from "./componenets/About";
 import Contact from "./componenets/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        </Routes>
    </div>
  );
}

export default App;
