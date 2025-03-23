import { ColDef } from "ag-grid-community";

export interface TableProps<T extends { _id: string }> {
  columns?: ColDef<T>[];
}

export const AG_GRID_PROPERTIES_DATA_COLUMN = {
  filter: true,
  sortable: true,
  resizable: true,
  flex: 1,
};

export const AG_GRID_PROPERTIES_NON_DATA_COLUMN = {
  filter: false,
  sortable: false,
};

export const NO_DATA_COLUMN = {
  field: "noData",
  headerName: "Information",
  valueGetter: () => "No data available",
  ...AG_GRID_PROPERTIES_NON_DATA_COLUMN,
};

export const ID_COLUMN = "_id";
