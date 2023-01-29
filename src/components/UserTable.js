import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { requests } from "../agent/AxiosAgent";
import ActionWrapper from "./ActionWrapper";
import SearchBar from "./SearchBar";

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
];

export default function DataGridDemo() {
  const [users, setUsers] = useState([]);
  const [searchedUsers, setSearchedUsers] = useState([]);

  const [totalRows, setTotalRows] = useState(0);
  useEffect(() => {
    fetchUsers(1);
  }, []);

  function searchedHandler(e) {
    console.log(e.target.value);
    const filteredUsers = users.filter((row) => {
      console.log({ row });
      return (
        row.firstName.toLowerCase().includes(e.target.value.toLowerCase()) ||
        row.lastName.toLowerCase().includes(e.target.value.toLowerCase()) ||
        row.email.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    setSearchedUsers(filteredUsers);
  }
  async function fetchUsers(pageNo) {
    const response = await requests.listUsers(pageNo);
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
    setSearchedUsers(usersList);
  }
  return (
    <Box sx={{ height: 500, width: "100%" }}>
      <SearchBar searchedHandler={searchedHandler} />
      <DataGrid
        rows={searchedUsers}
        columns={columns}
        pageSize={6}
        rowCount={totalRows}
        onPageChange={async (newPage) => {
          // setPage((prev) => prev + 1);
          await fetchUsers(newPage + 1);
        }}
        disableSelectionOnClick
        paginationMode="server"
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
