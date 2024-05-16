import React from "react";
import logo from "./logo.svg";
import "./App.css";
import mm from './component/m.jpg';
import m2 from './component/l.jpg';
import m3 from './component/u.jpg';
import m4 from './component/index.jpg';



function App() {
  const myJSXelement = <h1>Hello, I am JSX</h1>;
  const myNojsx = React.createElement("h1", {}, "Hello, I am without JSX");

  return (
    <div className="App">
      {/* Nav Starts here */}
      <ul id="nav">
        <li className="nav1">
          <a href="#">Home Page</a>
        </li>
        <li className="nav1">
          <a href="#">Food Menu</a>
        </li>
        <li className="nav1">
          <a href="#">Contact</a>
        </li>
      </ul>
      {/* Nav Ends Here */}
     
     <h1>Monkey D. Luffy</h1>
     <div className="luffy">
     <img src={mm} alt="BigCo Inc. logo"/>
     <img src={m2} alt="BigCo Inc. logo"/>
     <img src={m3} alt="BigCo Inc. logo"/>
     <img src={m4} alt="BigCo Inc. logo"/>
     </div>
     <div className="para">
     <p>Who is the lover of Monkey D Luffy?
Image result for monkey d luffy
Throughout his journey Luffy has made strong bonds with numerous women. At least two have fallen in love with him, Alvida and Hancock, whilst another two have become enamoured with him, Rebecca and Shirahoshi.</p>
     </div>
     <footer>
     <ul id="nav">
        <li className="nav1">
          <a href="#">Home Page</a>
        </li>
        <li className="nav1">
          <a href="#">Food Menu</a>
        </li>
        <li className="nav1">
          <a href="#">Contact</a>
        </li>
      </ul>
     </footer>
     
    </div>
  );
}

export default App;
