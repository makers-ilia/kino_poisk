import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMovies } from '../../context/MovieContextProvider';

// mui imports 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const MovieDetails = () => {
  const { id } = useParams();
  const { getMovieDetails, movieDetails } = useMovies();

  useEffect(() => {
    getMovieDetails(id);
  }, [])


if(movieDetails){
  console.log(movieDetails.year);
}


  return (
  <>
    {movieDetails ? (
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '5%'}}>
        <main style={{display: 'flex', justifyContent: 'space-around', background: 'grey', opacity: '80%', width: '90%', borderRadius: '20px'}}>
          <div className='left-block' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <h2 style={{marginBottom: '2%'}}>{movieDetails.genre}</h2>
            <img src={movieDetails.image} style={{marginBottom: '8%', borderRadius: '20px'}} width='300' alt="Movie image" />
          </div>
          <div className='right-block' style={{width: '50%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div style={{width: '50%', alignSelf: 'start'}} className="inform">
            <h1 style={{fontSize: '42px', lineHeight: '60px'}}>{movieDetails.name}</h1>
            <h3 style={{marginTop: '2%', fontSize: '25px'}}>Release year: {movieDetails.year}</h3>
            <h3 style={{marginTop: '2%', fontSize: '25px'}}>Movie duration: {movieDetails.duration} minutes</h3>
            <p style={{fontSize: '20px', marginTop: '9%', lineHeight: '35px'}}>{movieDetails.description}</p>
            </div>
            <Card sx={{ maxWidth: 200, maxHeight: 400, margin: '5% 0px' }}>
      <CardMedia
        component="img"
        alt="director"
        image={movieDetails.dirImg}
        sx={{width: '15vw', height: '30vh'}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movieDetails.director}
        </Typography>
      </CardContent>
    </Card>
          </div>
        </main>
      </div>
    ) : ('')}
  </>
  )
}

export default MovieDetails