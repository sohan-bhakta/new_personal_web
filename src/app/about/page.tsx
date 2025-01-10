"use client";
import React, { useState } from "react";
import { Box, Button, Typography, TextField, MenuItem } from "@mui/material";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { AiOutlineMail } from "react-icons/ai";

function About() {
  const summary = "I am a 4th year student from the University of Arizona. I have always been on to jump before thinking things through and that is how I discovered coding. Along the way, I began to realize that computer science was much more than programming, but instead a much for general skill of problem solving, agility to new tools, and curiorsity. In the last four years, I have learned about myself from organizing my time more efficiently, giving my energy more sparingly, and learning to work harder but smarter everyday. That being said if you want to learn more about me or need help with a project feel free to reach out to me!"

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "1000px",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "300px",
          }}
        >
          <Typography variant="h2">About Me.</Typography>
          <Box
      sx={{
        position: 'relative',
      }}
    >
      <img
        src="/portrait.JPG"
        alt="Personal Portrait"
        style={{
          width: '300px',
          height: '300px',
          borderRadius: "100%",
          objectFit: 'cover',
          border: "4px solid",
          borderColor: "#0583F2"
        }}
      />
    </Box>
          
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px"
          }}
        >
          <Typography>
            {summary}
          </Typography>
          <Button 
          href="./contact"
          variant="outlined"
          sx={{
            display: 'flex',
            position: 'right'
          }}>Contact Me
          <AiOutlineMail style={{
            fontSize: "15px",
            marginBottom: "3px",
            marginLeft: "5px"
          }}/>
          </Button>
          <Box sx={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            justifyContent: "space-around"
          }}>
            <Box
      sx={{
        position: 'relative',
        
      }}
    >
      <img
        src="/amazon.svg"
        alt="Personal Portrait"
        style={{
          width: '100px',
          height: '100px',
          borderRadius: "100%",
          objectFit: 'cover',
          border: "3px solid",
          backgroundColor: "white",
          borderColor: "#0583F2"
        }}
      />
          </Box>
          <Box
      sx={{
        position: 'relative',
      }}
    >
      <img
        src="/avnet.svg"
        alt="Personal Portrait"
        style={{
          width: '100px',
          height: '100px',
          borderRadius: "100%",
          objectFit: 'cover',
          border: "3px solid",
           backgroundColor: "white",
           borderColor: "#0583F2"
        }}
      />
          </Box>
          <Box
      sx={{
        position: 'relative',
      }}
    >
      <img
        src="/komatsu.svg"
        alt="Personal Portrait"
        style={{
          width: '100px',
          height: '100px',
          borderRadius: "100%",
          objectFit: 'cover',
          border: "3px solid",
           backgroundColor: "white",
           borderColor: "#0583F2"
        }}
      />
          </Box>
          <Box
      sx={{
        position: 'relative',
      }}
    >
      <img
        src="/fullUAlogo.png"
        alt="Personal Portrait"
        style={{
          width: '100px',
          height: '100px',
          borderRadius: "100%",
          objectFit: 'cover',
          border: "3px solid",
           backgroundColor: "white",
           borderColor: "#0583F2"
        }}
      />
          </Box>
        </Box>
        
      </Box>
    </Box>
    </Box>
  );
}

export default About;
