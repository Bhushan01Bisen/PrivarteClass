import { AppBar, styled, Toolbar, Typography, InputBase ,Badge ,Avatar,Box,Menu,MenuItem} from "@mui/material";
import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from "react";


const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

const Search = styled("div")(({theme}) =>  ({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));

const Icons = styled(Box)(({theme}) => ({
    display:"none", alignItems:"center", gap:"20px",
    [theme.breakpoints.up("sm")]:{
        display:'flex'
    }
}));
const UserBox = styled(Box)(({theme}) => ({
    display:"flex", alignItems:"center", gap:"10px",
    [theme.breakpoints.up("sm")]:{
        display:'none'
    }
}));

export const Navbar = () => {


    const [open,setOpen] = useState(false)
    return (
        <AppBar position="stick" >
            <StyledToolbar>
                <Typography Variant="h6" sx={{ display: { xs: "none", sm: "block" } }} >Facebook</Typography>
                <FacebookIcon sx={{ display: { xs: "block", sm: "none" } }}/>
                <Search> <InputBase placeholder="Search.." /> </Search>
                <Icons>
                    <Badge badgeContent={2} color="error" >
                        <MailIcon />
                    </Badge>
                    <Badge badgeContent={2} color="error" >
                        <NotificationsIcon />
                    </Badge>
                  
                    <Avatar
                    sx={{ width:30 , height:30 }}
                     alt="Remy Sharp" src=" https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"     onClick= {(e)=> setOpen(true)} />
                 

                </Icons>
       <UserBox  onClick= {(e)=> setOpen(true)} >
    <Avatar
                    
                    sx={{ width:30 , height:30 }}
                     alt="Remy Sharp" src=" https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" />

                     <Typography variant="span">
                     Diva
                     </Typography>
      </UserBox>
            </StyledToolbar>
        
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    


        </AppBar>
    );
};