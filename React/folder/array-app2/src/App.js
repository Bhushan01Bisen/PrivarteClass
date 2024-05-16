import React from "react";
import "./App.css";
 

function App() {
  const fruits = ["Banana", "Apple", "Kiwi", "Peach"];
  const weeks = [
    "sunday",
    "monday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "June",
    "July",
    "August",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const printMonths = months.map((month) => {
    return <li>{month}</li>;
  });

  const printWeeks = weeks.map((week) => {
    return <li>{week}</li>;
  });

  return (
    <div className="App">
      <h1>Lists and Map in React</h1>
      <h3>Months</h3>
      <ul>{printMonths}</ul>

      <h3>Weeks</h3>
      <ul>{printWeeks}</ul>

      <h3>Fruits</h3>
      <ul>
        {fruits.map((fruit) => {
          return <li>{fruit}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;