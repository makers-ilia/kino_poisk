import React, { useState, useEffect } from 'react';
import { useMovies } from '../../context/MovieContextProvider';
import { useNavigate, useParams } from 'react-router-dom';

// mui imports 
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



const EditMovie = () => {

  const { getMovieDetails, movieDetails, saveEditedMovie } = useMovies();
  

  const [movie, setMovie] = useState(movieDetails)

  const navigate = useNavigate();
  const { id } = useParams();


  useEffect(()=>{
    getMovieDetails(id)
  },[])

  useEffect(()=>{
    setMovie(movieDetails);
  },[movieDetails])


console.log(movieDetails);

const handleInp = e => {
      let obj = {
          ...movie,
          [e.target.name]: e.target.value
      };
      setMovie(obj)
}

  return (
    <>
    {movie ? (<Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' }, display: 'flex', justifyContent: 'center', marginTop: '5%', flexDirection: 'column', alignItems: 'center'
    }}
    noValidate
    autoComplete="off"
  >
    <h2>Edit movie</h2>
      <TextField
        name='name' 
        value={movie.name}
        onChange={handleInp}
        id="standard-textarea"
        label="Movie name"
        placeholder="Movie name "
        multiline
        variant="standard"
      />
       <TextField
        name='age'
        value={movie.age}
        onChange={handleInp}
        id="standard-textarea"
        label="Age limit"
        placeholder="Age limit"
        multiline
        variant="standard"
      />
       <TextField
        name='genre'
        value={movie.genre}
        onChange={handleInp}
        id="standard-textarea"
        label="Genre"
        placeholder="Genre"
        multiline
        variant="standard"
      />
      <TextField
          name='year'
          value={movie.year}
          onChange={handleInp}
          id="standard-textarea"
          label="Issue year"
          placeholder="Issue year"
          multiline
          variant="standard"
        />
      <TextField
        name='image' 
        value={movie.image}
        onChange={handleInp}
        id="standard-textarea"
        label="Image"
        placeholder="Image"
        multiline
        variant="standard"
      />
       <TextField
        name='description'
        value={movie.description}
        onChange={handleInp}
        id="standard-textarea"
        label="Description"
        placeholder="Description"
        multiline
        variant="standard"
      />
      <TextField
          name='duration' 
          value={movie.duration}
          onChange={handleInp}
          id="standard-textarea"
          label="Duration"
          placeholder="Duration"
          multiline
          variant="standard"
        />
        <TextField
          name='cast' 
          value={movie.cast}
          onChange={handleInp}
          id="standard-textarea"
          label="Cast"
          placeholder="Cast"
          multiline
          variant="standard"
        />
        <TextField
          name='castImg' 
          value={movie.castImg}
          onChange={handleInp}
          id="standard-textarea"
          label="Cast images"
          placeholder="Cast images"
          multiline
          variant="standard"
        />
     <Button onClick={() => {
      saveEditedMovie(movie)
      navigate('/movies')
     }} variant="outlined">Edit</Button>
  </Box>) : (<h3>loading</h3>)}
  </>
  )
}

export default EditMovie