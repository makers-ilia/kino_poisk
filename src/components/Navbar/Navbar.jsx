import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

//custom
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContextProvider';
import { useEffect } from 'react';
import { useMovies } from '../../context/MovieContextProvider';
import FilterMovie from '../movies/FilterMovie';


const pages = [
  {
    type: 'Movies',
    path: '/movies'
  },
  {
    type: 'Favourites',
    path: '/fav'
  }
];
const settings = [
    {
      type: 'Register',
      path: '/register'
    },
    {
      type: 'Login',
      path: '/login'
    }
];




function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  React.useEffect(() => {
    getUserFromStorage();
    // console.log('qwert');
  }, [])

  const navigate = useNavigate()
  const { initStorage } = useAuth();

  useEffect(() => {
    initStorage()
  }, [])

  const { getUserFromStorage, user, logout } = useAuth();


  const {movies, getMovies} = useMovies()
  
  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    if(localStorage.getItem("user")){
      console.log(user);
  };
  }, [])
 
  const [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch] = useState(searchParams.get("q") || "")

  useEffect(()=>{
    setSearchParams({
      q: search
    })
    }, [search]);

    useEffect(()=>{
      getMovies()
      }, [searchParams, ]);

  
  // let userObj = JSON.parse(localStorage.getItem('user'))
  // console.log(user.isAdmin);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));


  return (


    <AppBar sx={{backgroundColor: '#03101c'}} position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'orange',
              textDecoration: 'none',
            }}
          >
            KinoPoisk
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.type} onClick={() => navigate(page.path)}>
                  <Typography textAlign="center">{page.type}</Typography>
                </MenuItem>
              ))}
              <MenuItem>
                <FilterMovie />
              </MenuItem>
              {user.isAdmin === true ? (
                <MenuItem>
                <Typography onClick={() => navigate('/add')} textAlign="center">Add Movie</Typography>
              </MenuItem>
              ) : (
                ''
              )}
              
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.type}
                onClick={() => navigate(page.path)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.type}
              </Button>
            ))}
            <MenuItem>
                <FilterMovie />
              </MenuItem>
            {user.isAdmin === true ? (
                <MenuItem>
                <Typography onClick={() => navigate('/add')} textAlign="center">Add Movie</Typography>
              </MenuItem>
              ) : (
                ''
              )}
          </Box>
          <Box style={{marginRight: '2%'}}>
          <input className='put' type="text" value={search} onChange={(e) => {setSearch(e.target.value); navigate("/movies")}} placeholder='Search...' />
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://i.pinimg.com/originals/ee/c0/71/eec071442e9a1b8e017c5a7c1853b880.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.type} onClick={() => navigate(setting.path)}>
                  <Typography textAlign="center">{setting.type}</Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar