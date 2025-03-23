import { CarDetails_API } from "@/utils/constants";
import { Typography, List, ListItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DetailsGrid, StyledPaper } from "./CarDetails.style";
import { LoadingPage } from "../LoadingState";

interface Car {
  _id: string;
  Brand: string;
  Model: string;
  AccelSec: string;
  TopSpeed_KmH: string;
  Range_Km: string;
  Efficiency_WhKm: string;
  FastCharge_KmH: string;
  RapidCharge: string;
  PowerTrain: string;
  PlugType: string;
  BodyStyle: string;
  Segment: string;
  Seats: string;
  PriceEuro: string;
  Date: string;
}

export const CarDetails: React.FC = () => {
  const { id } = useParams();
  const [carData, setCarData] = useState<Car | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(CarDetails_API + `${id}`);
        if (!response.ok) throw new Error("Car not found");
        const data: Car = await response.json();
        setCarData(data);
      } catch (error) {
        console.error("Error fetching car:", error);
      }
    };
    fetchData();
  }, []);
  if (carData === null) return <LoadingPage></LoadingPage>;
  return (
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
  );
};
