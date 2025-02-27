"use client"
import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import CopyrightIcon from "@mui/icons-material/Copyright";

function Footer() {
  return (
    <Box
      id="footer-page"
      sx={{
        height: "15vh",
        backgroundColor: "background.paper",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      {/* Social Links */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: "0.5rem", sm: "2rem" },
          textAlign: "center",
        }}
      >
        {[
          { name: "Github", url: "https://github.com/sohan-bhakta" },
          { name: "Youtube", url: "https://www.youtube.com/channel/UC_pZozL-l80JmvwP1M54LYQ" },
          { name: "LinkedIn", url: "https://www.linkedin.com/in/sohan-bhakta" },
          { name: "Instagram", url: "https://www.instagram.com/sohan.bhakta/" },
        ].map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Typography
              sx={{
                fontWeight: "light",
                color: "text.secondary",
                fontSize: { xs: "0.8rem", md: "1rem" }, // Adjust font size for responsiveness
              }}
            >
              {link.name}
            </Typography>
          </a>
        ))}
      </Box>

      {/* Copyright Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          marginTop: "1rem",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "0.6rem", md: "0.8rem" }, // Adjust font size
          }}
        >
          <CopyrightIcon
            sx={{
              fontSize: { xs: "0.6rem", md: "0.8rem" }, // Icon scales with text
              position: "relative",
              top: "2px",
              right: "2px",
            }}
          />
          2024 Sohan Bhakta · Tucson, AZ · sohanrbhakta@outlook.com
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
