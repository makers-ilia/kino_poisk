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
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={(e) => fetchByParams('genre', e.target.innerText)}>All</MenuItem>
        <MenuItem onClick={(e) => fetchByParams('genre', e.target.innerText)}>Drama</MenuItem>
        <MenuItem onClick={(e) => fetchByParams('genre', e.target.innerText)}>Cartoons</MenuItem>
        <MenuItem onClick={(e) => fetchByParams('genre', e.target.innerText)}>Biography</MenuItem>
        <MenuItem onClick={(e) => fetchByParams('genre', e.target.innerText)}>Detective</MenuItem>
        <MenuItem onClick={(e) => fetchByParams('genre', e.target.innerText)}>Horror</MenuItem>
        <MenuItem onClick={(e) => fetchByParams('genre', e.target.innerText)}>Comedy</MenuItem>
        <MenuItem onClick={(e) => fetchByParams('genre', e.target.innerText)}>Fantasy</MenuItem>
        <MenuItem onClick={(e) => fetchByParams('genre', e.target.innerText)}>For Adults</MenuItem>
      </Menu>
    </div>
  );
}
