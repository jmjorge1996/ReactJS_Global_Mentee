import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchBar from '../components/searchBar/SearchBar'; 

test('renders an input with the value equal to initial value passed in props', () => {
  render(<SearchBar initialQuery="Test Query" />);
  const inputElement = screen.getByPlaceholderText('What do you want to watch?');
  expect(inputElement).toHaveValue('Test Query');
});

test('after typing to the input and clicking Submit button, onChange prop is called with proper value', () => {
  const mockOnSearchCallback = jest.fn();
  render(<SearchBar onSearchCallback={mockOnSearchCallback} />);
  const inputElement = screen.getByPlaceholderText('What do you want to watch?');
  const submitButton = screen.getByText('SEARCH');

  fireEvent.change(inputElement, { target: { value: 'Test Query' } });
  fireEvent.click(submitButton);

  expect(mockOnSearchCallback).toHaveBeenCalledWith('Test Query');
});

test('after typing to the input and pressing Enter key, onChange prop is called with proper value', () => {
    const mockOnSearchCallback = jest.fn();
    render(<SearchBar onSearchCallback={mockOnSearchCallback} />);
    const inputElement = screen.getByPlaceholderText('What do you want to watch?');
  
    fireEvent.change(inputElement, { target: { value: 'Test Query' } });
    fireEvent.submit(inputElement);
  
    expect(mockOnSearchCallback).toHaveBeenCalledWith('Test Query');
});

