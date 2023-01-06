// import { Grid } from "@mui/material";
// import Typography from "@mui/material/Typography";
// import { useFormContext } from "react-hook-form";
// import AppCheckBox from "../../components/AppCheckBox";
// import AppTextInput from "../../components/AppTextInput";

// export default function AddressForm() {
//   const { control } = useFormContext();

//   return (
//     <>
//       <Typography variant="h6" gutterBottom>
//         Shipping address
//       </Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12} md={6}>
//           <AppTextInput control={control} name="nameOnCard" label="Name on card" />
//         </Grid>
//       </Grid>
//     </>
//   );
// }

// import { Grid } from "@mui/material";
// import Typography from "@mui/material/Typography";
// import { useFormContext } from "react-hook-form";
// import AppTextInput from "../../components/AppTextInput";

// export default function PaymentForm() {
//   const { control } = useFormContext();
//   return (
//     <>
//       <Typography variant="h6" gutterBottom>
//         Payment method
//       </Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12} md={6}>
//           <AppTextInput name="nameOnCard" label="Name on card" control={control} />
//         </Grid>
//         {/* <Grid item xs={12} md={6}>
//           <TextField
//             onChange={onCardInputChange}
//             error={!!cardState.elementError.cardNumber}
//             helperText={cardState.elementError.cardNumber}
//             label="Card number"
//             fullWidth
//             autoComplete="cc-number"
//             variant="outlined"
//             InputLabelProps={{ shrink: true }}
//             InputProps={{
//               inputComponent: StripeInput,
//               inputProps: {
//                 component: CardNumberElement
//               }
//             }}
//           />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField
//             onChange={onCardInputChange}
//             error={!!cardState.elementError.cardExpiry}
//             helperText={cardState.elementError.cardExpiry}
//             id="expDate"
//             label="Expiry date"
//             fullWidth
//             autoComplete="cc-exp"
//             variant="outlined"
//             InputLabelProps={{ shrink: true }}
//             InputProps={{
//               inputComponent: StripeInput,
//               inputProps: {
//                 component: CardExpiryElement
//               }
//             }}
//           />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField
//             onChange={onCardInputChange}
//             error={!!cardState.elementError.cardCvc}
//             helperText={cardState.elementError.cardCvc}
//             id="cvv"
//             label="CVV"
//             fullWidth
//             autoComplete="cc-csc"
//             variant="outlined"
//             InputLabelProps={{ shrink: true }}
//             InputProps={{
//               inputComponent: StripeInput,
//               inputProps: {
//                 component: CardCvcElement
//               }
//             }}
//           />
//         </Grid> */}
//       </Grid>
//     </>
//   );
// }

import React from "react";

function PaymentForm() {
  return <div>PaymentForm</div>;
}

export default PaymentForm;
