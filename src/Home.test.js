import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './components/Home';

test('renders welcome message', () => {
  render(<Home />);
  const welcomeElement = screen.getByText(/Welcome to blog/i);
  expect(welcomeElement).toBeInTheDocument();
});
