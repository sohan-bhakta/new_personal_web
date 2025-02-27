"use client";

import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { cn } from "../utils/cn";
import { FaArrowDown } from "react-icons/fa";
import React, { useEffect } from "react";
import Links from "../components/links/page";
import Intro from "../components/intro/page";
import Projects from "../components/projects/page";
import Media from "../components/exerience/page";
import GridPattern from "../cui/gridpattern";

function Home() {



  return (
    <Box sx={{
        display: "flex",
        flexDirection: "column",
    }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "90vh",
        }}
      >
        <Box
          sx={{
            flex: 1,
            height: "100%",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Intro />
        </Box>
        <Box
          sx={{
            display: {xs: "none", md:"flex"},
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "5%",
          }}
        >
          <Links />
        </Box>
        
        <Box
            sx={{
                position: "absolute",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                bottom: "0vh",
                
            }}>
                <Button
                sx={{
                    display: "flex",
                    flexDirection: "column",
                }}>
                    Projects
                    <FaArrowDown />
                </Button>
            </Box>
            
      </Box>
      <Box
      id= "content-page"
        sx={{
          bgcolor: "background.paper",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          id="project-page"
          sx={{
            bgcolor: "background.paper",
            paddingBottom: "1rem"
          }}
        >
          <Projects />
        </Box>
        
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "1rem"
        }}
      >
        <Media />

      </Box>
      
    </ Box>
  );
}

export default Home;
