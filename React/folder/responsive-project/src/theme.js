import { createTheme } from "@mui/material";
import { light  } from "@mui/material/styles/createPalette";

export const theme = createTheme({
    palette:{
        primary:{
        main:"#1760a5",
        light:"skyblue",
     },
     secondary:{
        main:"#15c630",

     },
     otherColor:{
        main:"red"
  }
    },
})