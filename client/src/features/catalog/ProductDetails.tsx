import { LoadingButton } from "@mui/lab";
import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAddBasketItem, useBasket, useRemoveBasketItem } from "../../app/hooks/basketHooks";
import { useProduct } from "../../app/hooks/productHooks";

function ProductDetails() {
  const { id } = useParams<{ id: string }>();

  const product = useProduct(id);
  const basket = useBasket();
  const removeItemBasket = useRemoveBasketItem();
  const AddItemBasket = useAddBasketItem();
  const quantityInBasket = basket.data?.items.find((x) => x.productId === product.data?.id)?.quantity ?? 0;
  const [quantity, setQuantity] = useState(0);

  const existedItem = basket.data?.items.find((x) => x.productId === product.data?.id);
  function updateItemQuantity() {
    const existedItem = basket.data?.items.find((x) => x.productId === product.data?.id);
    if (existedItem?.quantity! > quantity!) {
      removeItemBasket.mutate({ id: existedItem?.productId!, quantity: existedItem?.quantity! - quantity! });
    }
    if (existedItem?.quantity! < quantity!) {
      AddItemBasket.mutate({ id: existedItem?.productId!, quantity: quantity! - existedItem?.quantity! });
    }
  }

  useEffect(() => {
    setQuantity(quantityInBasket);
  }, [quantityInBasket]);
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
              <TextField
                variant="outlined"
                type="number"
                label="Quantity in Cart"
                fullWidth
                // defaultValue={quantityInBasket}
                value={quantity}
                onChange={(e: any) => setQuantity(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <LoadingButton
                disabled={quantity === existedItem?.quantity || (!existedItem && quantity === 0)}
                loading={AddItemBasket.isLoading || removeItemBasket.isLoading}
                onClick={updateItemQuantity}
                sx={{ height: "55px" }}
                color="primary"
                size="large"
                variant="contained"
                fullWidth
              >
                {existedItem ? "Update Quantity" : "Add To Cart"}
              </LoadingButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
export default ProductDetails;
