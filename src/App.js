import "./App.css";
import { useState } from "react";
import UserTable from "./components/UserTable";
import SearchBar from "./components/SearchBar";
import { Button, Modal } from "@mui/material";
import MyModal from "./components/ui/modal/Modal";
import NewUserForm from "./components/NewUserForm";

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="App">
      <SearchBar />
      <Button onClick={handleOpen}>Add New user</Button>
      <UserTable />
      {open && (
        <MyModal handleOpen={handleOpen} open={open} handleClose={handleClose}>
          <NewUserForm />
        </MyModal>
      )}
    </div>
  );
}

export default App;
