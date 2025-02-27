import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import { RiGalleryView2 } from "react-icons/ri";

function Navbar() {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        marginRight: "10px",
        marginLeft: "10px",
      }}
    >
      <Button href="./">Sohan Bhakta</Button>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          color: "text.primary",
        }}
      >
        
          <Button href="./project" color="primary">
            Projects
            <RiGalleryView2 style={{
            marginBottom: "1px", marginLeft: '2px'}} />
          </Button>
          

        
          <Button href="./about" color="primary">
            About
          </Button>

      </Box>
    </Box>
  );
}

export default Navbar;
