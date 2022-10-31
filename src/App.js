import React, {useEffect} from 'react'
import MainRoutes from './MainRoutes'
import AuthContextProvider from './context/AuthContextProvider';
import MovieContextProvider from './context/MovieContextProvider'
import {BrowserRouter} from 'react-router-dom'
import FavContextProvider from './context/FavContextProvider';

const App = () => {
  return (
    <>
    <FavContextProvider>
    <BrowserRouter>
    <MovieContextProvider>
      <AuthContextProvider>
        <MainRoutes/>
      </AuthContextProvider>
    </MovieContextProvider>
    </BrowserRouter>
    </FavContextProvider>
    </>
  )
}

export default App