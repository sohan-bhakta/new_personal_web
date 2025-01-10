import { Box, Button, Typography } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Intro() {
  // this controls the scroll trigger function
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const initialTrigger = ScrollTrigger.create({
      trigger: "#heading",
      start: "top top",
      end: "285vh",
      pinSpacing: false,
      pin: true,
    });

    return () => {
      initialTrigger.kill();
    };
  }, []);

  return (
    <Box
      sx={{
        height: "150vh",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: "40%",
          width: "50%",
          height: "50%",
          backgroundImage: "url('/arizona.svg')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      />

      <Box
        id="heading"
        sx={{
          height: "70vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "center" },
            gap: "5px"
          }}
        >
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: "5px"
          }}>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "5rem", md: "7rem" },
            }}
          >
            Sohan Bhakta
          </Typography>
          
            <Typography variant="h5">Full-Stack Developer</Typography>
            
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <IoLocationOutline
                style={{
                  fontSize: "25px",
                }}
              />
              <Typography variant="h5">
                Based in Tucson, but more than happy to leave
              </Typography>

            </Box>
            <Button href="./about" variant="outlined" sx={{
              width: "150px"
            }}>
              About me
              <FaArrowRight />
            </Button>
          </Box>
          
            <Box
              sx={{
                position: "relative",
              }}
            >
              <img
                src="/portrait.JPG"
                alt="Personal Portrait"
                style={{
                  width: "250px",
                  height: "250px",
                  borderRadius: "100%",
                  objectFit: "cover",
                  border: "4px solid",
                  borderColor: "#0583F2",
                }}
              />
            </Box>
          
        </Box>
      </Box>
    </Box>
  );
}

export default Intro;
