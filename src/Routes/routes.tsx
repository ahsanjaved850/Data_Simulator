import { Layout } from "@/components/Layout";
import { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: "/home",
    element: <Layout></Layout>,
  },
];
