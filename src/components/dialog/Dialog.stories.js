import React from 'react';
import { action } from '@storybook/addon-actions';
import Dialog from './Dialog';
import MovieForm from '../movieForm/MovieForm';

export default {
    title: 'React Mentee/Dialog & MovieForm',
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
};

const initialMovieInfo = {
    name: "The Lion King",
    releaseYear: "2019",
    runtime: "118 min",
    rating: 7.9,
    url: "www.google.es",
    img: "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg",
    genres: ['Comedy'],
    sinopsis: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem est reprehenderit atque aperiam odio esse eaque, iure tenetur eveniet? Minima?"
};

export const AddMovie = () => (
    <div>
        <Dialog title="Add Movie" onClose={action('Close')}>
            <MovieForm onSubmit={action('Submit')} />
        </Dialog>
        <div id="portal-root"></div>
    </div>
);

export const EditMovie = () => (
    <div>
        <Dialog title="Edit Movie" onClose={action('Close')}>
            <MovieForm initialMovieInfo={initialMovieInfo} onSubmit={action('Submit')} />
        </Dialog>
        <div id="portal-root"></div>
    </div>
);

export const DeleteMovie = () => (
    <div>
        <Dialog title="Delete Movie" onClose={action('Close')}>
            <p>Are you sure you want to delete this movie?</p>
            <button onClick={action('Delete')}>Delete</button>
        </Dialog>
        <div id="portal-root"></div>
    </div>
);