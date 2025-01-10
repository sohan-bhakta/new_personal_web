import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0583F2", // Your primary color
    },
    secondary: {
      main: "#0597F2", // Your secondary color
    },
    background: {
      default: "#f5f5f5", // Default background color
      paper: "#ffffff", // Paper background color
    },
    border: {
      main: "#e6e6e6"
    },
    text: {
      primary: "#333333", // Text color
      secondary: "#555555",
    },
    reverse: {
      primary: "#121212"
    }
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0583F2",
    },
    secondary: {
      main: "#0597F2",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    border: {
      main: "#4d4d4d"
    },
    text: {
      primary: "#ffffff",
      secondary: "#bbbbbb",
    },
    reverse: {
      primary: "#f5f5f5"
    }
  },
});

export { lightTheme, darkTheme };
