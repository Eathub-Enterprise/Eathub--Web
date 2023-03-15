import React, { useEffect, useState } from "react";
import authService from "../../../../services/auth/authService";
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

const HistoryOrder = () => {
  const [count, setCount ] = useState({});
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await authService.getOrderedMeals();
        setTableData(response.data.results);
        setCount(response.data.count);
        console.log(response.data);

        // tryna work with the date value
        const tableDate = response.data.results.map((item) => {
          return item.item.date_created = new Date().toLocaleDateString("en-US", {
            month: "2-digit",
            day: "2-digit",
            year:"numeric"
          });
        })
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  if (tableData.length === 0) {
    return <h1>Loading Orders...</h1>;
  }


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
    textAlign: 'center',
    WebkitFontSmoothing: "auto",
    letterSpacing: "normal",
    "& .MuiDataGrid-main": {
      borderRadius: 10,
      backgroundColor: theme.palette.mode === "light" ? "#fff" : "#fff",

      // border: `.1px solid ${
      //   theme.palette.mode === 'transparent' ? 'transparent' : 'transparent'
      // }`,
      boxShadow: `2px 4px 10px 1px rgba(0, 0, 0, 0.5)`,
    },
    "& .MuiDataGrid-columnsContainer": {
      backgroundColor: theme.palette.mode === "light" ? "#fff" : "#fff",
    },
    "& .MuiDataGrid-iconSeparator": {
      display: "none",
    },
    "& .MuiDataGrid-columnHeaders": {
      borderBottom: `.1px solid rgba(0, 0, 0, 0.5)`,
    },
    "& .MuiDataGrid-columnHeader, .MuiDataGrid-cell": {
      borderLeft: `.1px solid rgba(0, 0, 0, 0.5)`
    },
    "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
      borderBottom: `.1px solid ${
        theme.palette.mode === "light" ? "#000" : "#000"
      }`
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
      field: "date",
      headerName: "Date",
      editable: false,
      headerAlign: "center",
      width: "100",
    },
    {
      field: "meals",
      headerName: "Meals",
      editable: false,
      headerAlign: "center",
      width: "350",
    },
    {
      field: "address",
      headerName: "Address",
      editable: false,
      headerAlign: "center",
      width: "150",
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      editable: false,
      headerAlign: "center",
      width: "100",
    },
    {
      field: "status",
      headerName: "Status",
      editable: false,
      width: "150",
      headerAlign: "center",
      // headerClassName:'accepted' ? 'lightgreen' : 'red',
    },
  ];

  const rows = tableData.map((item) => {
    return {
      id: item.id,
      date: item.item.date_created,
      meals: item.item.food_title,
      address: item.client.location,
      price: item.item.food_price,
      status: item.status,
    };
  });

  return (
    <div className="order-main">
      <div className="order-title">
        <main>
          <h1>Orders</h1>
          <div className="circle">
            <span>{count}</span>
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

export default HistoryOrder;
