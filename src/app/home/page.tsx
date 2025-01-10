"use client";

import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { FaArrowDown } from "react-icons/fa";
import CopyrightIcon from "@mui/icons-material/Copyright";
import React, { useEffect } from "react";
import Links from "../components/links/page";
import Intro from "../components/intro/page";
import Projects from "../components/projects/page";
import Media from "../components/media/page";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Home() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));

    useEffect(() => {
      if (isXs) return;
      
        gsap.registerPlugin(ScrollTrigger);
        const projectPageTrigger = ScrollTrigger.create({
          trigger: "#project-page",
          start: "top top",
          end: "200vh",
          pinSpacing: false,
          pin: true,
        });
        return () => {
          projectPageTrigger.kill();
        };
      }, []);
    
      

  return (
    <Box sx={{
        display: "flex",
        flexDirection: "column"
    }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "95vh",
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
            display: "flex",
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
                    Scroll Down
                    <FaArrowDown />
                </Button>
            </Box>
      </Box>
      <Box
      id= "content-page"
        sx={{
          height: {xs: "150vh", md: "100vh"},
          bgcolor: "background.paper",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" sx={{ padding: "1rem" }}>
          Latest Projects
        </Typography>
        <Box
          id="project-page"
          sx={{
            bgcolor: "background.paper",
          }}
        >
          <Projects />
        </Box>
        <Box
          sx={{
            display: {xs: "none", md:"flex"},
            flexDirection: "row",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <RiDoubleQuotesL />
              <Box component="div" sx={{
                whiteSpace: 'normal',
                width: "300px"
              }}>
              <Typography>
                One thing I wish I had known earlier
                is the importance of having a mentor  
                to guide me and follow in their footsteps.
                </Typography>
                </Box>
              <RiDoubleQuotesR />
            </Box>
          </Box>
          <img
            src="/working.svg"
            alt="Descriptive alt text"
            style={{
              width: "200px",
              height: "auto",
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          height: "50vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "1rem"
        }}
      >
        <Typography variant="h5">Books on my Rotation</Typography>
        <Media />

      </Box>
      
    </ Box>
  );
}

export default Home;
