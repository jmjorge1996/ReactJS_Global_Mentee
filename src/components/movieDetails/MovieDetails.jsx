import React from 'react'
import './MovieDetails.scss'

const MovieDetails = ({item}) => {

    console.log('item', item)

    return (
        item && <div className="movie-detail__main-container">
            <div className="movie-detail__img-container">
                <img src={item.poster_path} alt={item.title} />
            </div>
            <div className="movie-detail__metadata-container">
                <h2 className="movie-detail__title">{item.title}</h2>
                <div className="movie-detail__genres-container">
                    {item.genres.join(', ')}
                </div>
                <div className="movie-detail__year-runtime-container">
                    <span>{item.release_date}</span>
                    <span>{item.runtime}</span>
                </div>
                <p className="movie-detail__sinopsis">{item.overview}</p>
            </div>
        </div>
    )
}

export default MovieDetails
