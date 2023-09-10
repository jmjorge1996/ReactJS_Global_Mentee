/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import GenreList from '../components/genreList/GenreList';

test('renders all genres passed in props', () => {
  const genres = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'];
  render(<GenreList items={genres} />);
  
  genres.forEach((genre) => {
    const genreElement = screen.getAllByText(genre);
    expect(genreElement.length).toBe(1);
  });
});

test('highlights a selected genre passed in props', () => {
    const genres = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'];
    const selectedGenre = 'DOCUMENTARY';
    render(<GenreList items={genres} itemSelected={selectedGenre} />);
    
    const selectedGenreElement = screen.getByText(selectedGenre);
    const parentElement = selectedGenreElement.parentElement
    expect(parentElement).toHaveClass('selected');
});

test('calls onChange callback with correct genre after a click event', () => {
    const genres = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'];
    const mockOnChange = jest.fn();
    render(<GenreList items={genres} onSelectCallback={mockOnChange} />);
    
    const genreToSelect = 'DOCUMENTARY';
    const genreElement = screen.getByText(genreToSelect);
    fireEvent.click(genreElement);
    
    expect(mockOnChange).toHaveBeenCalledWith(genreToSelect);
});