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

import { useAuth } from '../context/AuthContextProvider';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { checkUsername, checkPassword, checkStatus, initStorage, setUserToStorage } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const handleChange = (event) => {
    setIsAdmin(event.target.checked);
  };

  const navigate = useNavigate()


  const loginUser = async() => {
    if(!username.trim() || !password.trim()){
      alert('Some inputs are empty');
      return;
    };



    let user = {
      username,
      password,
      isAdmin
    }

    let res = await checkUsername(username);

    if(!res){
      alert('Username is not found!')
      return;
    }

    // checkUsername(username);

    let check = await checkPassword(username, password)
    if(!check){
      alert('Wrong password!');
      return;
    }

    let status = await checkStatus(username, isAdmin)
    if(!status){
      alert('You are a liar!');
      return;
    }

  setUserToStorage(username)

    
    setUsername('');
    setPassword('');
    setIsAdmin(false);

    navigate('/movie')

  }


  return (
    <>
    <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' , marginTop: '4%'}}>
      <h2>Login page</h2>
      <AccountCircle sx={{ color: 'white', mr: 1, my: 0.5, }} /> 
      <TextField id="input-with-sx" label="User Name" variant="standard" onChange={e => setUsername(e.target.value)} value={username} />
      <TextField id="standard-basic" label="Password" variant="standard" onChange={e => setPassword(e.target.value)} value={password} />
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
       <Checkbox 
          checked={isAdmin}
          onChange={handleChange} /> <p>Admin</p>
       </Box>
       <Button onClick={loginUser} variant="outlined" size="medium">
          Login
        </Button>
    </Box> 
    </>
  )
}

export default LoginPage