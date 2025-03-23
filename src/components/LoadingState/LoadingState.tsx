import { CircularProgress } from "@mui/material";

import { LoadingPageContainer } from "./LoadingState.style";

export const LoadingPage = () => {
  return (
    <LoadingPageContainer>
      <CircularProgress size={50} />
    </LoadingPageContainer>
  );
};
