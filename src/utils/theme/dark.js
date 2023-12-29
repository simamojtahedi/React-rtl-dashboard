import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
    primary: {
      main: "#519AFF",
      light: "#679EF8",
    },
    secondary: {
      main: "#A4A0F5",
    },
    success: {
      main: "#8BCC78",
    },
    warning: {
      main: "#F9CA70",
    },
    background: {
      default: "#0F1112",
      paper: "#222",
    },
    common: {
      sidebar: "#222",
    },
  },
  typography: {
    allVariants: {
      color: "#fff",
    },
    fontFamily: "iran-sans",
  },
});
