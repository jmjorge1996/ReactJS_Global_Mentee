import React from 'react'
import './MovieItem.scss'

const MovieItem = ({item, onClickCallback}) => {

  const handleClick = () => {
    onClickCallback(item)
  }

  return (
    <div className='movie-item__container' onClick={handleClick}>
      <img src={item.img} alt={item.name} />
      <div className="movie-item__name-year-container">
        <span className='movie-item__name'>{item.name}</span>
        <span className='movie-item__year'>{item.releaseYear}</span>
      </div>
      <div className="movie-item__genres-container">
        {item.genres.join(', ')}
      </div>
    </div>
  )
}

export default MovieItem
