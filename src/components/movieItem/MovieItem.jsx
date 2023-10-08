import React from 'react'
import './MovieItem.scss'

const MovieItem = ({item, onClickCallback}) => {

  const handleClick = () => {
    onClickCallback(item)
  }

  return (
    <div className='movie-item__container' onClick={handleClick}>
      <img src={item.poster_path} alt={item.title} />
      <div className="movie-item__name-year-container">
        <span className='movie-item__name'>{item.title}</span>
        <span className='movie-item__year'>{item.release_date}</span>
      </div>
      <div className="movie-item__genres-container">
        {item.genres.join(', ')}
      </div>
    </div>
  )
}

export default MovieItem
