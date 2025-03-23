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
      fontSize: "1.3rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "1.2rem",
      fontWeight: 500,
      paddingLeft: "4px",
    },
    h4: {
      fontSize: "0.9rem",
      fontWeight: 400,
    },
    body1: {
      fontSize: "0.8rem",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
        },
      },
    },
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
    MuiFormControl: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "row",
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          marginLeft: "5px",
          fontSize: "16px",
          width: 400,
          height: 50,
          borderRadius: "36px",
          padding: "16px",
          backgroundColor: "white",
          border: "1px solid #ccc",
          "&:hover": {
            borderColor: "#999",
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
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
          borderRadius: "36px",
          padding: "0px",
          background: "white",
          borderColor: "#F0F0F0",
          marginLeft: "5px",
          transition: "border 0.2s ease-in-out",
          "&:hover": {
            border: "1px solid black",
          },
        },
      },
    },
  },
});
