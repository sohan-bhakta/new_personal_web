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
      }}
    >
      {/* First Row */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <a
          href="https://github.com/sohan-bhakta"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
          }}
        >
          <Typography sx={{ fontWeight: "light", color: "text.secondary" }}>
            Github
          </Typography>
        </a>
        <a
          href="https://www.youtube.com/channel/UC_pZozL-l80JmvwP1M54LYQ"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
          }}
        >
          <Typography sx={{ fontWeight: "light", color: "text.secondary" }}>
            Youtube
          </Typography>
        </a>
        <a
          href="https://www.linkedin.com/in/sohan-bhakta"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
          }}
        >
          <Typography sx={{ fontWeight: "light", color: "text.secondary" }}>
            LinkedIn
          </Typography>
        </a>
        <a
          href="https://www.instagram.com/sohan.bhakta/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
          }}
        >
          <Typography sx={{ fontWeight: "light", color: "text.secondary" }}>
            Instagram
          </Typography>
        </a>
        <Link
          href="/contact"
          passHref
          style={{
            textDecoration: "none",
          }}
        >
          <Typography
            sx={{
              fontWeight: "light",
              color: "text.secondary",
            }}
          >
            Contact me
          </Typography>
        </Link>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "0.8rem", marginTop: "1rem" }}>
          <CopyrightIcon
            sx={{
              fontSize: "small",
              position: "relative",
              top: "2px",
              right: "2px",
            }}
          />
          2024 Sohan Bhakta · Tucson, AZ · Contact
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
