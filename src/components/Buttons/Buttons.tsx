// Buttons.tsx
import React from "react";
import { DeleteOutlineOutlined, VisibilityOutlined } from "@mui/icons-material";
import { Box } from "@mui/material";

interface ActionButtonsProps {
  id: string;
  onDelete: (id: string) => void;
  onView: (id: string) => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  id,
  onDelete,
  onView,
}) => {
  const handleView = () => onView(id);
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
  return <div></div>;
};
