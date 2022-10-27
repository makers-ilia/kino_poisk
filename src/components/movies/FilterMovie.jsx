import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { useMovies } from '../../context/MovieContextProvider';

export default function FilterMovie() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    // fetchByParams('genre', event.target.value)
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    // fetchByParams('genre', event.target.value);
    setAnchorEl(null);
  };

  const { fetchByParams } = useMovies()

  return (
    <div>
      <Button
        sx={{color: 'white'}}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Genre
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={(e) => fetchByParams('genre', e.target.value)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem value='all' onClick={handleClose}>All</MenuItem>
        <MenuItem value='drama' onClick={handleClose}>Drama</MenuItem>
        <MenuItem value='cartoons' onClick={handleClose}>Cartoons</MenuItem>
        <MenuItem value='bio' onClick={handleClose}>Biography</MenuItem>
        <MenuItem value='detective' onClick={handleClose}>Detective</MenuItem>
        <MenuItem value='horror' onClick={handleClose}>Horror</MenuItem>
        <MenuItem value='comedy' onClick={handleClose}>Comedy</MenuItem>
        <MenuItem value='fantasy' onClick={handleClose}>Fantasy</MenuItem>
        <MenuItem value='adults' onClick={handleClose}>For Adults</MenuItem>
      </Menu>
    </div>
  );
}
