// Buttons.tsx
import React from "react";
import { DeleteOutlineOutlined, VisibilityOutlined } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface ActionButtonsProps {
  id: string;
  onDelete: (id: string) => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  id,
  onDelete,
}) => {
  const navigate = useNavigate();
  const handleView = () => {
    navigate(`/cardetails/${id}`);
  };
  const handleDelete = () => onDelete(id);

  return (
    <Box sx={{ display: "flex", alignItems: "center", paddingTop: 1 }}>
      <VisibilityOutlined sx={{ cursor: "pointer" }} onClick={handleView} />
      <DeleteOutlineOutlined
        sx={{ marginLeft: 1.5, cursor: "pointer" }}
        onClick={handleDelete}
      />
    </Box>
  );
};

export const ReturnButton: React.FC = () => {
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate("/");
  };
  return (
    <Button
      onClick={handleReturn}
      sx={{
        color: "darkgrey",
        "&:hover": {
          color: "text.primary",
        },
      }}
    >
      Return
    </Button>
  );
};
