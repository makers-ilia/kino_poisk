import React, { useContext, useState } from "react";

const favContext = React.createContext();
export const useFav = () => useContext(favContext);


const FavContextProvider= ({ children }) => {
    const [fav, setFav] = useState(JSON.parse(localStorage.getItem("fav")));

    const getFav = () => {
        let fav = JSON.parse(localStorage.getItem("fav"));

        if(!fav){
        localStorage.setItem("fav", JSON.stringify({movies: []}));
        }

        // fav = {
        //     movies: []
        // };

        setFav(fav);
    }


    const addMovieToFav = (movie) => {
        let fav = JSON.parse(localStorage.getItem("fav"));

        if(!fav){
            fav = {
                movies: []
            }
        };

        let newMovie = {
            item: movie
        }

        let movieToFind = fav.movies.filter(
            (elem) => elem.item.id === movie.id
        );

        if(movieToFind.length === 0){
            fav.movies.push(newMovie);
        }else{
            fav.movies = fav.movies.filter(
                (elem) => elem.item.id !== movie.id
            );
        };

        localStorage.setItem("fav", JSON.stringify(fav));

        console.log('clicked', fav);

        setFav(fav)
    }

    const values = {
        fav,

        getFav,
        addMovieToFav
    }

    return (
        <favContext.Provider value={values}>
            { children }
        </favContext.Provider>
    )
}

export default FavContextProvider