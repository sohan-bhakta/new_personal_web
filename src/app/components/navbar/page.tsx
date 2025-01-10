import React, { useState } from "react";
import { Link, Button, Box, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { LightModeOutlined, LightMode } from '@mui/icons-material';
import { GiHamburgerMenu } from "react-icons/gi";

interface NavbarProps {
  onToggleTheme: () => void;
  isDarkMode: boolean;
}

function Navbar({ onToggleTheme, isDarkMode }: NavbarProps) {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const toggleDrawer = async (open: boolean) => {
    setDrawerOpen(open);
  };
  
  
  return (
    <Box
    sx={{
      display: "flex"
      
    }}>
    <Button href="./">
      Home
    </Button>
    <Box
      sx={{
        flex: 1,
        display: { xs: "none", md: "flex" },
        justifyContent: "flex-end", 
        alignItems: "center",               
        color: "text.primary",
      }}
    >
        <Button href="./experience" color="primary">
        Experience
      </Button>
      <Button href="./contact" color="primary">
        Contact
      </Button>
      <Button href="./about" color="primary">
        About
      </Button>
      <Button color="primary" onClick={() => onToggleTheme()}>
        {isDarkMode ? <LightMode/> : <LightModeOutlined/>}
      </Button>
    </Box>
    <Box
    sx={{
      flex: 1,
      display: { xs: 'flex', md: 'none'},
      justifyContent: "flex-end"
    }}>
      <Button onClick={() => toggleDrawer(true)}>
        <GiHamburgerMenu />
      </Button>
      <Drawer
          anchor="top"
          open={drawerOpen}
          onClose={() => toggleDrawer(false)}
        >
          <Box sx={{ width: 250 }}>
            <Button href="./experience">
              Experience
            </Button>
            <Button href="./contact">
              Contact
            </Button>
            <Button href="./about">
              About
            </Button>
            <Button onClick={onToggleTheme}>
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </Button>
          </Box>
        </Drawer>

    </Box>
    </Box>
  );
}

export default Navbar;
