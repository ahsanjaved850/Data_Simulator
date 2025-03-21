import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import {
  ClientSideRowModelModule,
  ColDef,
  ModuleRegistry,
  ValidationModule,
} from "ag-grid-community";
import React, { useState } from "react";
import { Box } from "@mui/material";
import { ActionButtons } from "@/components/Buttons";

ModuleRegistry.registerModules([ClientSideRowModelModule, ValidationModule]);

interface Car {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}

export const Table: React.FC = () => {
  const [rowData] = useState<Car[]>([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);
  const [colDefs] = useState<ColDef<Car>[]>([
    { field: "make" },
    { field: "model" },
    { field: "price", valueFormatter: (p) => "€" + p.value.toLocaleString() },
    { field: "electric" },
    { headerName: "Action", cellRenderer: ActionButtons },
  ]);

  return (
    <Box
      style={{
        height: 500,
        padding: 24,
        width: "93.5%",
        margin: 40,
        marginTop: 0,
      }}
    >
      <AgGridReact<Car>
        rowData={rowData}
        columnDefs={colDefs}
        modules={[ClientSideRowModelModule, ValidationModule]}
      />
    </Box>
  );
};
