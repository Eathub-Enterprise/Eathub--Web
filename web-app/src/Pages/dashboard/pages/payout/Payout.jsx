import React from "react";
import "./payout.css";
import Box from "@mui/material/Box";
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";

import { styled } from "@mui/material/styles";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

const Payout = () => {
  // Pagination for the Data Table
  function CustomPagination() {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);

    return (
      <Pagination
        color="primary"
        variant="outlined"
        shape="rounded"
        page={page + 1}
        count={pageCount}
        // @ts-expect-error
        renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
        onChange={(event, value) => apiRef.current.setPage(value - 1)}
      />
    );
  }

  const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
    border: 20,
    borderColor: "#000",
    color: theme.palette.mode === "light" ? "#000" : "#000)",
    fontFamily: ["montserrat"].join(","),
    WebkitFontSmoothing: "auto",
    letterSpacing: "normal",
    "& .MuiDataGrid-main": {
      backgroundColor: theme.palette.mode === "light" ? "#fff" : "#fff",
      border: `1px solid #D9D9D9`,
      borderRadius: 10,
    },
    "& .MuiDataGrid-columnsContainer": {
      backgroundColor: theme.palette.mode === "light" ? "#fff" : "#fff",
    },
    "& .MuiDataGrid-iconSeparator": {
      display: "none",
    },
    "& .MuiDataGrid-columnHeaders": {
      borderBottom: `1px solid #D9D9D9`,
    },
    "& .MuiDataGrid-columnHeader, .MuiDataGrid-cell": {
      borderBottom: `4px solid var(--primary)`,
      
    },
    "& .MuiDataGrid-columnHeader": {
        backgroundImage: "url(../../../../Assets/pngs/Vector.png)",
        color: "#000",
        backgroundPosition: 20,
        backgroundSize: 20,
        backgroundRepeat: "no-repeat",
    },
    "& .MuiDataGrid-columnHeaderTitle": {
      fontWeight: 700,
      paddingLeft: 10,
      paddingRight: 10,
    },
    "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
      borderBottom: `1px solid ${
        theme.palette.mode === "light" ? "#000" : "#000"
      }`,
    },
    "& .MuiDataGrid-cell": {
      color: theme.palette.mode === "light" ? "#000" : "#000",
    },
    "& .MuiPaginationItem-root": {
      border: "none",
      color: "#000",
    },
    "& .MuiPagination-ul": {
      width: 100,
      position: "absolute",
      top: 12,
      zIndex: 99,
      right: 15,
    },
    "& .MuiDataGrid-footerContainer": {
      width: 0,
      height: 0,
      padding: 0,
    },
  }));

  const columns = [
    {
      field: "messages",
      headerName: "PRIMARY",
      width: "160px",
      headerAlign: "baseline",
    },
  ];
  const rows = [];
  return (
    <div className="payout-container">
      <div className="payout-navbar">
        <input
          type="text"
          placeholder="Search Payouts"
          className="payout-search"
        />
      </div>
      <div className="payout-table">
        <Box sx={{ height: "70vh", width: "100%" }}>
          <StyledDataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[10]}
            experimentalFeatures={{ newEditingApi: false }}
            checkboxSelectionVisibleOnly
            components={{
              Pagination: CustomPagination,
            }}
          />
        </Box>
      </div>
    </div>
  );
};

export default Payout;
