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
          "@media (min-width: 1200px)": {
            maxWidth: "100%", // Override MUI default maxWidth
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#F0F0F0", // Light gray navbar
          boxShadow: "none",
          padding: "6px 60px",
          position: "relative",
          height: "65px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "470px",
          backgroundColor: "#FFF",
          borderRadius: "36px",
          borderColor: "#F0F0F0",
          "& .MuiOutlinedInput-root": {
            borderRadius: "36px",
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#E0E0E0", // Light gray table header
          fontWeight: 700,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "8px",
        },
      },
    },
  },
});
