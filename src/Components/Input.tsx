import { Stack, TextField } from "@mui/material";
interface inputprops {
  value: number;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input: React.FC<inputprops> = ({ value, label, onChange }) => {
  return (
    <Stack
      sx={{ display: "flex", alignItems: "center", 
        justifyContent: "center" }}
    >
      <TextField
        value={value}
        label={label}
        onChange={onChange}
        variant="outlined"
        InputLabelProps={{
          sx: {
            color: "secondary.main", // Dark label color
          }}}
        sx={{ width: "80%", marginBottom: "2rem" }}
      />
    </Stack>
  );
};

export default Input;
