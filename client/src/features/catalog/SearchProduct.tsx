import { debounce, TextField } from "@mui/material";
import { useState } from "react";

function SearchProduct() {
  // const [searchTerm, setSearchTerm] = useState(productParams.searchParams);

  return (
    <TextField
      label="Search Product"
      variant="outlined"
      fullWidth
      // value={searchTerm || ""}
      // onChange={(e: any) => {
      //   setSearchTerm(e.target.value);
      // }}
    />
  );
}

export default SearchProduct;
