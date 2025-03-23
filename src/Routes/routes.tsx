import { RouteObject } from "react-router-dom";

import { Layout } from "@/components/Layout";
import { CarDetailsView } from "@/pages/CarDetailsView";
import { TableView } from "@/pages/TableView/TableView";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Layout>
        <TableView />
      </Layout>
    ),
  },
  {
    path: "/car-details/:id",
    element: (
      <Layout>
        <CarDetailsView />
      </Layout>
    ),
  },
];
