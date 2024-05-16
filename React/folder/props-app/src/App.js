import './App.css';
import Card from './Components/Card';
function App() {
  return (
    <div className="App">
      <h1>Props</h1>
      <div className="flex">
      <Card 
      name= "HTML"
      role= "Stucture"
      sal= "15000"
      />
      <br />
     <Card 
      name= "CSS"
      role= "Styling"
      sal= "25000"
      />
      <br />
    <Card 
      name= "JavaScript"
      role= "Interactive"
      sal= "40000"
      />
    <Card 
      name= "JavaScript"
      role= "Interactive"
      sal= "40000"
      />
    <Card 
      name= "JavaScript"
      role= "Interactive"
      sal= "40000"
      />
    </div>
    </div>
  );
}

export default App;
