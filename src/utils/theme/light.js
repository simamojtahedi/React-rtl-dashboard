import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
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
      default: "#f5f6fa",
      paper: "#fff",
    },
    common: {
      sidebar:
        "linear-gradient(180deg, rgba(88,103,221,1) 0%, rgba(81,154,255,1) 100%)",
    },
  },
  typography: {
    allVariants: {
      color: "#000",
    },
    fontFamily: "iran-sans",
  },
});
