"use client";
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { AiOutlineMail } from "react-icons/ai";
import { HiArrowUpRight } from "react-icons/hi2";

function About() {
  const summary =
    "I am a 4th-year student from the University of Arizona. I have always been one to jump before thinking things through, and that is how I discovered coding. Along the way, I realized that computer science is much more than just programming—it is about problem-solving, adaptability, and curiosity. In the last four years, I have learned about myself, from organizing my time more efficiently to working smarter every day. If you want to learn more or need help with a project, feel free to reach out!";

  return (
    <Box
      sx={{
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          maxWidth: "1000px",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            width: { xs: "100%", md: "300px" },
          }}
        >
          <Typography
            variant="h2"
            fontSize={{ xs: "2rem", md: "3rem" }}
            fontWeight="bold"
          >
            About Me.
          </Typography>
          <Box sx={{ position: "relative", marginTop: "10px" }}>
            <img
              src="/portrait.JPG"
              alt="Personal Portrait"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "100%",
                objectFit: "cover",
                border: "4px solid #555555",
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            width: { xs: "100%", md: "60%" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <a
              href="https://my-personal-website.nyc3.cdn.digitaloceanspaces.com/Sohan%20Bhakta%20resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              Resume
            </a>
            <HiArrowUpRight size={20} />
          </Box>
          
          <Typography fontSize={{ xs: "0.9rem", md: "1rem" }}>
            {summary}
          </Typography>
          
          <Typography fontSize={{ xs: "0.9rem", md: "1rem" }} fontWeight="bold">
  Personal: sohanrbhakta@outlook.com
</Typography>

          
        </Box>
      </Box>
    </Box>
  );
}

export default About;
