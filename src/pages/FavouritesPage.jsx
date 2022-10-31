import React, { useEffect } from 'react';
import { useFav } from '../context/FavContextProvider';

// mui imports 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const FavouritesPage = () => {
  const { getFav, fav } = useFav();

  useEffect(() => {
    getFav()
  }, [])

  return (
    <>
      {fav?.movies.map((elem) => (
      <Card key={elem.name} sx={{ maxWidth: 240, minWidth: 200, minHeight: 450, maxHeight: 450, color: 'orange', background: 'black', border: '3px solid orange', borderRadius: '20px', paddingTop: '8%' }} >
        <>
        <CardMedia
        component="img"
        style={{width: '11vw', height: '20vh', margin: 'auto', borderRadius: '10px'}}
        image={elem.item.image}
        alt="product picture" />
      <CardContent>
        <Typography  gutterBottom variant="h5" component="div">
          {elem.item.name}
        </Typography>
        <div  style={{fontSize: '12px', color: 'orange'}} variant="body2" color="text.secondary">
          {elem.item.description}
        </div>
      </CardContent>
      </>
      {/* <CardActions style={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
        <Button sx={{paddingLeft: '2vw', margin: '0px'}} onClick={() => navigate(`/details/${item.id}`)} size="small"><img height="30" width="30" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Information_orange.svg/2032px-Information_orange.svg.png" alt="" /></Button>
        {user.isAdmin === true ? (
          <><Button sx={{padding: '0px', margin: '0px'}} onClick={() => navigate(`/edit/${item.id}`)} size="small">
          <img src="https://icon-library.com/images/edit-pencil-icon/edit-pencil-icon-12.jpg" width="40" height="40" alt="" />
          </Button>
          <Button sx={{padding: '0px', margin: '0px'}} onClick={() => deleteMovie(item.id)} size="small">
          <img src="https://cdn2.iconfinder.com/data/icons/ios-7-tab-bar-icons/500/trash-512.png" width="30" height="30" alt="" /></Button></>) : ('')}
          
          <Button sx={{paddingRight: '2vw', margin: '0px'}} size="small">
          <img src="https://icon-library.com/images/bookmark-icon-png/bookmark-icon-png-16.jpg" width="30" height="30" alt="" />
          </Button>
        </CardActions> */}
    </Card>
        ))}
    </>
  )
}

export default FavouritesPage