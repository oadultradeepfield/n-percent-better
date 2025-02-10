import { TextField } from "@mui/material";

interface InputFieldProps {
  label: string;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({ label, value, onChange }: InputFieldProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    if (newValue > 0 || event.target.value === "") {
      onChange(event);
    }
  };

  return (
    <TextField
      fullWidth
      label={label}
      type="number"
      value={value}
      onChange={handleChange}
      error={value <= 0}
      helperText={value <= 0 ? "Value must be greater than 0" : ""}
      sx={{ mb: 3 }}
    />
  );
};

export default InputField;
