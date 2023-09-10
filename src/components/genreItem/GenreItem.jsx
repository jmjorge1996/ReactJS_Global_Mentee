import React from 'react'
import './GenreItem.scss'

const GenreItem = ({name, isSelected, onSelectCallback}) => {

  const handleClick = () => {
    onSelectCallback(name)
  }

  return (
    <div className={`genre-item__container ${isSelected ? 'selected' : ''}`} onClick={handleClick}>
      <span className='genre-item__name'>{name}</span>
    </div>
  )
}

export default GenreItem
