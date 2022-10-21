import  React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const RegistrationPage = () => {
  return (
    <>
    <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' , marginTop: '4%'}}>
      <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5, }} /> 
      <TextField id="input-with-sx" label="User Name" variant="standard" />
      <TextField id="standard-basic" label="Age" variant="standard" /> 
      <TextField id="standard-basic" label="Password" variant="standard" />
      <TextField id="standard-basic" label="Confirm Password" variant="standard" /> 
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
       <Checkbox {...label} defaultChecked /> <p>Admin</p>
       </Box>
       <Button variant="outlined" size="medium">
          Register
        </Button>
    </Box> 
    </>
  )
}

export default RegistrationPage