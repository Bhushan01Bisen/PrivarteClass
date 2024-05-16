import React from "react";
import './App.css';
import {useState} from "react";
 

// function App() {
//   const[count,setCount]= useState(15);
//   return (
//     <div className="App">
//       <button onClick={()=> setCount(count + 1)}>+</button>
//       <h1>{count}</h1>
//       <button onClick={()=>setCount(count -1)}>-</button>
//     </div>
//   );
// }
function App() {
  const [count, setCount] = useState(0);

  function Inc() {
    setCount(count + 1);
  }

  function Dec() {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <button onClick={Inc}>+</button>
      <h1>{count}</h1>
      <button onClick={Dec}>-</button>
    </div>
  );
}

export default App;
