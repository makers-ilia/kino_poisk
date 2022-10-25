import React, { useState } from 'react';
import { useMovies } from '../../context/MovieContextProvider';
import { useNavigate } from 'react-router-dom';

// mui imports 
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function MultilineTextFields() {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };


  const { addMovie } = useMovies();
  const navigate = useNavigate();

  // const [movie, setMovie] = useState([])

  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const buttonAdd = () => {
    if(!name.trim() || !genre.trim() || !image.trim() || !description.trim()){
      alert('Some inputs are empty!');
      return;
    };

    let movieObj = {
      name,
      genre,
      image,
      description
    }

    // setMovie(movieObj);

    addMovie(movieObj);
    setName('');
    setGenre('');
    setImage('');
    setDescription('');
    navigate('/movie')
  }


  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' }, display: 'flex', justifyContent: 'center', marginTop: '5%', flexDirection: 'column', alignItems: 'center'
      }}
      noValidate
      autoComplete="off"
    >
      <h2>Add movie</h2>
        <TextField value={name}
          onChange={e => setName(e.target.value)}
          id="standard-textarea"
          label="Movie name"
          placeholder="Movie name "
          multiline
          variant="standard"
        />
         <TextField value={genre}
          onChange={e => setGenre(e.target.value)}
          id="standard-textarea"
          label="Genre"
          placeholder="Genre"
          multiline
          variant="standard"
        />
        <TextField value={image}
          onChange={e => setImage(e.target.value)}
          id="standard-textarea"
          label="Image"
          placeholder="Image"
          multiline
          variant="standard"
        />
         <TextField value={description}
          onChange={e => setDescription(e.target.value)}
          id="standard-textarea"
          label="Description"
          placeholder="Description"
          multiline
          variant="standard"
        />
       <Button onClick={buttonAdd} variant="outlined">Add</Button>
    </Box>
  );
}
