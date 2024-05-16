import React from "react";
import { Box, List, ListItem, ListItemText,ListItemIcon,ListItemButton,Switch } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ModeNightIcon from '@mui/icons-material/ModeNight';

export const Sidebar = () => {
    return (
    
                  <Box flex={1} p={2} sx={{ display: { xs: "none", sm:"block" } }}>
             <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
             <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="HomePage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
             <ArticleIcon/>
              </ListItemIcon>
              <ListItemText primary="ArticlePage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
             <GroupIcon/>
              </ListItemIcon>
              <ListItemText primary="GroupPage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
             <StorefrontIcon/>
              </ListItemIcon>
              <ListItemText primary="StoreFrantPage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
             <PersonIcon/>
              </ListItemIcon>
              <ListItemText primary="Personpage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
             <SettingsIcon/>
              </ListItemIcon>
              <ListItemText primary="SettingPage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
             <AccountBoxIcon/>
              </ListItemIcon>
              <ListItemText primary="AccountPage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
             <ModeNightIcon/>
              </ListItemIcon>
             <Switch/>
            </ListItemButton>
          </ListItem>
          </List>

            </Box>     
            )
        };
 
 