import "ag-grid-community/styles/ag-theme-quartz.css";
import { ColDef, ICellRendererParams, ITooltipParams } from "ag-grid-community";
import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ActionButtons } from "@/components/ActionButtons";
import {
  GET_ALL_CARS_API,
  SEARCH_CARS_BY_BRAND_MODEL_API,
} from "@/utils/constants";
import { debounce } from "@/utils/debounce";

import {
  AG_GRID_PROPERTIES_DATA_COLUMN,
  ID_COLUMN,
  NO_DATA_COLUMN,
} from "./Table.static";

export const useTable = <T extends { _id: string }>() => {
  const [rowData, setRowData] = useState<T[]>([]);
  const [columnData, setColumnData] = useState<ColDef<T>[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(GET_ALL_CARS_API)
      .then(({ data }) => {
        setRowData(data);

        const newColumns = getColumnNames(data);
        setColumnData(newColumns as ColDef<T>[]);
      })
      .catch((error) => {
        setError(error instanceof Error ? error.message : "Failed to fetch");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const getColumnNames = (data: any[]) => {
    if (data.length) {
      const columnNames: ColDef[] = Object.keys(data[0])
        .filter((columnName) => columnName !== ID_COLUMN)
        .map((columnName) => ({
          field: columnName,
          headerName: columnName.replace(/_/g, " "),
          headerTooltip: columnName,
          tooltipValueGetter: (p: ITooltipParams) => p.value,
          ...AG_GRID_PROPERTIES_DATA_COLUMN,
        }));

      const columns = addActionColumn(columnNames);
      return columns;
    }
    return [NO_DATA_COLUMN];
  };

  const addActionColumn = (columns: ColDef[]) => {
    const actionColumn: ColDef = {
      headerName: "Action",
      field: "_id",
      cellRenderer: (params: ICellRendererParams<any>) => (
        <ActionButtons
          onDelete={() => handleDeleteRow(params.value)}
          goToDetailView={() => navigateToDetailsView(params.value)}
        />
      ),
      filter: false,
      sortable: false,
      minWidth: 120,
    };

    return [actionColumn, ...columns];
  };

  const handleDeleteRow = useCallback((id: string) => {
    setRowData((prev) => prev.filter((row) => row._id !== id));
  }, []);

  const navigateToDetailsView = (id: string) => {
    navigate(`/car-details/${id}`);
  };

  const handleChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;

    setSearchValue(searchQuery);
    debouncedSearch(searchQuery);
  };

  const handleSearch = (searchQuery: string) => {
    axios
      .get(SEARCH_CARS_BY_BRAND_MODEL_API, {
        params: {
          q: searchQuery,
        },
      })
      .then(({ data }) => {
        setRowData(data);
      })
      .catch((error) => {
        console.log(error);
        setError(error instanceof Error ? error.message : "Failed to search");
      });
  };

  const debouncedSearch = useMemo(() => debounce(handleSearch, 300), []);

  return {
    columnData,
    error,
    loading,
    rowData,
    searchValue,
    handleChangeSearchInput,
  };
};
