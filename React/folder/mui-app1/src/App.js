import React from "react";
import {Button} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function App() {
  return (
    <div className="App">
      <h1>MUI Demo</h1>
      <Button>Test Button</Button>
      <Button variant="text">Text</Button>
      <div className="demo">
      <Checkbox {...label} defaultChecked />
    <Checkbox {...label} />
    <Checkbox {...label} disabled />
    <Checkbox {...label} disabled checked />
      </div>
    </div>
  );
}

export default App;