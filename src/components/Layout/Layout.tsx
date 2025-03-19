import React from "react";
import { AppBar, Container, Paper, TextField } from "@mui/material";
import nameLogo from "@/assets/nameLogo.svg";
import logo from "@/assets/logo.svg";
import stripLogo from "@/assets/image 5.svg";

export const Layout: React.FC = () => {
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
    </Paper>
  );
};
