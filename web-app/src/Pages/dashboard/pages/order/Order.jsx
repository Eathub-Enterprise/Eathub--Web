import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
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
import "./order.css";

const Order = () => {
  // API values for Table
  // const [tableData, setTableData] = useState([]);

  // formatted Date
  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const prevdate = new Date();
  prevdate.setMonth(date.getMonth() - 3);
  const prevformattedDate = prevdate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

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
      borderRadius:10,
      backgroundColor: theme.palette.mode === "light" ? "#fff" : "#fff",
      // border: `.1px solid ${
      //   theme.palette.mode === 'light' ? '#000' : '#000'
      // }`,
      boxShadow: `2px 4px 10px 1px rgba(0, 0, 0, 0.5)`,
    },
    "& .MuiDataGrid-columnsContainer": {
      backgroundColor: theme.palette.mode === "light" ? "#fff" : "#fff",
    },
    "& .MuiDataGrid-iconSeparator": {
      display: "none",
    },
    "& .MuiDataGrid-columnHeaders":{
      borderBottom: `.1px solid rgba(0, 0, 0, 0.5)`,
    },
    "& .MuiDataGrid-columnHeader, .MuiDataGrid-cell": {
      borderLeft: `.1px solid rgba(0, 0, 0, 0.5)`
    },
    "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
      borderBottom: `2px solid ${
        theme.palette.mode === "light" ? "#000" : "#000"
      }`,
    },
    "& .MuiDataGrid-cell": {
      color: theme.palette.mode === "light" ? "#000" : "#000",
    },
    "& .MuiPaginationItem-root": {
      borderRadius: 10,
    },
  }));

  const columns = [
    {
      field: "id",
      headerName: "#",
      width: "20",
      headerAlign: "center",
    },
    {
      field: "Date",
      headerName: "Date",
      editable: false,
      headerAlign: "center",
      width: "120",
    },
    {
      field: "Products",
      headerName: "Products",
      editable: false,
      headerAlign: "center",
      width: "150",
    },
    {
      field: "Address",
      headerName: "Address",
      editable: false,
      headerAlign: "center",
      width: "150",
    },
    {
      field: "Price",
      headerName: "Price",
      type: "number",
      editable: false,
      headerAlign: "center",
      width: "120",
    },
    {
      field: "Meal Order",
      headerName: "Meal Order",
      editable: false,
      headerAlign: "center",
      width: "120",
    },
    {
      field: "Status",
      headerName: "Status",
      editable: false,
      headerAlign: "center",
    },
  ];

  const rows = [
  ];

  useEffect(() => {});
  return (
    <div className="order-main">
      <div className="order-title">
        <main>
          <h1>Orders</h1>
          <div className="circle">
            <span>12</span>
          </div>
        </main>
        <span>
          <p>
            <b>
              Showing for: <CalendarTodayIcon style={{ fontSize: 18 }} />{" "}
              {prevformattedDate} - {formattedDate}
            </b>
          </p>
        </span>
      </div>

      {/* remember to write a functionality to filter here */}
      <div className="order-bar">
        <ul>
          <li>
            <Link>All Orders</Link>
          </li>
          <li>
            <Link>Completed</Link>
          </li>
          <li>
            <Link>Pending</Link>
          </li>
          <li>
            <Link>Canceled</Link>
          </li>
        </ul>
      </div>

      <div className="order-table">
        <Box sx={{ height: "70vh", width: "95%" }}>
          <StyledDataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[10]}
            experimentalFeatures={{ newEditingApi: false }}
            components={{
              Pagination: CustomPagination,
            }}
          />
        </Box>
      </div>
    </div>
  );
};

export default Order;
