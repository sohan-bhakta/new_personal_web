"use client";

import React, { useState, useEffect } from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import Navbar from "./components/navbar/page";
import Footer from "./components/footer/page";
import { lightTheme } from "./theme";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {


  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Box
            sx={{
              height: "100vh",
              bgcolor: "background.default",
              color: "text.primary",
            }}
          >
            <Box
              sx={{
                height: "10vh",
              }}
            >
              <Navbar />
            </Box>
            <Box sx={{}}>{children}</Box>
            <Footer />
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
