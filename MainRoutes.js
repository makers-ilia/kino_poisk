import React from 'react'
import { Routes, Route} from 'react-router-dom'
import RegistrationPage from './src/pages/RegistrationPage'
import Navbar from './src/components/Navbar/Navbar'
import LoginPage from './src/pages/LoginPage'
import AdminPage from './src/pages/AdminPage'
import EditedMovie from './src/pages/EditedMovie'
import FavouritesPage from './src/pages/FavouritesPage'
import HomePage from './src/pages/HomePage'
import MovieDetailsPage from './src/pages/MovieDetailsPage'
import MoviesPage from './src/pages/MoviesPage'
import NotFoundPage from './src/pages/NotFoundPage'

const MainRoutes = () => {
  return (
    <>
  <Navbar/>
  <Routes>
    <Route path='/register' element={<RegistrationPage/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='*' element={<NotFoundPage/>}/>
    <Route path='/add' element={<AdminPage/>}/>
    <Route path='/edit/:id' element={<EditedMovie/>}/>
    <Route path='/fav' element={<FavouritesPage/>}/>
    <Route path='/movies' element={<MoviesPage/>}/>
    <Route path='/details/:id' element={<MovieDetailsPage/>}/>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/cart' element={<HomePage/>}/>

  </Routes>
  </>
  )
}

export default MainRoutes