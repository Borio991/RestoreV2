// import { Box, Button, Paper, Step, StepLabel, Stepper, Typography } from "@mui/material";
// import { useEffect, useState } from "react";
// import AddressForm from "./AddressForm";
// import PaymentForm from "./PaymentForm";
// import Review from "./Review";
// import { yupResolver } from "@hookform/resolvers/yup";

// import { LoadingButton } from "@mui/lab";
// import { FieldValues, FormProvider, useForm } from "react-hook-form";
// import { ValidationSchema } from "./CheckoutValidationSchema";
// import { useAppDispatch } from "../../store/configureStore";
// import agent from "../../api/agent";
// import { clearBasket } from "../basket/basketSlice";

// const steps = ["Shipping address", "Review your order", "Payment details"];

// export default function CheckoutPage() {
//   const [activeStep, setActiveStep] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const dispatch = useAppDispatch();
//   const [orderNumber, setOrderNumber] = useState(0);

//   const validationStep = ValidationSchema[activeStep];
//   const methods = useForm({
//     mode: "all",
//     resolver: yupResolver(validationStep),
//   });

//   function getStepContent(step: number) {
//     switch (step) {
//       case 0:
//         return <AddressForm />;
//       case 1:
//         return <Review />;
//       case 2:
//         return <PaymentForm />;
//       default:
//         throw new Error("Unknown step");
//     }
//   }

//   async function handleNext(data: FieldValues) {
//     if (activeStep === steps.length - 1) {
//       const { saveAddress, nameOnCard, ...shippingAddress } = data;
//       setLoading(true);
//       try {
//         const orderNumberReturned = await agent.Order.create({ shippingAddress, saveAddress });
//         setOrderNumber(orderNumberReturned);
//         setActiveStep(activeStep + 1);
//         dispatch(clearBasket());
//         setLoading(false);
//       } catch (error) {
//         setLoading(false);
//         console.log(error);
//       }
//     } else {
//       setActiveStep(activeStep + 1);
//     }
//   }

//   function handleBack() {
//     setActiveStep(activeStep - 1);
//   }

//   useEffect(() => {
//     (async () => {
//       try {
//         const data = await agent.Account.fetchAddress();
//         if (data) {
//           methods.reset({ ...methods.getValues, ...data, savedAddress: false });
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     })();
//   }, []);

//   return (
//     <FormProvider {...methods}>
//       <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
//         <Typography component="h1" variant="h4" align="center">
//           Checkout
//         </Typography>
//         <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
//           {steps.map((label) => (
//             <Step key={label}>
//               <StepLabel>{label}</StepLabel>
//             </Step>
//           ))}
//         </Stepper>
//         <form onSubmit={methods.handleSubmit(handleNext)}>
//           {activeStep === steps.length ? (
//             <>
//               <Typography variant="h5">Thank you for your order</Typography>
//               <Typography variant="subtitle1">
//                 Your order number is #{orderNumber}. we have emailed your order configrations and
//                 your order will be shipped.
//               </Typography>
//             </>
//           ) : (
//             <>
//               {getStepContent(activeStep)}
//               <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
//                 {activeStep !== 0 && (
//                   <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
//                     Back
//                   </Button>
//                 )}
//                 <LoadingButton
//                   loading={loading}
//                   disabled={!methods.formState.isValid}
//                   variant="contained"
//                   type="submit"
//                   sx={{ mt: 3, ml: 1 }}
//                 >
//                   {activeStep === steps.length - 1 ? "Place order" : "Next"}
//                 </LoadingButton>
//               </Box>
//             </>
//           )}
//         </form>
//       </Paper>
//     </FormProvider>
//   );
// }

import React from "react";

function CheckoutPage() {
  return <div>CheckoutPage</div>;
}

export default CheckoutPage;
