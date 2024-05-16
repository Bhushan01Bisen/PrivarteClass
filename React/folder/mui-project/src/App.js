import React from "react";
import {Typography, AppBar,Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from "@mui/material";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import './App.css';

const cards= [1, 2, 3, 4, 5, 6, 7, 8, 9];


function App() {
  return (
      <>
      <CssBaseline/>
      <AppBar position="relative">
        <Toolbar>
          <CameraAltIcon/> 
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          {/* Adding CSS style={{Attribute:"value"}} */}
          <Container maxWidth="sm" style={{marginTop:"50px"}} >
            <Typography variant="h2" align="center" color="textPrimary">Photo Album</Typography>
            <Typography variant="h5" align="center" color="textSecondary">
              Hello everyone, this is photoalbum project, created using React and material ui components
            </Typography>
            <div>
              <Grid container spacing={2} justify="center">
                <Grid item>
                <Button variant="contained" color="primary">See my Photos</Button>
                </Grid>
                <Grid item>
                <Button variant="outlined" color="primary">See my Albums</Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container maxWidth="md"style={{marginTop:"100px"}}>
          <Grid container spacing={4}>
          {cards.map((card) => {
              return (
                <Card  style={{
                  width:"250px",
                  margin:"20px",
                  border: "1px solid black",
                  }}
                  >
              <CardMedia 
              style={{paddingTop:"56.25%"}}
              image="https://source.unsplash.com/random" title="Image title">
              </CardMedia>
              <CardContent>
                <Typography variant="h4">Heading</Typography>
                <Typography variant="h6"> This is the image from the unsplash website, each time it generates the random image</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained" color="success">View</Button>
                <Button size="small" variant="contained" color="error">Delete</Button>
              </CardActions>
            </Card>
            );
          })}
          </Grid>
        </Container>
      </main>
      </>
  );
}

export default App;