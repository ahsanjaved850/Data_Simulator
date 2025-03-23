import { AppBar, Container, Paper } from "@mui/material";
import React, { ReactNode } from "react";

import logo from "@/assets/logo.svg";
import nameLogo from "@/assets/nameLogo.svg";

import { useLayout } from "./Layout.logic";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { goToHomePage } = useLayout();

  return (
    <Paper>
      <AppBar>
        <img
          src={nameLogo}
          alt="Namelogo"
          onClick={goToHomePage}
          style={{ cursor: "pointer" }}
        />
        <img src={logo} alt="Logo" />
      </AppBar>

      <Container>{children}</Container>
    </Paper>
  );
};
