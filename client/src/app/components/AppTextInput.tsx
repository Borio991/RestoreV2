// import { TextField } from "@mui/material";
// import React from "react";
// import { useController, UseControllerProps } from "react-hook-form";

// interface Props extends UseControllerProps {
//   label: string;
// }

// function AppTextInput(props: Props) {
//   const { field, fieldState } = useController({ ...props, defaultValue: "" });
//   return (
//     <TextField
//       {...props}
//       {...field}
//       variant="outlined"
//       fullWidth
//       error={!!fieldState.error}
//       helperText={fieldState.error?.message}
//     />
//   );
// }

// export default AppTextInput;

import React from "react";

function AppTextInput() {
  return <div>AppTextInput</div>;
}

export default AppTextInput;
