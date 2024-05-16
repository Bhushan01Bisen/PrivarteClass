import { Avatar, Box, Button, createTheme, Fab, IconButton, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import React from 'react'
import { useState } from 'react';




const Add = () => {
   
const [open , setOpen]= useState(false);
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius:5,
    boxShadow: 24,
    p: 4,
};

  return (
    <>
        <Tooltip
        onClick={(e)=> setOpen(true)}
        title="Delete" sx={{position:'fixed' , bottom:20 , 
    left:{xs: "calc(50%)", md:30},}}>
  <IconButton>
  <Fab color="primary" aria-label="add">
  <AddIcon />
</Fab>
  </IconButton>
</Tooltip>

<Modal
  open={open}
  onClose={(e) => setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>

    <Typography id="modal-modal-title" variant="h6" textAlign="center" component="h2">
      Hello
    </Typography> 
    
   <Typography variant="h6" color="grey" textAlign="center">Create Post</Typography>
  <userBox>
    <Avatar alt="Remy Sharp"
    src="/static/images/avatar/1.jpg"
    sx={{width:30, height:30, mb:2}}></Avatar>
  </userBox>
  <TextField label="Whats on your mind ?" color="primary" focused />
  </Box>
  
</Modal>
    </>
  )
}

export default Add