import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { Feed } from "./Components/Feed";
import { Rightbar } from "./Components/Rightbar";
import { Sidebar } from "./Components/Sidebar";
import {Navbar} from "./Components/Navbar";


function App() {
  return (
    <Box>
      <Navbar/>
      <Stack direction="row" spacing={2} 
      justifyContent="space-evenly" >
      <Sidebar/>
      <Feed/>
      <Rightbar/>
      </Stack>
    </Box>
  );
}

export default App;