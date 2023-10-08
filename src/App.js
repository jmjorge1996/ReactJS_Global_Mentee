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



function App() {

  const [movieSelected, setMovieSelected] = useState('')

  const [genreListProps, setGenreListProps] = useState({
    items: ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'],
    itemSelected: 'ALL'
  })

  const [dropdownSelection, setDropdownSelection] = useState('releaseDate')

  const [isAddMovieOpen, setAddMovieOpen] = useState(false);

  const [isDeleteMovieOpen, setDeleteMovieOpen] = useState(false);

  const handleDeleteMovieClick = () => {
    setDeleteMovieOpen(true);
  };

  const handleDeleteMovieConfirm = () => {
    console.log('Movie deleted');
    setDeleteMovieOpen(false);
  };

  const handleAddMovieClick = () => {
    setAddMovieOpen(true);
  };

  const handleAddMovieSubmit = (formData) => {
    console.log('Form data:', formData);
    setAddMovieOpen(false);
  };

  const [isEditMovieOpen, setEditMovieOpen] = useState(false);

  const handleEditMovieClick = () => {
    setEditMovieOpen(true);
  };

  const handleEditMovieSubmit = (formData) => {
    // Aquí puedes manejar el envío de datos del formulario, por ejemplo, enviar a la API
    console.log('Form data:', formData);
    setEditMovieOpen(false);
  };

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
      <div className='app_buttons-portals-main-container'>
        <button onClick={handleAddMovieClick}>Add Movie</button>
        <button onClick={handleEditMovieClick}>Edit Movie</button>
        <button onClick={handleDeleteMovieClick}>Delete Movie</button>
        {isAddMovieOpen && (
          <Dialog title="Add Movie" onClose={() => setAddMovieOpen(false)}>
            <MovieForm onSubmit={handleAddMovieSubmit} />
          </Dialog>
        )}
        {isEditMovieOpen && (
          <Dialog title="Edit Movie" onClose={() => setEditMovieOpen(false)}>
            <MovieForm
              initialMovieInfo={movieSelected}
              onSubmit={handleEditMovieSubmit}
            />
          </Dialog>
        )}
        {isDeleteMovieOpen && (
          <Dialog title="Delete Movie" onClose={() => setDeleteMovieOpen(false)}>
            <p>Are you sure you want to delete this movie?</p>
            <button className='app_delete-movie-btn' onClick={handleDeleteMovieConfirm}>Delete</button>
          </Dialog>
        )}
        <div id="portal-root"></div>
      </div>

    </div>
  );
}

export default App;
