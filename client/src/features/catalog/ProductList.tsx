import { Grid } from "@mui/material";
import { ProductModel } from "../../app/models/productModel";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

interface Props {
  products: ProductModel[] | undefined;
  productsLoading: boolean;
}

function ProductList({ products, productsLoading }: Props) {
  return (
    <Grid container spacing={4}>
      {products?.map((product) => (
        <Grid item xs={4} key={product.id}>
          {productsLoading ? <ProductCardSkeleton /> : <ProductCard product={product} />}
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;
