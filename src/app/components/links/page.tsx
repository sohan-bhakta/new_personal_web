"use client"

import React from 'react'
import { Box } from '@mui/material';
import Link from "next/link";
import { GitHub, Instagram, YouTube, LinkedIn, MailOutlineOutlined } from '@mui/icons-material';

function Links() {
  return (
    <Box
    sx = {{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '1rem',
        paddingBottom: "1rem"
    }}>
        <a 
  href="https://github.com/sohan-bhakta" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <GitHub sx={{
          color: "reverse.primary"
        }} />
</a>

<a 
  href="https://www.youtube.com/channel/UC_pZozL-l80JmvwP1M54LYQ" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <YouTube sx={{
          color: "reverse.primary"
        }}/>
</a>
<a
href="https://www.linkedin.com/in/sohan-bhakta"
target="_blank"
rel="noopener noreferrer">
<LinkedIn sx={{
          color: "reverse.primary"
        }}/>
</a>
<a href="https://www.instagram.com/sohan.bhakta/"
target="_blank"
rel="noopener noreferrer">
        <Instagram sx={{
          color: "reverse.primary"
        }}/>
        </a>
    </Box>
  )
}

export default Links
