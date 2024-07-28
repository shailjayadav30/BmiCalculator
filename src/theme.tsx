import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      default: "#0f172a",
    },
    primary: {
      main: "#cbd5e1",
    },
    secondary: {
      main: "#1e293b",
    },
    text: {
      primary: "#020617",
      secondary: "#f8fafc",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#0f172a", // Ensure consistency
          color: "#020617", // Set the default text color
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#f8fafc", // Set the default text color for buttons to a light color
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#cbd5e1", // Default border color
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#a3b3c3", // Border color on hover
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#8fa6b7", // Border color when focused
          },
        },
        input: {
          color: "#020617", // Input text color
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#1e293b", // Label color
          "&.Mui-focused": {
            color: "#1e293b", // Label color when focused
          },
        },
      },
    },
  },
});

export default theme;
