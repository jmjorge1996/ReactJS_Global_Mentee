import './App.css';
import Counter from './components/counter/Counter';
import SearchBar from './components/searchBar/SearchBar';

function App() {

  const onSearchCallback = (query) => {
    console.log(`Query: ${query}`)
  }

  return (
    <div className="App">
      <Counter initialValue="1"></Counter>
      <SearchBar initialQuery="Volver" onSearchCallback={onSearchCallback}></SearchBar>
    </div>
  );
}

export default App;
