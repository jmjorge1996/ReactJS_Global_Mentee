import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Counter from '../components/counter/Counter'; // Provide the correct path to your Counter component

test('renders initial value provided in props', () => {
  render(<Counter initialValue={5} />);
  const countElement = screen.getByText('Count: 5');
  expect(countElement).toBeInTheDocument();
});

test('clicking "decrement" button decrements the displayed value', () => {
  render(<Counter initialValue={10} />);
  const decrementButton = screen.getByText('Decrement');
  const countElement = screen.getByText('Count: 10');

  fireEvent.click(decrementButton);

  expect(countElement).toHaveTextContent('Count: 9');
});

test('clicking "increment" button increments the displayed value', () => {
  render(<Counter initialValue={3} />);
  const incrementButton = screen.getByText('Increment');
  const countElement = screen.getByText('Count: 3');

  fireEvent.click(incrementButton);

  expect(countElement).toHaveTextContent('Count: 4');
});
