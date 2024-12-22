// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      color: "#333333", // Default color for h1
    },
    h2: {
      color: "#333333", // Default color for h2
    },
    h3: {
      color: "#333333", // Default color for h3
    },
    h5: {
      color: "#98A579",
    },
    h6: {
      color: "#ADBF9A",
      fontSize: "1.256rem",
    },

    body1: {
      color: "#171717", // Default color for body1
    },
    body2: {
      color: "#333333", // Default color for body2
    },
  },
  palette: {
    primary: {
      main: "#98a579", // Light beige
    },
    secondary: {
      main: "#ADBF9A", // Pastel blue
    },
    background: {
      default: "#f2f7fc", // Light pastel
    },
    text: {
      primary: "#333333", // Default text color for other components
      secondary: "#666666", // Secondary text color
    },
  },
});

export default theme;
