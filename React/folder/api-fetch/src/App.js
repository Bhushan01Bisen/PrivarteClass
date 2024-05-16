import React, { useEffect, useState } from "react";

import './App.css';

function App() {
  const [data, setData] = useState([]);

 useEffect ( () =>
{
  fetch ("https://data.covid19india.org/data.json")
  .then ((res) => res.json()) //res ise respond 
  // .then (jsondata => console.log(jsondata))//res is stored in console.log
  .then((jsondata) => setData(jsondata.statewise));

  
},[]);
  return (
    
    <div className="App">
      <center>
      <h3>Covid 19 Cases Trakcer</h3>
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th>State</th>
              <th>Confirmed</th>
              <th>Recovered</th>
              <th>Deaths</th>
              <th>Active</th>
              <th>LastUpdate</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr>
                  <td>{item.state}</td>
                  <td>{item.confirmed}</td>
                  <td>{item.recovered}</td>
                  <td>{item.deaths}</td>
                  <td>{item.active}</td>
                  <td>{item.lastupdatedtime}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default App;
