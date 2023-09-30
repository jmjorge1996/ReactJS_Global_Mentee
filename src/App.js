import { useState } from 'react';
import './App.css';
import Counter from './components/counter/Counter';
import GenreList from './components/genreList/GenreList';
import SearchBar from './components/searchBar/SearchBar';
import MovieTile from './components/movieTile/MovieTile';
import {FilmsStore} from './utils/constaints/FilmsStore';
import MovieDetails from './components/movieDetails/MovieDetails';
import SortDropdown from './components/sortDropdown/SortDropdown';



function App() {

  const [movieSelected, setMovieSelected] = useState('')

  const [genreListProps, setGenreListProps] = useState({
    items: ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'],
    itemSelected: 'ALL'
  })

  const [dropdownSelection, setDropdownSelection] = useState('releaseDate')

  const onSearchCallback = (query) => {
    console.log(`Query: ${query}`)
  }

  const onSelectCallback = (name) => {
    console.log(`Genre name: ${name}`)
    setGenreListProps({...genreListProps, itemSelected: name})
  }

  const onMovieItemCallback = (name) => {
    setMovieSelected(name)
  }

  const onSelectionChange = (dropdownSelection) => {
    setDropdownSelection(dropdownSelection)
  }

  return (
    <div className="App">
      <Counter initialValue="1"></Counter>
      <SearchBar initialQuery="Volver" onSearchCallback={onSearchCallback}></SearchBar>
      <div className='app_genres-sort-main-container'>
        <GenreList items={genreListProps.items} itemSelected={genreListProps.itemSelected} onSelectCallback={onSelectCallback}></GenreList>
        <SortDropdown currentSelection={dropdownSelection} onSelectionChange={onSelectionChange}></SortDropdown>
      </div>
      <MovieTile items={FilmsStore} onMovieItemCallback={onMovieItemCallback}></MovieTile>
      <MovieDetails item={movieSelected}></MovieDetails>
    </div>
  );
}

export default App;
