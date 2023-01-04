import { debounce, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/configureStore";
import { setProductParams } from "./catalogSlice";

function SearchProduct() {
  const { productParams } = useAppSelector((state) => state.catalog);
  const [searchTerm, setSearchTerm] = useState(productParams.searchParams);
  const dispatch = useDispatch();
  const debounceFn = debounce((e: any) => {
    dispatch(setProductParams({ searchParams: e.target.value }));
  }, 1000);
  return (
    <TextField
      label="Search Product"
      variant="outlined"
      fullWidth
      value={searchTerm || ""}
      onChange={(e: any) => {
        setSearchTerm(e.target.value);
        debounceFn(e);
      }}
    />
  );
}

export default SearchProduct;
