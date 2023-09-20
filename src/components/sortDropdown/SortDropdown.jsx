import React from 'react'
import './SortDropdown.scss';

const SortDropdown = ({currentSelection, onSelectionChange}) => {
  return (
    <div className="sort-dropdown-container">
        <label className="label">Sort by:</label>
        <select
          className="select" 
          value={currentSelection}
          onChange={(e) => onSelectionChange(e.target.value)}
        >
          <option value="releaseDate">Release Date</option>
          <option value="title">Title</option>
        </select>
    </div>
  )
}

export default SortDropdown
