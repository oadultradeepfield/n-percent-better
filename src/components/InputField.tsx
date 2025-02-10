import { TextField } from "@mui/material";

interface InputFieldProps {
  label: string;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({ label, value, onChange }: InputFieldProps) => (
  <TextField
    fullWidth
    label={label}
    type="number"
    value={value}
    onChange={onChange}
    sx={{ mb: 3 }}
  />
);

export default InputField;
