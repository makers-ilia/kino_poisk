import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMovies } from '../../context/MovieContextProvider';
import { authContext, useAuth } from '../../context/AuthContextProvider';


// mui imports 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { height } from '@mui/system';


const MovieCard = ({ item }) => {
  const navigate = useNavigate();

  const { deleteMovie } = useMovies();
 const { user} = useAuth();

  return (
    <div  id='productCard' style={{margin: '1%',zIndex: '2'}}>
      {/* {item.name} {item.price}
      <button onClick={() => navigate(`/details/${item.id}`)}>Details</button>
      <button onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
      <button onClick={() => deleteProduct(`${item.id}`)}>Delete</button>
      <button>Add to cart</button> */}
      <Card sx={{ maxWidth: 340, minWidth: 300, minHeight: 550, maxHeight: 550 }} >
      <CardMedia
        component="img"
        height="200"
        image={item.image}
        alt="product picture"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {item.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {item.genre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.director}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => navigate(`/details/${item.id}`)} size="small">Details</Button>
        {user.isAdmin === true ? (
        <><Button onClick={() => navigate(`/edit/${item.id}`)} size="small">Edit</Button>
        <Button onClick={() => deleteMovie(item.id)} size="small">Delete</Button></>) : ('')}
        
        <Button size="small">Add to cart</Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default MovieCard