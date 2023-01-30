import { Button, Box } from "@mui/material";
import React from "react";
import { requests } from "../agent/AxiosAgent";

function ActionWrapper({ row }) {
  async function updateHandler() {
    const updateServerResponse = await requests.editUser(
      {
        firstName: row.firstName,
        lastName: row.lastName,
        email: row.email,
      },
      row.id
    );
    console.log(updateServerResponse);
  }
  async function deleteHandler() {
    try {
      const deleteServerResponse = await requests.deleteUser(row.id);
      console.log({ deleteServerResponse });
    } catch (e) {
      console.log("error ", e);
    }
  }
  async function contactHandler() {
    console.log("contact Handler :", row.email);
    window.location = "mailto:" + row.email;
  }
  return (
    <Box display="flex" gap="10px">
      <Button variant="contained" onClick={updateHandler}>
        Edit
      </Button>
      <Button variant="contained" color="error" onClick={deleteHandler}>
        delete
      </Button>
      <Button color="secondary" onClick={contactHandler}>
        Contact
      </Button>
    </Box>
  );
}

export default ActionWrapper;
