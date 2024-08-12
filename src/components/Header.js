import React, { useState } from 'react';
import {
  AppBar, Toolbar, IconButton, InputBase, Divider,Typography, Box, useMediaQuery, Drawer, List, ListItem, ListItemText
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import { useTheme } from '@mui/material/styles';

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = (
    <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: "center", gap: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <CardGiftcardOutlinedIcon />
        <Typography sx={{ fontWeight: "bold", fontSize: ".9rem" }}>Gift Mode</Typography>
      </Box>
      <Typography sx={{ fontWeight: "bold", fontSize: ".9rem" }}>Back-to-School-Saving</Typography>
      <Typography sx={{ fontWeight: "bold", fontSize: ".9rem" }}>Home Favorite</Typography>
      <Typography sx={{ fontWeight: "bold", fontSize: ".9rem" }}>Fashion Find</Typography>
      <Typography sx={{ fontWeight: "bold", fontSize: ".9rem" }}>Registry</Typography>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ background: "white" }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h5" noWrap sx={{ color: "#F76B0E", fontSize: "2rem" }}>
            Etsy
          </Typography>
          {!isMobile && (
            <Box sx={{ display: "flex", color: "#000", alignItems: "center", ml: 2 }}>
              <IconButton><MenuIcon /></IconButton>
              <Typography>Categories</Typography>
            </Box>
          )}
        </Box>
        <InputBase
          placeholder="Search for anything"
          sx={{
            ml: 1, flex: 1, border: '2px solid #000', borderRadius: 6, padding: '4px 8px',
            minWidth: isMobile ? 'auto' : '300px'
          }}
          value={searchQuery}
          onChange={handleSearchChange}
          endAdornment={<SearchIcon sx={{ background: "#F76B0E", color: "white", borderRadius: "50%", padding: ".4rem" }} />}
        />
        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
            <Typography sx={{ fontSize: ".8rem", color: "#000" }}>Sign in</Typography>
            <IconButton>
              <FavoriteBorderIcon sx={{ color: "#000" }} />
            </IconButton>
            <IconButton>
              <CardGiftcardIcon sx={{ color: "#000" }} />
            </IconButton>
            <IconButton>
              <ShoppingCartOutlinedIcon sx={{ color: "#000" }} />
            </IconButton>
          </Box>
        )}
        {isMobile && (
          <IconButton onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItem button>
            <ListItemText primary="Sign in" />
          </ListItem>
          <ListItem button>
            <IconButton>
              <FavoriteBorderIcon sx={{ color: "#000" }} />
            </IconButton>
            <ListItemText primary="Favorites" />
          </ListItem>
          <ListItem button>
            <IconButton>
              <CardGiftcardIcon sx={{ color: "#000" }} />
            </IconButton>
            <ListItemText primary="Gift Cards" />
          </ListItem>
          <ListItem button>
            <IconButton>
              <ShoppingCartOutlinedIcon sx={{ color: "#000" }} />
            </IconButton>
            <ListItemText primary="Cart" />
          </ListItem>
          <Divider />
          <ListItem>{menuItems}</ListItem>
        </List>
      </Drawer>
      {!isMobile && (
        <Box sx={{ display: "flex", marginTop: "1rem", color: "#000", justifyContent: "center", gap: 4 }}>
          {menuItems}
        </Box>
      )}
    </AppBar>
  );
};

export default Header;
