import './App.css';
import Card from './components/Card.js';
function App() {
  return (
    <div className="App">
      <h1>Props</h1>
      <div className="flex">
      <Card 
      name= 'VI'
      role= "Stucture"
      sal= "15000"
      btn='100'
      btn1='200'
      />
      <br />
     <Card 
      name= "JIO"
      role= "Styling"
      sal= "25000"
      btn='100'
      btn1='200'
      />
      <br />
    <Card 
      name= "BSNL"
      role= "Interactive"
      sal= "40000"
      btn='100'
      btn1='200'
      />
    <Card 
      name= "JavaScript"
      role= "Interactive"
      sal= "40000"
      btn='100'
      btn1='200'
      />
    <Card 
      name= "JavaScript"
      role= "Interactive"
      sal= "40000"
      btn='100'
      btn1='200'
      />
    </div>
    </div>
  );
}

export default App;
