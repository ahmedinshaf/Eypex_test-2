import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { requests } from "../agent/AxiosAgent";
import ActionWrapper from "./ActionWrapper";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
    editable: true,
  },
  {
    field: "action",
    headerName: "Action",
    width: 500,
    align: "center",
    hederAlign: "center",
    renderCell: (params) => {
      return <ActionWrapper row={params.row} />;
    },
  },
  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  // },
];

export default function DataGridDemo() {
  const [users, setUsers] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  useEffect(() => {
    fetchUsers();
  }, []);
  async function fetchUsers() {
    const response = await requests.listUsers(1);
    console.log([response]);
    const totalRows = response.total;
    setTotalRows(totalRows);
    let usersList = [];
    response.data?.forEach((user) => {
      usersList.push({
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
      });
    });
    setUsers(usersList);
  }
  return (
    <Box sx={{ height: 500, width: "100%" }}>
      <h1>Users table</h1>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={6}
        // rowsPerPageOptions={[5]}
        rowCount={totalRows}
        // checkboxSelection
        disableSelectionOnClick
        paginationMode="server"
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
