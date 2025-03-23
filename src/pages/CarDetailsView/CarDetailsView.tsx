import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, IconButton, List, ListItem, Typography } from "@mui/material";
import React from "react";

import { LoadingPage } from "@/components/LoadingState";

import { useCarDetailsView } from "./CarDetailsView.logic";
import { DetailsGrid, StyledPaper } from "./CarDetailsView.style";

export const CarDetailsView: React.FC = () => {
  const { carData, goBack } = useCarDetailsView();

  if (carData === null) return <LoadingPage />;

  return (
    <Box>
      <IconButton onClick={goBack}>
        <ArrowBackIcon />
      </IconButton>

      <StyledPaper>
        <Typography variant="h1">{carData?.Brand}</Typography>

        <DetailsGrid>
          <List>
            <ListItem>
              <Typography variant="h4">Model:</Typography>
              <Typography variant="h2" fontWeight="bold">
                {carData?.Model}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h4">Accel Sec:</Typography>
              <Typography variant="h2" fontWeight="bold">
                {carData?.AccelSec}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h4">Fast Charge:</Typography>
              <Typography variant="h2" fontWeight="bold">
                {carData?.FastCharge_KmH}kmH
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h4">Body Style:</Typography>
              <Typography variant="h2" fontWeight="bold">
                {carData?.BodyStyle}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h4">Power Train:</Typography>
              <Typography variant="h2" fontWeight="bold">
                {carData?.PowerTrain}
              </Typography>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <Typography variant="h4">Range:</Typography>
              <Typography variant="h2" fontWeight="bold">
                {carData?.Range_Km}km
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h4">Top Speed:</Typography>
              <Typography variant="h2" fontWeight="bold">
                {carData?.TopSpeed_KmH}km/h
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h4">Fast Charge:</Typography>
              <Typography variant="h2" fontWeight="bold">
                {carData?.RapidCharge}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h4">Segment:</Typography>
              <Typography variant="h2" fontWeight="bold">
                {carData?.Segment}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h4">Price:</Typography>
              <Typography variant="h2" fontWeight="bold">
                {carData?.PriceEuro}€
              </Typography>
            </ListItem>
          </List>
        </DetailsGrid>
      </StyledPaper>
    </Box>
  );
};
