import { FormControl, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import React from "react";

interface Props {
  options: any[];
  onChange: (e: any) => void;
  selectedValue: string;
}

function RadioButtonGroup({ options, selectedValue, onChange }: Props) {
  return (
    <FormControl component="fieldset">
      <RadioGroup onChange={onChange} value={selectedValue}>
        {options.map(({ value, label }) => (
          <FormControlLabel
            key={value}
            control={<Radio />}
            label={label}
            value={value}
          ></FormControlLabel>
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButtonGroup;
