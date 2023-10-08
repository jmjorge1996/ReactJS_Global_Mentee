import React from 'react'
import './MovieList.scss'
import SearchBar from '../../components/searchBar/SearchBar'
import GenreList from '../../components/genreList/GenreList'
import SortDropdown from '../../components/sortDropdown/SortDropdown'
import MovieTile from '../../components/movieTile/MovieTile'

import { useState } from 'react'
import axios from 'axios';
import MovieDetails from '../../components/movieDetails/MovieDetails'


const MovieListPage = () => {
    const [movieSelected, setMovieSelected] = useState(undefined)

    const [genreListProps, setGenreListProps] = useState({
        items: ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'],
        itemSelected: 'ALL'
    })

    const [movies, setMovies] = useState([])

    const [dropdownSelection, setDropdownSelection] = useState('releaseDate')

    const [isAddMovieOpen, setAddMovieOpen] = useState(false);

    const [isDeleteMovieOpen, setDeleteMovieOpen] = useState(false);

    const handleDeleteMovieClick = () => {
        setDeleteMovieOpen(true);
    };

    const handleDeleteMovieConfirm = () => {
        console.log('Movie deleted');
        setDeleteMovieOpen(false);
    };

    const handleAddMovieClick = () => {
        setAddMovieOpen(true);
    };

    const handleAddMovieSubmit = (formData) => {
        console.log('Form data:', formData);
        setAddMovieOpen(false);
    };

    const [isEditMovieOpen, setEditMovieOpen] = useState(false);

    const handleEditMovieClick = () => {
        setEditMovieOpen(true);
    };

    const handleEditMovieSubmit = (formData) => {
        // Aquí puedes manejar el envío de datos del formulario, por ejemplo, enviar a la API
        console.log('Form data:', formData);
        setEditMovieOpen(false);
    };

    const onSearchCallback = (query) => {
        axios.get(`http://localhost:4000/movies?search=${query}&searchBy=title`)
            .then((response) => {
                const {data} = response
                console.log('response', response)
                setMovies(data.data);
            })
            .catch((error) => {
                alert('ERROR')
                console.log('error', error)
            });
        console.log(`Query: ${query}`)
    }

    const onSelectCallback = (name) => {
        console.log(`Genre name: ${name}`)
        setGenreListProps({...genreListProps, itemSelected: name})
    }

    const onMovieItemCallback = (name) => {
        setMovieSelected(name)
    }

    const onSelectionChange = (dropdownSelection) => {
        setDropdownSelection(dropdownSelection)
    }

    return (
        <div className='movie-list-main-container'>
        <div className="ml-header">
            <h1>FIND YOUR MOVIE</h1>
            <SearchBar onSearchCallback={onSearchCallback}></SearchBar>
            {movieSelected && <MovieDetails item={movieSelected}></MovieDetails>}
        </div>
        <div className="ml-filterbar">
            <GenreList items={genreListProps.items} itemSelected={genreListProps.itemSelected} onSelectCallback={onSelectCallback}></GenreList>
            <SortDropdown currentSelection={dropdownSelection} onSelectionChange={onSelectionChange}></SortDropdown>
        </div>
        <div className="ml-movietile">
            <MovieTile items={movies} onMovieItemCallback={onMovieItemCallback}></MovieTile>
        </div>
        </div>
    )
}

export default MovieListPage
