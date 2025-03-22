import React from "react";

interface CarDetailsProps {
  carId: string;
}

export const CarDetails: React.FC<CarDetailsProps> = ({ carId }) => {
  return <div>{carId}</div>;
};
