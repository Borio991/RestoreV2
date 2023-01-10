import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, Pagination, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import AppPagination from "../../app/components/AppPagination";
import CheckBoxButtons from "../../app/components/CheckBoxButtons";
import RadioButtonGroup from "../../app/components/RadioButtonGroup";
import { useFilters, useProducts } from "../../app/hooks/productHooks";
import useDebounce from "../../app/hooks/usedebounce";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { ProductParams } from "../../app/models/productModel";
import ProductList from "./ProductList";

const sortOptions = [
  { value: "name", label: "Alphabetical" },
  { value: "priceDesc", label: "Price - High to low" },
  { value: "price", label: "Price - Low to Hight" },
];

function Catalog(): JSX.Element {
  const productParams: ProductParams = {
    orderBy: "name",
    pageNumber: 1,
    pageSize: 6,
  };

  const [params, setParams] = useState<ProductParams>(productParams);
  const debouncedSearchTerm = useDebounce(params, 200);
  const products = useProducts(debouncedSearchTerm);
  const filters = useFilters();

  if (products.isLoading || filters.isLoading) {
    return <LoadingComponent message="loading ..."></LoadingComponent>;
  }

  if (products.error instanceof Error) {
    return <h3>{products.error.message}</h3>;
  }

  if (filters.error instanceof Error) {
    return <h3>{filters.error.message}</h3>;
  }

  return (
    <Grid container spacing={4}>
      <Grid item xs={3}>
        <Paper sx={{ mb: 2, p: 2 }}>
          <TextField
            label="Search Products"
            variant="outlined"
            fullWidth
            value={params.searchTerm || ""}
            onChange={(e: any) =>
              setParams((prevState) => {
                return { ...prevState, searchTerm: e.target.value };
              })
            }
          />
        </Paper>
        <Paper sx={{ mb: 2, p: 2 }}>
          <FormControl>
            <RadioButtonGroup
              selectedValue={params.orderBy}
              options={sortOptions}
              onChange={(e: any) =>
                setParams((prevState) => {
                  return { ...prevState, orderBy: e.target.value };
                })
              }
            />
          </FormControl>
        </Paper>
        <Paper sx={{ mb: 2, p: 2 }}>
          <FormGroup>
            <CheckBoxButtons
              items={filters.data?.brands!}
              checked={params.brands}
              onChange={(items: string[]) =>
                setParams((prevState) => {
                  return { ...prevState, brands: items };
                })
              }
            />
          </FormGroup>
        </Paper>
        <Paper sx={{ mb: 2, p: 2 }}>
          <FormGroup>
            <CheckBoxButtons
              items={filters.data?.types!}
              checked={params.types}
              onChange={(items: string[]) =>
                setParams((prevState) => {
                  return { ...prevState, types: items };
                })
              }
            />
          </FormGroup>
        </Paper>
      </Grid>

      <Grid item xs={9}>
        <ProductList products={products.data?.items} productsLoading={products.isLoading} />
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={9}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <AppPagination
            metaData={products.data?.metaData!}
            onPageChange={(page: number) =>
              setParams((prevState) => {
                return { ...prevState, pageNumber: page };
              })
            }
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Catalog;
