import React, { useEffect, useState } from 'react';
import { useMovies } from '../../context/MovieContextProvider';
import MovieCard from './MovieCard';
import { useSearchParams } from 'react-router-dom';

const MoviesList = () => {
    const { movies, getMovies } = useMovies();

    useEffect(() => {
      getMovies()
    }, [])

  return (
    <div>
      {movies ? movies.map(item => (
          <MovieCard key={item.id} item={item} />
        )) : (
        <h3>Loading...</h3>
      )}
    </div>
  )
}

export default MoviesList