//  import './App.css';

// function App() {
//   return (
//     <div className="App">
//        <h1>Event </h1>
//        <button
//        onClick= {() => {
//         alert("cliked");
//        }} 
//        >
//         Click me
//        </button>
//     </div>
//   );
// }

// export default App;


// 2nd program

// import React from "react";
// import "./App.css";
// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("");

//   const clickEvent = () => {
//     alert("Hello World");
//   };

//   const inputHandler = (event) => {
//     setName(event.target.value);
//   };
//   return (
//     <div className="App">
//       <h1>Events</h1>
//       <input
//         type="text"
//         onChange={inputHandler}
//         value={name}
//         placeholder="Enter your name"
//       />
//       <h3>Welcome : {name} </h3>
//     </div>
//   );
// }

// export default App;

// 3rd program
// import React from "react";
// import "./App.css";
// import { useState, useEffect } from "react";

// function App() {
//   const [name, setName] = useState("");
//   const [count, setCount] = useState(0);

//   const clickEvent = () => {
//     alert("Hello World");
//   };

//   const inputHandler = (event) => {
//     setName(event.target.value);
//   };

//   const Inc = () => {
//     setCount(count + 1);
//   };

//   useEffect(() => {
//     document.title = "You Clicked " + count + " " + "Times";
//   }, [count]);
//   return (
//     <div className="App">
//       <h1>Events</h1>
//       <input
//         type="text"
//         onChange={inputHandler}
//         value={name}
//         placeholder="Enter your name"
//       />
//       <h3>Welcome : {name} </h3>

//       <h3> You Clicked : {count} Times</h3>
//       <button onClick={Inc}>+</button>
//       <button>-</button>
//     </div>
//   );
// }

// export default App;


// 4th program
import React from "react";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  const clickEvent = () => {
    alert("Hello World");
  };

  const inputHandler = (event) => {
    setName(event.target.value);
  };

  const Inc = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    document.title = "You Clicked " + count + " " + "Times";
  }, [count]);
  return (
    <div className="App">
      <h1>Events</h1>
      <input
        type="text"
        onChange={inputHandler}
        value={name}
        placeholder="Enter your name"
      />
      <h3>Welcome : {name} </h3>

      <h3> You Clicked : {count} Times</h3>
      <button onClick={Inc}>+</button>
      <button>-</button>
      <h4>Time : {clockState} </h4>
    </div>
  );
}

export default App;
