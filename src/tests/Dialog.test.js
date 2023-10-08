import React from 'react';
import { render, screen } from '@testing-library/react';
import Dialog from '../components/dialog/Dialog';

describe('Dialog', () => {
  test('renders dialog with title and content', () => {
    render(
        <div>
            <Dialog title="Test Dialog" onClose={() => {}}>
                <p>Dialog Content</p>
            </Dialog>
            <div id="portal-root"></div>
        </div>

    );

    const titleElement = screen.getByText('Test Dialog');
    const contentElement = screen.getByText('Dialog Content');

    expect(titleElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  });
});
