import { Container, Paper, styled } from "@mui/material";

export const StyledPaper = styled(Paper)(() => ({
  width: 900,
  maxWidth: 900,
  margin: "15px 46px",
  padding: "32px 24px",
}));

export const DetailsGrid = styled(Container)(() => ({
  display: "flex",
  flex: 1,
  gap: 40,
  padding: "0 !important",
  marginTop: "24px",
  marginLeft: 0,
  position: "relative",

  "& .MuiList-root:first-of-type": {
    paddingRight: 40,
    borderRight: "1px solid",
  },

  "& .MuiList-root": {
    flex: 1,
    padding: 0,
  },

  "& .MuiListItem-root": {
    width: 450,
    display: "flex",
    justifyContent: "space-between",
    padding: "8px 0px",
    margin: "4px 0",
  },
}));
