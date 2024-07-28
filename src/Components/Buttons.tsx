import { Button, Stack } from "@mui/material";
 interface btnprops{
  name:string
  onClick:()=>void
 }


const Buttons:React.FC<btnprops> = ({name,onClick}) => {
  

  return (
    <Stack sx={{display:"flex" ,alignItems:"center",justifyContent:"center"}}>
      <Button
      variant="contained"
      onClick={onClick}
      sx={{
        width: "80%",
        marginBottom:"1.5rem",
        bgcolor:"secondary.main",
        color:"primary.main  "
      }}
    >
      {name}
    </Button>
    </Stack>
  );
};

export default Buttons