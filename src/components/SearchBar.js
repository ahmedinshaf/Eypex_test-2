import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function SearchBar({ searchedHandler }) {
  return (
    <Box style={{ width: "100%" }}>
      <TextField
        id="filled-basic"
        label="Search"
        style={{ width: "100%" }}
        variant="filled"
        onChange={(e) => {
          console.log("s");
          searchedHandler(e);
        }}
      />
    </Box>
  );
}
