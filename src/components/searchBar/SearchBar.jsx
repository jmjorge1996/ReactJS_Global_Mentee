import React, { useState } from 'react'
import './SearchBar.scss'

const SearchBar = ({ initialQuery, onSearchCallback }) => {

  const [searchBarFormData, setSearchBarFormData] = useState({
    query: initialQuery || ''
  })

  const handleInputChange = (event) => {
    const {name, value} = event.target
    setSearchBarFormData({...searchBarFormData, [name]: value})
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const {query} = searchBarFormData
    onSearchCallback(query)
  };

  return (
    <div>
      <form className="searchbar__main-container" onSubmit={handleSubmit}>
        <input
          className='searchbar__input'
          type="text"
          name="query"
          placeholder="What do you want to watch?"
          value={searchBarFormData.query}
          onChange={handleInputChange}
        />
        <button className='searchbar__btn' type="submit">SEARCH</button>
      </form>
    </div>
  );
}

export default SearchBar
