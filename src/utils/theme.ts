import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#005BAC", // BMW Blue
    },
    secondary: {
      main: "#CCCCCC", // Light Gray
    },
    background: {
      default: "#F8F9FA", // Light Background
      paper: "#FFFFFF",
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
    },
  },
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    h1: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "1.2rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "space-between",
          padding: "24px",
          width: "95.5%",
          height: "100%",
          "@media (min-width: 1200px)": {
            maxWidth: "100%",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#F0F0F0", // Light gray navbar
          boxShadow: "none",
          padding: "10px 85px 10px 60px",
          position: "relative",
          height: "65px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "470px",
          height: "40px",
          margin: "7px 0px",
          backgroundColor: "#FFF",
          borderRadius: "36px",
          borderColor: "#F0F0F0",
          "& .MuiOutlinedInput-root": {
            borderRadius: "36px",
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          // Global style for all elements including Box
          ".MuiBox-root": {
            backgroundColor: "white",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "8px",
          padding: "0px",
        },
      },
    },
  },
});
