import React, { useEffect, useState } from 'react';
import { useMovies } from '../../context/MovieContextProvider';
import MovieCard from './MovieCard';
import { useSearchParams } from 'react-router-dom';
import { Pagination } from '@mui/material';
import { WidthNormal } from '@mui/icons-material';

const MoviesList = () => {
    const { movies, getMovies } = useMovies();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
      getMovies()
    }, [])

    useEffect(() => {
      getMovies()
    }, [searchParams]);



 // pagination 
 const [page, setPage] = useState(1);

 const itemsOnPage = 4;

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
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
      {movies ? currentData().map(item => (
          <MovieCard key={item.id} item={item} />
        )) : (
        <h3>Loading...</h3>
      )}
      </div> 
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <div style={{display: 'flex', justifyContent: 'center', background: 'grey', width: '15vw', borderRadius: '10px', opacity: '80%'}}>
      <Pagination count={count} page={page} onChange={handlePage} />
      </div>
      </div>
    </div>
  )
}

export default MoviesList