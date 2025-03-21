import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { theme } from "./utils/theme.ts";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
