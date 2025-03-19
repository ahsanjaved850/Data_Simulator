import React from "react";
import { AppBar, Container, Paper, TextField } from "@mui/material";
import nameLogo from "@/assets/nameLogo.svg";
import logo from "@/assets/logo.svg";
import stripLogo from "@/assets/stripLogo.svg";

const Layout: React.FC = () => {
  return (
    <Paper>
      <Container>
        <img src={nameLogo} alt="logoWithName"></img>
        <img src={logo} alt="Logo"></img>
      </Container>
      <AppBar>
        <TextField></TextField>
        <img src={stripLogo} alt="StripLogo" height={"65px"}></img>
      </AppBar>
    </Paper>
  );
};

export default Layout;
