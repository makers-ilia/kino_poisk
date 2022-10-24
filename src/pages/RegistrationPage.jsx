import  React, { useState } from 'react';
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

//custom
import { useAuth } from '../context/AuthContextProvider';



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [confPass, setConfPass] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const handleChange = (event) => {
    setIsAdmin(event.target.checked);
  };

  const { registerUser, checkUsername } = useAuth();
  
  const addUser = async () => {
    
    if(!username.trim() || !age.trim() || !password.trim() || !confPass.trim()){
      alert('Some inputs are empty');
      return;
    };

    if(password !== confPass){
      alert('Passwords don\'t match!');
      return;
    }

    let user = {
      username,
      age,
      password,
      confPass,
      isAdmin
    }

    let res = await checkUsername(username);

    if(res){
      alert('Username already exists!')
      return;
    }

      // console.log(checkUniqueUsername);

    

    registerUser(user);
    setUsername('');
    setAge('');
    setPassword('');
    setConfPass('');
    setIsAdmin(false);
    console.log(user);
  }

  return (
    <>
    <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' , marginTop: '4%'}}>
      <h2>Registration page</h2>
      <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5, }} /> 
      <TextField id="input-with-sx" label="User Name" variant="standard" onChange={e => setUsername(e.target.value)} value={username} />
      <TextField id="standard-basic" label="Age" variant="standard" onChange={e => setAge(e.target.value)} value={age}/> 
      <TextField id="standard-basic" label="Password" variant="standard" onChange={e => setPassword(e.target.value)} value={password} />
      <TextField id="standard-basic" label="Confirm Password" variant="standard" onChange={e => setConfPass(e.target.value)} value={confPass} /> 
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
       <Checkbox 
          checked={isAdmin}
          onChange={handleChange}
          {...label} /> <p>Admin</p>
       </Box>
       <Button onClick={addUser}  variant="outlined" size="medium">
          Register
        </Button>
    </Box> 
    </>
  )
}

export default RegistrationPage