import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieDetails from '../components/movieDetails/MovieDetails';

describe('MovieDetails', () => {
    const movie ={
        name: "The Lion King",
        releaseYear: "2019",
        runtime: "118 min",
        img: "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg",
        genres: ['Comedy'],
        sinopsis: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem est reprehenderit atque aperiam odio esse eaque, iure tenetur eveniet? Minima?"
    };

    test('renders movie details when item is provided', () => {
        render(<MovieDetails item={movie} />);
        
        const title = screen.getByText('The Lion King');
        const genres = screen.getByText('Comedy');
        const releaseYear = screen.getByText('2019');
        const runtime = screen.getByText('118 min');
        const sinopsis = screen.getByText('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem est reprehenderit atque aperiam odio esse eaque, iure tenetur eveniet? Minima?');
        
        expect(title).toBeInTheDocument();
        expect(genres).toBeInTheDocument();
        expect(releaseYear).toBeInTheDocument();
        expect(runtime).toBeInTheDocument();
        expect(sinopsis).toBeInTheDocument();
    });

    test('does not render anything when item is not provided', () => {
        const {container} = render(<MovieDetails item={null} />);
        
        expect(container.firstChild).toBeNull();
    });
});