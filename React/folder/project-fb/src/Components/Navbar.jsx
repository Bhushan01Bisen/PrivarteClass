import { AppBar, Toolbar, styled, Typography, InputBase, Badge, Avatar , Box, Menu, MenuItem } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import React, { useState } from "react";



const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
});

const Search = styled("div")(({ theme }) => ({
backgroundColor:"white",
padding :"0 10px ",
borderRadius:theme.shape.borderRadius,
width:"40%",
}));

const Icons = styled("Box")(({ theme }) => ({
    // backgroundColor:"white",
    display:"none",
    alignItems:"center",
    gap:"20px",
    [theme.breakpoints.up("sm")]:{
        display:'flex'
    }
    }));

    const UserBox = styled(Box)(({ theme }) => ({
        display:"flex",
        alignItems:"center",
        gap:"10px",
        [theme.breakpoints.up("sm")]:{
            display:'none'
        }
        }));


export const Navbar =() =>{

    const [open , setOpen] = useState (false)
    return(
        <AppBar position="sticky">
            <StyledToolbar>
            <Typography variant="h6" sx={{display:{xs:"none",sm:"block"}}}>Facebook</Typography>
            <FacebookIcon sx={{display:{xs:"block",sm:"none"}}}/>
            <Search>
                <InputBase placeholder="Search..."/>
                </Search>
            <Icons>
                <Badge badgeContent={5} color="error">
                    <MailIcon  />
                    </Badge>
                <Badge badgeContent={5} color="error">
                    <NotificationsIcon  />
                    </Badge>
                    <Avatar sx={{height:30,width:30}} src="https://images.pexels.com/photos/413761/pexels-photo-413761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                     onClick={(e) => setOpen(true)} />
            </Icons>
            <UserBox>
            <Avatar  sx={{height:30,width:30}} src="https://images.pexels.com/photos/413761/pexels-photo-413761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
<Typography>Bhushan</Typography>
            </UserBox>
            </StyledToolbar>

            <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        
        open={open}
        onClose ={e=>setOpen(false)}
        
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
        </AppBar>
    )
}
export default Navbar;