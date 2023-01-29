import { Button, Box } from "@mui/material";
import React from "react";

function ActionWrapper({ row }) {
  return (
    <Box>
      <Button
        onClick={() => {
          console.log(row);
        }}
      >
        Edit
      </Button>
      <Button>delete</Button>
    </Box>
  );
}

export default ActionWrapper;
