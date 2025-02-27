import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { CiMapPin } from "react-icons/ci";
import Typewriter from "../../cui/typewritter";
function Intro() {
  return (
    <Box
      sx={{
        height: "150vh",
        position: "relative",
      }}
    >
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
            gap: "5px",
            marginLeft: "10px"
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "5rem", md: "7rem" },
              }}
            >
              Sohan Bhakta
            </Typography>

            <Box sx={{ fontSize: "3rem" }}>
              <Typewriter
                text={[
                  "Full-Stack Dev",
                  "Data Engineer",
                  "Data Analytics",
                ]}
                speed={70}
                waitTime={2500}
                deleteSpeed={40}
                cursorChar={"_"}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <CiMapPin
                style={{
                  fontSize: "25px",
                }}
              />
              <Typography variant="h5">Based in Tucson, Arizona</Typography>
            </Box>
            <Button
              href="./about"
              variant="outlined"
              sx={{
             
                width: "150px",
                marginTop: "1.5rem",
                marginBottom: "1.5rem"
              }}
            >
              About me
              <FaArrowRight />
            </Button>
            
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Intro;
