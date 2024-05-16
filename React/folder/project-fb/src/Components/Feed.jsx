import React from "react";
import { Box } from '@mui/system';
import { Post } from "./Post";
 


export const Feed =() =>{

    return(
        <Box flex={4} p={2}>

      <Post name="Bhushan" img="https://images.pexels.com/photos/1586663/pexels-photo-1586663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
      <Post name="Parag" img="https://images.pexels.com/photos/1687675/pexels-photo-1687675.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Post name="Snigo" img="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Post name="Arshad" img="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </Box>
    )
}
export default Feed;