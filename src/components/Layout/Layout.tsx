import React, { ReactNode, useState } from "react";
import {
  AppBar,
  Button,
  Container,
  FormControl,
  Input,
  Paper,
} from "@mui/material";
import nameLogo from "@/assets/nameLogo.svg";
import logo from "@/assets/logo.svg";
import stripLogo from "@/assets/image 5.svg";
import { useNavigate, useParams } from "react-router-dom";
import { ReturnButton } from "../Buttons/Buttons";
import { SearchOutlined } from "@mui/icons-material";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<string>("");

  const handleNavigate = () => {
    navigate("/");
  };

  const handleSearch = () => {
    if (inputValue.trim()) {
      navigate(`/search/${inputValue.trim()}`);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <Paper>
      <Container>
        <img
          src={nameLogo}
          alt="Namelogo"
          onClick={handleNavigate}
          style={{ cursor: "pointer" }}
        />
        <img src={logo} alt="Logo" />
      </Container>
      <AppBar>
        {id ? (
          <ReturnButton />
        ) : (
          <FormControl component="form" onSubmit={handleFormSubmit}>
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Search by Brand Name"
              type="text"
              disableUnderline={true}
            />
            <Button
              type="submit"
              disabled={!inputValue.trim()}
              sx={{
                backgroundColor: "#F0F0F0",
                color: "black",
                size: "45px",
                "&:disabled": {
                  opacity: 0.7,
                  cursor: "not-allowed",
                },
              }}
            >
              <SearchOutlined />
            </Button>
          </FormControl>
        )}
        <img src={stripLogo} alt="StripLogo" />
      </AppBar>
      {children}
    </Paper>
  );
};
