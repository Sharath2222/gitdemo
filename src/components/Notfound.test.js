import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import NotFound from './NotFound';



test('renders not found component with home link', () => {
  render(
    <Router>
      <NotFound />
    </Router>
  );

  expect(screen.getByText(/not found/i)).toBeInTheDocument();

  const homeLink = screen.getByRole('link', { name: /home/i });
  expect(homeLink).toBeInTheDocument();
  expect(homeLink).toHaveAttribute('href', '/');

});

