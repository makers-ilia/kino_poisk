import React from 'react'
import MainRoutes from './MainRoutes'
import AuthContextProvider from './context/AuthContextProvider';
// import MovieContextProvider from './context/MovieContextProvider'
import {BrowserRouter} from 'react-router-dom'

const App = () => {
  return (
    <>
    <BrowserRouter>
    {/* <MovieContextProvider> */}
      <AuthContextProvider>
        <MainRoutes/>
      </AuthContextProvider>
    {/* </MovieContextProvider> */}
    </BrowserRouter>
    </>
  )
}

export default App