import { Remove, Add, Delete } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { BasketItemModel } from "../../app/models/BasketModel";
import { currencyFormat } from "../../app/utils/util";

interface Props {
  items: BasketItemModel[];
  isBasket?: boolean;
}

function BasketTable({ items, isBasket = true }: Props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="right">Subtotal</TableCell>
            {isBasket ? <TableCell align="right">Actions</TableCell> : null}
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item, index) => (
            <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                <Box
                  component={Link}
                  to={`/catalog/${item.productId}`}
                  display={"flex"}
                  alignItems="center"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <img src={item.pictureUrl} alt={item.name} style={{ height: 50, marginRight: 20 }} />
                  <span>{item.name}</span>
                </Box>
              </TableCell>
              <TableCell align="right">{currencyFormat(item.price)}</TableCell>

              <TableCell align="center">
                {isBasket ? (
                  <LoadingButton color="error" loading={status === "pendingRemoveItem" + item.productId + "rem"} onClick={() => {}}>
                    <Remove />
                  </LoadingButton>
                ) : null}

                {item.quantity}
                {isBasket ? (
                  <LoadingButton color="success" onClick={() => {}}>
                    <Add />
                  </LoadingButton>
                ) : null}
              </TableCell>
              <TableCell align="right">{currencyFormat(item.price * item.quantity)}</TableCell>
              {isBasket ? (
                <TableCell align="right">
                  <LoadingButton color="error" onClick={() => {}}>
                    <Delete />
                  </LoadingButton>
                </TableCell>
              ) : null}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasketTable;
