import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import {
  ClientSideRowModelModule,
  ColDef,
  DateFilterModule,
  ModuleRegistry,
  NumberFilterModule,
  TextFilterModule,
  ValidationModule,
  CustomFilterModule,
  ICellRendererParams,
} from "ag-grid-community";
import { useCallback, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { ActionButtons } from "@/components/Buttons";
import { Cars_API } from "@/utils/constants";
import { useNavigate } from "react-router-dom";
import { CarDetails } from "../CarDetails";

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  ValidationModule,
  TextFilterModule,
  NumberFilterModule,
  DateFilterModule,
  CustomFilterModule,
]);

interface TableProps<T extends { _id: string }> {
  columns?: ColDef<T>[];
}

export const Table = <T extends { _id: string }>({
  columns,
}: TableProps<T>) => {
  const [rowData, setRowData] = useState<T[]>([]);
  const [generatedColumns, setGeneratedColumns] = useState<ColDef<T>[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleDelete = useCallback((id: string) => {
    setRowData((prev) => prev.filter((row) => row._id !== id));
  }, []);

  const handleView = useCallback(
    (id: string) => {
      <CarDetails carId={id} />;
      navigate(`/cardetails/${id}`);
    },
    [navigate]
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(Cars_API);
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();

        setRowData(data);

        const newColumns =
          data.length > 0
            ? Object.keys(data[0])
                .filter((key) => key !== "_id")
                .map((key) => ({
                  field: key,
                  headerName: key.replace(/_/g, " "),
                  filter: true,
                  sortable: true,
                  resizable: true,
                  flex: 1,
                }))
            : [
                {
                  // Fallback column when no data exists
                  field: "noData",
                  headerName: "Information",
                  valueGetter: () => "No data available",
                  filter: false,
                  sortable: false,
                },
              ];
        // Add action column only if there's data
        if (data.length > 0) {
          newColumns.unshift({
            headerName: "Action",
            field: "_id",
            cellRenderer: (params: ICellRendererParams<T>) => (
              <ActionButtons
                id={params.value}
                onDelete={handleDelete}
                onView={handleView}
              />
            ),
            filter: false,
            sortable: false,
            minWidth: 120,
          });
        }
        setGeneratedColumns(newColumns as ColDef<T>[]);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [handleDelete, handleView]);

  if (loading) return <div>Loading data...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Box
      style={{
        height: 580,
        padding: 24,
        width: "93.5%",
        margin: "0px 42px",
        marginTop: 0,
      }}
    >
      <AgGridReact<T>
        rowData={rowData}
        columnDefs={columns || generatedColumns}
        getRowId={(params) => params.data._id}
        modules={[ClientSideRowModelModule, ValidationModule]}
        defaultColDef={{
          filter: true,
          sortable: true,
          resizable: true,
          flex: 1,
          minWidth: 135,
        }}
        suppressColumnVirtualisation
      />
    </Box>
  );
};
