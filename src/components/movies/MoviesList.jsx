import React, { useEffect, useState } from 'react';
import { useMovies } from '../../context/MovieContextProvider';
import MovieCard from './MovieCard';
import { useSearchParams } from 'react-router-dom';
import { Pagination } from '@mui/material';

const MoviesList = () => {
    const { movies, getMovies } = useMovies();

    useEffect(() => {
      getMovies()
    }, [])

 // pagination 
 const [page, setPage] = useState(1);

 const itemsOnPage = 6;

 const count = Math.ceil(movies.length / itemsOnPage);

 const handlePage = (e, p) => {
   setPage(p);
 };

 function currentData(){
   const begin = (page - 1) * itemsOnPage;
   const end = begin + itemsOnPage;
   return movies.slice(begin, end);
 }

  return (
    <div>
      
      {movies ? movies.map(item => (
          <MovieCard key={item.id} item={item} />
        )) : (
        <h3>Loading...</h3>
      )}
      <Pagination count={count} page={page} onChange={handlePage} />
    </div>
  )
}

export default MoviesList