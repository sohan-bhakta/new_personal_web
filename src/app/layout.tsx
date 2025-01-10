"use client";

import React, { useState, useEffect } from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import Navbar from "./components/navbar/page";
import Footer from "./components/footer/page";
import { lightTheme, darkTheme } from "./theme";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
 

  useEffect(() => {
    const savedTheme = localStorage.getItem("isDarkMode");
    if (savedTheme !== null) {
      setIsDarkMode(JSON.parse(savedTheme));
    }
   
  }, []);

  
  

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("isDarkMode", JSON.stringify(newMode));
      return newMode;
    });
  };

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
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
                height: "5vh",
              }}
            >
              <Navbar onToggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            </Box>
            <Box sx={{}}>{children}</Box>
            <Footer />
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
