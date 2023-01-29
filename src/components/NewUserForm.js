import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { requests } from "../agent/AxiosAgent";

function NewUserForm({ handleClose }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  async function addUserHandler() {
    const addUserResponse = await requests.addUser({
      first_name: firstName,
      last_name: lastName,
      email,
    });
    console.log(addUserResponse);
    handleClose();
  }

  return (
    <Box display={"flex"} flexDirection="column" gap="10px">
      <TextField
        label="first name"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        label="last name"
        onChange={(e) => setLastName(e.target.value)}
      />
      <TextField label="email" onChange={(e) => setEmail(e.target.value)} />
      <Button onClick={addUserHandler}> Add User</Button>
    </Box>
  );
}

export default NewUserForm;
