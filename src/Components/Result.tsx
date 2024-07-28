import { Typography } from "@mui/material"
interface resultprops{
  bmi:number;
  category:string;
}
const Result:React.FC<resultprops> = ({bmi,category}) => {
  
  return (
<Typography sx={{textAlign:"center",marginTop:"1rem", marginBottom:"1rem"}}>
   Your bmi is : {bmi.toFixed(2)}
   <br />
   You are  {category}
</Typography>
  )
}

export default Result
