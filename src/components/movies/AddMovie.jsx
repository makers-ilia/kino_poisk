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
    if(!name.trim() || !age.trim() || !genre.trim() || !image.trim() || !description.trim()){
      alert('Some inputs are empty!');
      return;
    };

    let movieObj = {
      name,
      age,
      genre,
      year,
      image,
      description,
      duration,
      director,
      dirImg
    }

    // setMovie(movieObj);

    addMovie(movieObj);
    setName('');
    setAge('');
    setYear('');
    setGenre('');
    setImage('');
    setDescription('');
    setDuration('');
    setDirector('');
    setDirImg('');
    navigate('/movies');
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
        <TextField value={age}
          onChange={e => setAge(e.target.value)}
          id="standard-textarea"
          label="Age limit"
          placeholder="Age limit "
          multiline
          variant="standard"
        />
         <TextField value={genre}
          onChange={e => setGenre(e.target.value)}
          id="standard-textarea"
          label="Issue year"
          placeholder="Issue year"
          multiline
          variant="standard"
        />
        <TextField value={year}
          onChange={e => setYear(e.target.value)}
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
        <TextField value={duration}
          onChange={e => setDuration(e.target.value)}
          id="standard-textarea"
          label="Duration"
          placeholder="Duration"
          multiline
          variant="standard"
        />
        <TextField value={director}
          onChange={e => setDirector(e.target.value)}
          id="standard-textarea"
          label="Director"
          placeholder="Director"
          multiline
          variant="standard"
        />
        <TextField value={dirImg}
          onChange={e => setDirImg(e.target.value)}
          id="standard-textarea"
          label="Director image"
          placeholder="Director image"
          multiline
          variant="standard"
        />
       <Button onClick={buttonAdd} variant="outlined">Add</Button>
    </Box>
  );
}
