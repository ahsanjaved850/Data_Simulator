import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { GET_CAR_BY_ID_API } from "@/utils/constants";

import { Car } from "./CarDetailsView.static";

export const useCarDetailsView = () => {
  const [carData, setCarData] = useState<Car | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(GET_CAR_BY_ID_API + id)
      .then(({ data }) => {
        setCarData(data);
      })
      .catch((error) => {
        console.error("Error fetching car:", error);
      });
  }, []);

  const goBack = () => navigate("/");

  return {
    carData,
    goBack,
  };
};
