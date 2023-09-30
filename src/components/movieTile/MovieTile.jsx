import React from 'react'
import './MovieTile.scss'
import MovieItem from '../movieItem/MovieItem'

const MovieTile = ({ items, onMovieItemCallback }) => {
  return (
    <div className="movie-tile__container">
      {items.map((movie, index) => (
        <MovieItem
          key={index}
          item={movie}
          onClickCallback={onMovieItemCallback}
        />
      ))}
    </div>
  )
}

export default MovieTile
