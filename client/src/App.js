import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from "./Movies/Movie"
import MovieList from "./Movies/MovieList"
import SavedList from './Movies/SavedList';
import { Route } from 'react-router-dom'

export default function App () {

  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies') // Study this endpoint with Postman
        .then(response => {
          setMovieList(response.data)
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);
  
  console.log(movieList)
  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      
      <SavedList list={[ /* This is stretch */]} />

      <Route exact path="/">
        <MovieList movies={movieList}/>
      </Route>
      <Route path ="/movies/:id">
        <Movie/>
      </Route>
    </div>
  );
}
