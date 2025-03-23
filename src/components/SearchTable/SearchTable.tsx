import React from "react";
import { useParams } from "react-router-dom";
import { Table } from "../Table";

export const SearchTable: React.FC = () => {
  const { brandname } = useParams();

  return <Table name={brandname}></Table>;
};
