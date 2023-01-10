import { Add, Delete, Remove } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAddBasketItem, useBasket, useBasketSubtotal, useRemoveBasketItem } from "../../app/hooks/basketHooks";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { BasketItemModel } from "../../app/models/BasketModel";
import BasketSummary from "./BasketSummery";

export default function BasketPage() {
  const basket = useBasket();
  const addItemBasket = useAddBasketItem();
  const removeItemBasket = useRemoveBasketItem();
  const basketSubtotal = useBasketSubtotal();
  const [name, setname] = useState("");

  function handleAddItemBasket(item: BasketItemModel, name: string) {
    addItemBasket.mutate({ id: item.productId });
    setname(name);
  }

  function handleRemoveItemBasket(item: BasketItemModel, name: string) {
    removeItemBasket.mutate({ id: item.productId });
    setname(name);
  }
  function handleDeleteItemBasket(item: BasketItemModel, name: string) {
    removeItemBasket.mutate({ id: item.productId, quantity: item.quantity });
    setname(name);
  }

  if (basket.isLoading) return <LoadingComponent message="loading basket" />;
  if (basket.error instanceof Error) return <h2>{basket.error.message}</h2>;
  if (!basket.data) return <Typography variant="h3">Your basket is empty</Typography>;

  if (!basket) return <h1>no basket found</h1>;

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="right">Subtotal</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {basket.data?.items.map((item) => (
              <TableRow key={item.productId} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  <Box display="flex" alignItems="center">
                    <img src={item.pictureUrl} alt={item.name} style={{ height: 50, marginRight: 20 }} />
                    <span>{item.name}</span>
                  </Box>
                </TableCell>
                <TableCell align="right">${(item.price / 100).toFixed(2)}</TableCell>
                <TableCell align="center">
                  <LoadingButton
                    loading={removeItemBasket.isLoading && name === "rem" + item.productId}
                    onClick={() => handleRemoveItemBasket(item, "rem" + item.productId)}
                    color="error"
                  >
                    <Remove />
                  </LoadingButton>
                  {item.quantity}
                  <LoadingButton
                    loading={addItemBasket.isLoading && name === "add" + item.productId}
                    onClick={() => handleAddItemBasket(item, "add" + item.productId)}
                    color="secondary"
                  >
                    <Add />
                  </LoadingButton>
                </TableCell>
                <TableCell align="right">${((item.price / 100) * item.quantity).toFixed(2)}</TableCell>
                <TableCell align="right">
                  <LoadingButton
                    loading={removeItemBasket.isLoading && name === "del" + item.productId}
                    onClick={() => handleDeleteItemBasket(item, "del" + item.productId)}
                    color="error"
                  >
                    <Delete />
                  </LoadingButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid container>
        <Grid item xs={6} />
        <Grid item xs={6}>
          <BasketSummary subtotal={basketSubtotal.data!} />
          <Button component={Link} to="/checkout" variant="contained" size="large" fullWidth>
            Checkout
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
