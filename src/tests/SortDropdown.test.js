import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SortDropdown from '../components/sortDropdown/SortDropdown';

describe('SortDropdown', () => {
  const currentSelection = 'releaseDate';
  const onSelectionChange = jest.fn();

  test('renders sort dropdown with options', () => {
    render(
      <SortDropdown
        currentSelection={currentSelection}
        onSelectionChange={onSelectionChange}
      />
    );

    const label = screen.getByText('Sort by:');
    const select = screen.getByRole('combobox');
    const releaseDateOption = screen.getByText('Release Date');
    const titleOption = screen.getByText('Title');

    expect(label).toBeInTheDocument();
    expect(select).toBeInTheDocument();
    expect(releaseDateOption).toBeInTheDocument();
    expect(titleOption).toBeInTheDocument();
  });

  test('calls onSelectionChange when selection changes', () => {
    render(
      <SortDropdown
        currentSelection={currentSelection}
        onSelectionChange={onSelectionChange}
      />
    );

    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'title' } });

    expect(onSelectionChange).toHaveBeenCalledWith('title');
  });
});
