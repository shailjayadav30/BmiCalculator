import { Typography } from "@mui/material";

const Heading = () => {
  return (
    <Typography
      sx={{
        textAlign: "center",
        marginTop: "1rem",
        marginBottom: "1rem",
        fontWeight:"600",
        fontSize: "1.5rem",
        // color:"text.secondary"
      }}
    >
      Bmi Calculator
    </Typography>
  );
};

export default Heading;
