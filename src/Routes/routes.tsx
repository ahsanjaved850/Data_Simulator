import { CarDetails } from "@/components/CarDetails";
import { Layout } from "@/components/Layout";
import { SearchTable } from "@/components/SearchTable";
import { Table } from "@/components/Table";
import { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Layout>
        <Table name={undefined} />
      </Layout>
    ),
  },
  {
    path: "/cardetails/:id",
    element: (
      <Layout>
        <CarDetails />
      </Layout>
    ),
  },
  {
    path: "/search/:brandname",
    element: (
      <Layout>
        <SearchTable />
      </Layout>
    ),
  },
];
