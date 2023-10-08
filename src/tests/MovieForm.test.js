import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieForm from '../components/movieForm/MovieForm';

describe('MovieForm', () => {
  test('renders movie form with input fields', () => {
    render(<MovieForm onSubmit={() => {}} />);

    const titleInput = screen.getByLabelText('TITLE');
    const releaseDateInput = screen.getByLabelText('RELEASE DATE');
    const movieUrlInput = screen.getByLabelText('MOVIE URL');
    const ratingInput = screen.getByLabelText('RATING');
    const genreInput = screen.getByLabelText('GENRE');
    const runtimeInput = screen.getByLabelText('RUNTIME');
    const sinopsisInput = screen.getByLabelText('SINOPSIS');

    expect(titleInput).toBeInTheDocument();
    expect(releaseDateInput).toBeInTheDocument();
    expect(movieUrlInput).toBeInTheDocument();
    expect(ratingInput).toBeInTheDocument();
    expect(genreInput).toBeInTheDocument();
    expect(runtimeInput).toBeInTheDocument();
    expect(sinopsisInput).toBeInTheDocument();

  });

});
