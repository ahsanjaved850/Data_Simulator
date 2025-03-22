import { CarDetails_API } from "@/utils/constants";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export const CarDetails: React.FC = () => {
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(CarDetails_API + `${id}`);
        if (!response.ok) throw new Error("Car not found");
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching car:", error);
      }
    };
    fetchData();
  }, [id]);

  return <div>{id}</div>;
};
