// import { Grid, Button } from "@mui/material";
// import Typography from "@mui/material/Typography";
// import { Link } from "react-router-dom";
// import { useAppSelector } from "../../store/configureStore";
// import BasketSummary from "../basket/BasketSummery";
// import BasketTable from "../basket/BasketTable";

// export default function Review() {
//   const { basket } = useAppSelector((state) => state.basket);
//   const subtotal: any = basket?.items.reduce((sum, item) => sum + item.quantity * item.price, 0);

//   return (
//     <>
//       <Typography variant="h6" gutterBottom>
//         Order summary
//       </Typography>
//       {!!basket ? <BasketTable items={basket?.items} isBasket={false} /> : null}
//       <br />

//       <Grid container>
//         <Grid item xs={6}></Grid>
//         <Grid item xs={6}>
//           <BasketSummary subtotal={subtotal} />
//         </Grid>
//       </Grid>
//     </>
//   );
// }

import React from "react";

function Review() {
  return <div>Review</div>;
}

export default Review;
