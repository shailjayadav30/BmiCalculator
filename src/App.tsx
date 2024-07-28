import {  Stack, CssBaseline, ThemeProvider } from "@mui/material";
import Heading from "./Components/Heading";
import Input from "./Components/Input";
import Result from "./Components/Result";
import Buttons from "./Components/Buttons";
import theme from "./theme";
import { useState } from "react";
const App: React.FC = () => {
  const [height, setheight] = useState<number>(0);
  const [weight, setweight] = useState<number>(0);
  const [bmi, setbmi] = useState<number>(0);
  const [category, setcategory] = useState<string>("");
  const [showresult, setshowresult] = useState<boolean>(false);

  const handleheight = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value=Number(e.target.value )
    if(isNaN(value)){
      alert("Enter a number");
    } else{
      setheight(Number(e.target.value));

    }

  };

  const handleweight = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value=Number(e.target.value )
    if(isNaN(value)){
      alert("Enter a number");
    } else{
      setweight(Number(e.target.value));

    }
  };
  const calculatedbmi = () => {
    if (height > 0 && weight > 0) {
      const calculatedbmi = weight / (height * height);
      setbmi(calculatedbmi);
      setheight(0);
      setweight(0);
      if (calculatedbmi < 18.5) {
        setcategory("Underweight");
      } else if (calculatedbmi >= 18.5 && bmi < 24.9) {
        setcategory("Normal weight");
      } else if (calculatedbmi >= 25 && calculatedbmi < 29.9) {
        setcategory("Overweight");
      } else if (calculatedbmi >= 30) {
        setcategory("Obesity");
      }
      setshowresult(true)
    }
  };
  const handlereload = () => {
    setheight(0);
    setweight(0);
    setbmi(0);
    setcategory("");
    setshowresult(false)
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack
        sx={{
          display: "flex",
          alignItems: "center",
          height: "100vh",
          justifyContent: "center",
        }}
      >
        <Stack
          sx={{
          bgcolor: "primary.main",
            borderRadius: "1rem",
            width: "20rem",
          }}
        >
          <Heading />
          <Input value={height} label="height(m)" onChange={handleheight} />
          <Input value={weight} label="Weight (kg)" onChange={handleweight} />

          <Buttons name="Submit" onClick={calculatedbmi} />
          <Buttons name="Reload" onClick={handlereload} />
          {/* <Result category={category} bmi={bmi} /> */}
          {showresult && <Result category={category} bmi={bmi} />}
        </Stack>
      </Stack>
    </ThemeProvider>
  );
};
export default App;
