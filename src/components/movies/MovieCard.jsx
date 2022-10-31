import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMovies } from '../../context/MovieContextProvider';
import { useAuth } from '../../context/AuthContextProvider';
import { useFav } from '../../context/FavContextProvider';


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
  const { addMovieToFav } = useFav();

  const { deleteMovie } = useMovies();
 const { user} = useAuth();

  return (
    <div  id='productCard' style={{margin: '1%',zIndex: '2'}}>
      {/* {item.name} {item.price}
      <button onClick={() => navigate(`/details/${item.id}`)}>Details</button>
      <button onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
      <button onClick={() => deleteProduct(`${item.id}`)}>Delete</button>
      <button>Add to cart</button> */}
      <Card sx={{ maxWidth: 300, minWidth: 300, minHeight: 450, maxHeight: 450, color: 'orange', background: 'black', border: '3px solid orange', borderRadius: '20px', paddingTop: '8%' }} >
      <CardMedia
        component="img"
        style={{width: '11vw', height: '20vh', margin: 'auto', borderRadius: '10px'}}
        image={item.image}
        alt="product picture"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography gutterBottom variant="p" component="div">
          {item.genre}
        </Typography>
        <Typography style={{fontSize: '12px', color: 'orange'}} variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions style={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
        <Button sx={{paddingLeft: '2vw', margin: '0px'}} onClick={() => navigate(`/details/${item.id}`)} size="small"><img height="30" width="30" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Information_orange.svg/2032px-Information_orange.svg.png" alt="" /></Button>
        {user.isAdmin === true ? (
        <><Button sx={{padding: '0px', margin: '0px'}} onClick={() => navigate(`/edit/${item.id}`)} size="small">
          <img src="https://icon-library.com/images/edit-pencil-icon/edit-pencil-icon-12.jpg" width="40" height="40" alt="" />
        </Button>
        <Button sx={{padding: '0px', margin: '0px'}} onClick={() => deleteMovie(item.id)} size="small">
          <img src="https://cdn2.iconfinder.com/data/icons/ios-7-tab-bar-icons/500/trash-512.png" width="30" height="30" alt="" /></Button></>) : ('')}
        
        <Button onClick={() => addMovieToFav(item)} sx={{paddingRight: '2vw', margin: '0px'}} size="small">
          <img src="https://icon-library.com/images/bookmark-icon-png/bookmark-icon-png-16.jpg" width="30" height="30" alt="" />
        </Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default MovieCard