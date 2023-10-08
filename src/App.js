import { useState } from 'react';
import './App.css';
import Counter from './components/counter/Counter';
import GenreList from './components/genreList/GenreList';
import SearchBar from './components/searchBar/SearchBar';
import MovieTile from './components/movieTile/MovieTile';
import {FilmsStore} from './utils/constaints/FilmsStore';
import MovieDetails from './components/movieDetails/MovieDetails';
import SortDropdown from './components/sortDropdown/SortDropdown';
import Dialog from './components/dialog/Dialog';
import MovieForm from './components/movieForm/MovieForm';
import MovieListPage from './pages/MovieList/MovieList';



function App() {

  return (
    <div className="App">
      <MovieListPage></MovieListPage>
    </div>
  );
}

export default App;
