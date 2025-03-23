import { CircularProgress } from "@mui/material";
import React from "react";
import { LoadingPageContainer } from "./LoadingState.style";

export const LoadingPage: React.FC = () => {
  return (
    <LoadingPageContainer>
      <CircularProgress size={50} />
    </LoadingPageContainer>
  );
};
