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
  const [age, setAge] = useState('')
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [director, setDirector] = useState('');
  const [dirImg, setDirImg] = useState('');


  const buttonAdd = () => {
    if(!name.trim() || !genre.trim() || !image.trim() || !description.trim()){
      alert('Some inputs are empty!');
      return;
    };

    let movieObj = {
      name,
      genre,
      year,
      image,
      description,
      duration,
      dirImg,
      director
    }

    // setMovie(movieObj);

    addMovie(movieObj);
    setName('');
    setGenre('');
    setYear('');
    setImage('');
    setDescription('');
    setDuration('');
    setDirImg('');
    setDirector('');
    navigate('/movies');
  }


  return (
    <main style={{display: 'flex', justifyContent: 'center'}}>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' }, display: 'flex', justifyContent: 'center', marginTop: '5%', alignItems: 'center', background: 'grey', flexDirection: 'column', width: '40%', padding: '2%', borderRadius: '20px', opacity: '80%'
      }}
      noValidate
      autoComplete="off"
    >
      <h2>Add movie</h2>
      <div style={{display: 'flex', margin: '3% 0'}}>
      <Box sx={{display: 'flex', flexDirection: 'column'}}>
        <TextField value={name}
          onChange={e => setName(e.target.value)}
          color="error"
          id="standard-textarea"
          label="Movie name"
          placeholder="Movie name "
          multiline
          variant="standard"
        />
         <TextField value={genre}
          onChange={e => setGenre(e.target.value)}
          color="error"
          id="standard-textarea"
          label="Genre"
          placeholder="Genre"
          multiline
          variant="standard"
        />
        <TextField value={year}
          onChange={e => setYear(e.target.value)}
          color="error"
          id="standard-textarea"
          label="Release date"
          placeholder="Release date"
          multiline
          variant="standard"
        />
        <TextField value={image}
          onChange={e => setImage(e.target.value)}
          color="error"
          id="standard-textarea"
          label="Image"
          placeholder="Image"
          multiline
          variant="standard"
        />
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
         <TextField value={description}
          onChange={e => setDescription(e.target.value)}
          color="error"
          id="standard-textarea"
          label="Description"
          placeholder="Description"
          multiline
          variant="standard"
        />
        <TextField value={duration}
          onChange={e => setDuration(e.target.value)}
          color="error"
          id="standard-textarea"
          label="Duration"
          placeholder="Duration"
          multiline
          variant="standard"
        />
        <TextField value={director}
          onChange={e => setDirector(e.target.value)}
          color="error"
          id="standard-textarea"
          label="Director"
          placeholder="Director"
          multiline
          variant="standard"
        />
        <TextField value={dirImg}
          onChange={e => setDirImg(e.target.value)}
          color="error"
          id="standard-textarea"
          label="Director image"
          placeholder="Director image"
          multiline
          variant="standard"
        />
        </Box>
        </div>
       <Button onClick={buttonAdd} variant="contained" color='warning'>Add</Button>
    </Box>
    </main>
  );
}
