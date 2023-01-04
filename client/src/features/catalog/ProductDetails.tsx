import { LoadingButton } from "@mui/lab";
import {
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ProductModel } from "../../app/models/productModel";

function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const fetchProduct = async (): Promise<ProductModel> => {
    return await axios.get(`http://localhost:5000/api/Products/${id}`).then((res) => res.data);
  };
  const useProduct = () => {
    return useQuery({
      queryKey: ["products", id],
      queryFn: fetchProduct,
      staleTime: 1000 * 60 * 2,
    });
  };

  const product = useProduct();
  if (product.isLoading) {
    return <h3>loading...</h3>;
  }
  if (product.error instanceof Error) {
    return <h3>{product.error.message}</h3>;
  }

  return (
    <div>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <img src={product.data?.pictureUrl} alt={product.data?.name} style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h4">{product.data?.name}</Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="h5" color="secondary">
            ${(product.data?.price! / 100).toFixed(2)}
          </Typography>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>{product.data?.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Description</TableCell>
                  <TableCell>{product.data?.description}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Type</TableCell>
                  <TableCell>{product.data?.type}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Brand</TableCell>
                  <TableCell>{product.data?.brand}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Quantity in Stock</TableCell>
                  <TableCell>{product.data?.quantityInStock}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={6}>
              <TextField variant="outlined" type="number" label="Quantity in Cart" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <LoadingButton
                // disabled={quantity === item?.quantity || (!item && quantity === 0)}
                // loading={status.includes("pending")}
                // onClick={handleSubmitCart}
                sx={{ height: "55px" }}
                color="primary"
                size="large"
                variant="contained"
                fullWidth
              >
                {/* {item ? "Update Quantity" : "Add To Cart"} */}
                "Update Quantity"
              </LoadingButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
export default ProductDetails;
