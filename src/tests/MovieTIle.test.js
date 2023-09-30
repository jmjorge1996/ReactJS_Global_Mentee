import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieTile from '../components/movieTile/MovieTile';

describe('MovieTile', () => {
  const movies = [
    {
        name: "The Lion King",
        releaseYear: "2019",
        runtime: "118 min",
        img: "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg",
        genres: ['Comedy'],
        sinopsis: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem est reprehenderit atque aperiam odio esse eaque, iure tenetur eveniet? Minima?"
    },
    {
        name: "Mowgli: Legend of the Jungle",
        releaseYear: "2018",
        runtime: "104 min",
        img: "https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg",
        genres: ['Comedy'],
        sinopsis: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem est reprehenderit atque aperiam odio esse eaque, iure tenetur eveniet? Minima?"
    },
  ];

  test('renders movie items', () => {
    render(<MovieTile items={movies} />);
    
    const movie1Name = screen.getByText('The Lion King');
    const movie2Name = screen.getByText('Mowgli: Legend of the Jungle');
    
    expect(movie1Name).toBeInTheDocument();
    expect(movie2Name).toBeInTheDocument();
  });
});