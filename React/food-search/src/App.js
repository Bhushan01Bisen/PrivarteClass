import './App.css';
import { useState } from 'react';
import React from 'react';

function App() {
  const [search,setSearch]= useState("");
  const [data,setData] = useState([])
const YOUR_APP_ID ="6421a2af"
const 

  const  submitHandler = (e) => {
    e.preventDefault();
    fetch()
  }
  return (
    <div className="App">
       <h1>Food Recipe Serach </h1>
       <form>
      
        <input type="text"  value={search} 
        onChange = {(e) => setSearch(e.target.value)}/>
        <input type="submit" value="search" />
       </form>
       <h3>You are Searching : {search}</h3>

    
    </div>
  );
}

export default App;
