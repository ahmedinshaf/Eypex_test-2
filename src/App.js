import "./App.css";
import { useState } from "react";
import UserTable from "./components/UserTable";
import SearchBar from "./components/SearchBar";
import { Box, Button, Modal } from "@mui/material";
import MyModal from "./components/ui/modal/Modal";
import NewUserForm from "./components/NewUserForm";

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openUm, setOpenUm] = useState(false);
  const handleOpenUm = () => setOpenUm(true);
  const handleCloseUm = () => setOpenUm(false);
  return (
    <Box className="App">
      <Box
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-end",
          gap: "5px",
          margin: "10px",
        }}
      >
        <Button variant="contained" onClick={handleOpen}>
          Add New user
        </Button>
        <Button variant="contained" onClick={handleOpenUm}>
          User Manual
        </Button>
      </Box>
      <UserTable />
      {open && (
        <MyModal handleOpen={handleOpen} open={open} handleClose={handleClose}>
          <NewUserForm handleClose={handleClose} />
        </MyModal>
      )}
      {openUm && (
        <MyModal
          handleOpen={handleOpenUm}
          open={openUm}
          handleClose={handleCloseUm}
        >
          {/* <NewUserForm handleClose={handleCloseUm} /> */}
          <h4>🚀 Double click the value to edit( and press edit button ) </h4>
          <h4>🔥 Search by First Name,Last Name, Email</h4>
          <h4>
            🧚🏼 Edit, delete user sending request for server ( reqres.in/ not
            persisting data ☹️ ){" "}
          </h4>
        </MyModal>
      )}
    </Box>
  );
}

export default App;
