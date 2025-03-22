import { CarDetails } from "@/components/CarDetails";
import { Layout } from "@/components/Layout";
import { Table } from "@/components/Table";
import { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Layout>
        <Table />
      </Layout>
    ),
  },
  {
    path: "/cardetails/:carid",
    element: (
      <Layout>
        <CarDetails></CarDetails>
      </Layout>
    ),
  },
];
