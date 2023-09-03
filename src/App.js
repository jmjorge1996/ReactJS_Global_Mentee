import { useState } from 'react';
import './App.css';
import Counter from './components/counter/Counter';
import GenreList from './components/genreList/GenreList';
import SearchBar from './components/searchBar/SearchBar';

function App() {

  const [genreListProps, setGenreListProps] = useState({
    items: ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'],
    itemSelected: 'ALL'
  })

  const onSearchCallback = (query) => {
    console.log(`Query: ${query}`)
  }

  const onSelectCallback = (name) => {
    console.log(`Genre name: ${name}`)
    setGenreListProps({...genreListProps, itemSelected: name})
  }

  return (
    <div className="App">
      <Counter initialValue="1"></Counter>
      <SearchBar initialQuery="Volver" onSearchCallback={onSearchCallback}></SearchBar>
      <GenreList items={genreListProps.items} itemSelected={genreListProps.itemSelected} onSelectCallback={onSelectCallback}></GenreList>
    </div>
  );
}

export default App;
