import { Grid, Paper } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ProductModel } from "../../app/models/productModel";

import ProductList from "./ProductList";
import SearchProduct from "./SearchProduct";

const sortOptions = [
  { value: "name", label: "Alphabetical" },
  { value: "priceDesc", label: "Price - High to low" },
  { value: "price", label: "Price - Low to Hight" },
];

function Catalog(): JSX.Element {
  const fetchProducts = async (): Promise<ProductModel[]> => {
    return await axios.get("http://localhost:5000/api/Products").then((res) => res.data);
  };
  const useProducts = () => {
    return useQuery({
      queryKey: ["products"],
      queryFn: fetchProducts,
    });
  };

  const products = useProducts();
  if (products.isLoading) {
    return <h3>loading...</h3>;
  }
  if (products.error instanceof Error) {
    return <h3>{products.error.message}</h3>;
  }
  return (
    <Grid container spacing={4}>
      {/* <Grid item xs={3}>
        <Paper sx={{ mb: 2 }}>
          <SearchProduct />
        </Paper>
        <Paper sx={{ mb: 2, p: 2 }}>
          <RadioButtonGroup
            options={sortOptions}
            selectedValue={productParams.orderBy}
            onChange={(e: any) => dispatch(setProductParams({ orderBy: e.target.value }))}
          />
        </Paper>
        <Paper sx={{ mb: 2, p: 2 }}>
          <CheckBoxButtons
            items={brands}
            checked={productParams.brands}
            onChange={(items: string[]) => {
              dispatch(setProductParams({ brands: items }));
            }}
          />
        </Paper>
        <Paper sx={{ mb: 2, p: 2 }}>
          <CheckBoxButtons
            items={types}
            checked={productParams.types}
            onChange={(items: string[]) => {
              dispatch(setProductParams({ types: items }));
            }}
          />
        </Paper>
      </Grid> */}

      <Grid item xs={9}>
        <ProductList products={products.data} productsLoading={products.isLoading} />
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid
        item
        xs={9}
        sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
      ></Grid>
    </Grid>
  );
}

export default Catalog;
