import React from "react";
import { Box } from '@mui/system';
import { Avatar, AvatarGroup, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";


export const Rightbar =() =>{
    return(
        
        <Box  flex={2}
         p={2} 
         sx={{display:{xs:"none",sm:"block"}}}>
             <Box position="fixed" width={300}>
             <Typography variant="h6" fontWeight={100}>Online Friends</Typography>
        <AvatarGroup max={7}>
      <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/1687675/pexels-photo-1687675.jpeg?auto=compress&cs=tinysrgb&w=600" />
    </AvatarGroup>
    <Typography variant="h6" fontWeight={100} mt={2} mb={2} >Latest Post</Typography>

<ImageList cols={3} rowHeight={100} gap={5}>

<ImageListItem>
    <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" alt="img1" />
</ImageListItem>
<ImageListItem>
    <img src="https://images.unsplash.com/photo-1522770179533-24471fcdba45" alt="img2" />
</ImageListItem>
<ImageListItem>
    <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" alt="img3" />
</ImageListItem>
{/* <ImageListItem>
    <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" alt="img4" />
</ImageListItem>
<ImageListItem>
    <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" alt="img5" />
</ImageListItem>
<ImageListItem>
    <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" alt="img6" />
</ImageListItem>
<ImageListItem>
    <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" alt="img7" />
</ImageListItem>
<ImageListItem>
    <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" alt="img1" />
</ImageListItem> */}


</ImageList>

<Typography variant="h6" fontWeight={100} mt={2}  >List Conversatation Post</Typography>

<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>


 

        </Box>  
        </Box>
    )
}
export default Rightbar;