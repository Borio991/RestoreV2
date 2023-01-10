import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { useState } from "react";

interface Props {
  items: string[];
  checked?: string[];
  onChange: (items: string[]) => void;
}

function CheckBoxButtons({ items, checked, onChange }: Props) {
  const [checkedItems, setCheckedItems] = useState(checked || []);
  function handleChecked(value: string) {
    const currentIndex = checkedItems.findIndex((item) => item === value);
    let newchecked: string[] = [];
    if (currentIndex === -1) {
      newchecked = [...checkedItems, value];
    } else {
      newchecked = checkedItems.filter((item) => item !== value);
    }
    setCheckedItems(newchecked);
    onChange(newchecked);
  }
  return (
    <FormGroup>
      {items.map((item) => (
        <FormControlLabel
          control={<Checkbox checked={checkedItems.indexOf(item) !== -1} onClick={() => handleChecked(item)} />}
          label={item}
          key={item}
        />
      ))}
    </FormGroup>
  );
}

export default CheckBoxButtons;
