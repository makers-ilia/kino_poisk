import React from 'react'
import { Routes, Route} from 'react-router-dom'
import RegistrationPage from './pages/RegistrationPage'
import Navbar from './components/Navbar/Navbar'
import LoginPage from './pages/LoginPage'
import AdminPage from './pages/AdminPage'
import EditedMovie from './pages/EditedMovie'
import FavouritesPage from './pages/FavouritesPage'
import HomePage from './pages/HomePage'
import MovieDetailsPage from './pages/MovieDetailsPage'
import MoviesPage from './pages/MoviesPage'
import NotFoundPage from './pages/NotFoundPage'
import Background from './components/Background'

const MainRoutes = () => {
  return (
    <>
  <Navbar/>
  <Background />
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
  </Routes>
  </>
  )
}

export default MainRoutes