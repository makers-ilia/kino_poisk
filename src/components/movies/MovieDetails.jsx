import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMovies } from '../../context/MovieContextProvider';

// mui imports 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const MovieDetails = () => {
  const { id } = useParams();
  const { getMovieDetails, movieDetails, movies } = useMovies();


  const [cast, setCast] = useState('');
  const [img, setImg] = useState('');


useEffect(()=>{
  console.log(movies);
},[])



  useEffect(() => {
    setTimeout(() => {
      getMovieDetails(id);
    }, 1000)
  }, [])




  // setTimeout(() => {
  //   movieDetails.cast.forEach(element => {
      // console.log(element[0])
  //   });
  //   console.log(movieDetails);
  // }, 1000)
  



  // console.log(movieDetails.director);

  // console.log(movieDetails.cast);
  // setCast(movieDetails.cast.split(', '));

  // let cast = movieDetails.cast.split(', ');
  // console.log(del[1]);

  // let castImgs = movieDetails.castImg.split(', ')
  return (
  <>
    {movieDetails ? (
      <main style={{display: 'flex', justifyContent: 'space-around', marginTop: '5%'}}>
        <div className='left-block' style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <h3 style={{marginBottom: '2%'}}>{movieDetails.genre}</h3>
          <img src={movieDetails.image} width='400' alt="Movie image" />
        </div>
        <div className='right-block' style={{width: '50%'}}>
          <h2>{movieDetails.name}</h2>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
            </CardContent>
          </Card>
          <p>{movieDetails.description}</p>
        </div>
      </main>
    ) : ('')}
  </>
  )
}

export default MovieDetails