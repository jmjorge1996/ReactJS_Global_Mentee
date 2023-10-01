import React from 'react'
import './MovieDetails.scss'

const MovieDetails = ({item}) => {

    return (
        item && <div className="movie-detail__main-container">
            <div className="movie-detail__img-container">
                <img src={item.img} alt={item.name} />
            </div>
            <div className="movie-detail__metadata-container">
                <h2 className="movie-detail__title">{item.name}</h2>
                <div className="movie-detail__genres-container">
                    {item.genres.join(', ')}
                </div>
                <div className="movie-detail__year-runtime-container">
                    <span>{item.releaseYear}</span>
                    <span>{item.runtime}</span>
                </div>
                <p className="movie-detail__sinopsis">{item.sinopsis}</p>
            </div>
        </div>
    )
}

export default MovieDetails
