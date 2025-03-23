import {
  ClientSideRowModelModule,
  CustomFilterModule,
  DateFilterModule,
  ModuleRegistry,
  NumberFilterModule,
  TextFilterModule,
  TooltipModule,
  ValidationModule,
} from "ag-grid-community";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";

import { LoadingPage } from "@/components/LoadingState";
import { SearchBar } from "@/components/SearchBar";

import { useTable } from "./Table.logic";
import { TableProps } from "./Table.static";
import { Container } from "./TableView.style";

ModuleRegistry.registerModules([
  TooltipModule,
  ClientSideRowModelModule,
  ValidationModule,
  TextFilterModule,
  NumberFilterModule,
  DateFilterModule,
  CustomFilterModule,
]);

export const TableView = <T extends { _id: string }>({
  columns,
}: TableProps<T>) => {
  const {
    columnData,
    error,
    searchValue,
    loading,
    rowData,
    handleChangeSearchInput,
  } = useTable<T>();

  if (loading) return <LoadingPage />;
  if (error) return <div>Error: {error}</div>;

  return (
    <Container>
      <SearchBar value={searchValue} onChange={handleChangeSearchInput} />

      <AgGridReact<T>
        rowData={rowData}
        columnDefs={columns || columnData}
        getRowId={(params) => params.data._id}
        modules={[ClientSideRowModelModule, ValidationModule]}
        defaultColDef={{
          filter: true,
          sortable: true,
          resizable: true,
          flex: 1,
          minWidth: 135,
        }}
        tooltipShowDelay={1000}
        tooltipShowMode="whenTruncated"
        suppressColumnVirtualisation
      />
    </Container>
  );
};
