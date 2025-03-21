import { Delete, VisibilityRounded } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";

export const ActionButtons: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        paddingTop: 1,
      }}
    >
      <VisibilityRounded sx={{ cursor: "pointer" }} />
      <Delete sx={{ marginLeft: 1, cursor: "pointer" }} />
    </Box>
  );
};
