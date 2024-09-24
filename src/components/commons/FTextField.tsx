import { StandardTextFieldProps, TextField } from "@mui/material";

interface IProps extends Omit<StandardTextFieldProps, "variant"> {
  value: string;
  label: string;
  onValueChange: (v: string) => void;
}

export const FTextField = (props: IProps) => {
  const { value, label, onValueChange, ...restProps } = props;
  return (
    <TextField
      autoFocus
      required
      value={value}
      label={label}
      fullWidth
      onChange={(e) => onValueChange(e.target.value)}
      variant="standard"
      {...restProps}
    />
  );
};
