import React, { ReactNode } from "react";
import { AppBar, Container, Paper, TextField } from "@mui/material";
import nameLogo from "@/assets/nameLogo.svg";
import logo from "@/assets/logo.svg";
import stripLogo from "@/assets/image 5.svg";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Paper>
      <Container>
        <img src={nameLogo} alt="logoWithName"></img>
        <img src={logo} alt="Logo"></img>
      </Container>
      <AppBar>
        <TextField label="Search" size="small" variant="outlined"></TextField>
        <img src={stripLogo} alt="StripLogo"></img>
      </AppBar>
      {children}
    </Paper>
  );
};
