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
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../../errors/NotFound";
import LoadingComponent from "../../layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../store/configureStore";
import { AddBasketItemAsync, RemoveBasketItemAsync } from "../basket/basketSlice";
import { FetchSingleProductAsync, productSelectors } from "./catalogSlice";

function ProductDetails() {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const product = useAppSelector((state) => productSelectors.selectById(state, id));
  const { productsStatus } = useAppSelector((state) => state.catalog);
  const { basket, status } = useAppSelector((state) => state.basket);
  const item = basket?.items.find((i) => i.productId === product?.id);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (item) setQuantity(item.quantity);
    if (!product) dispatch(FetchSingleProductAsync(id));
  }, [id, item, dispatch, product]);

  const handleChangeCart = (e: any) => {
    if (e.target.value >= 0) {
      setQuantity(e.target.value);
    }
  };

  const handleSubmitCart = (e: any) => {
    if (!item || quantity > item.quantity) {
      const updatedQuantity = item ? quantity - item.quantity : quantity;
      dispatch(AddBasketItemAsync({ productId: product?.id!, quantity: updatedQuantity }));
    } else {
      const updatedQuantity = item.quantity - quantity;
      dispatch(RemoveBasketItemAsync({ productId: product?.id!, quantity: updatedQuantity }));
    }
  };

  if (productsStatus === "pendingFetchingSingleProduct")
    return <LoadingComponent message="Loading Product" />;
  if (!product) return <NotFound />;

  return (
    <div>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <img src={product.pictureUrl} alt={product.name} style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h4">{product.name}</Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="h5" color="secondary">
            ${(product.price / 100).toFixed(2)}
          </Typography>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>{product.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Description</TableCell>
                  <TableCell>{product.description}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Type</TableCell>
                  <TableCell>{product.type}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Brand</TableCell>
                  <TableCell>{product.brand}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Quantity in Stock</TableCell>
                  <TableCell>{product.quantityInStock}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                type="number"
                label="Quantity in Cart"
                fullWidth
                value={quantity}
                onChange={handleChangeCart}
              />
            </Grid>
            <Grid item xs={6}>
              <LoadingButton
                disabled={quantity === item?.quantity || (!item && quantity === 0)}
                loading={status.includes("pending")}
                onClick={handleSubmitCart}
                sx={{ height: "55px" }}
                color="primary"
                size="large"
                variant="contained"
                fullWidth
              >
                {item ? "Update Quantity" : "Add To Cart"}
              </LoadingButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
export default ProductDetails;
