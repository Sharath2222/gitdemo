import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Comments from './Comments';

test('renders comments component with input and button', () => {
  render(<Comments />);

  expect(screen.getByText(/nice/i)).toBeInTheDocument();

  const commentInput = screen.getByPlaceholderText(/enter comment/i);
  expect(commentInput).toBeInTheDocument();

  const addButton = screen.getByRole('button', { name: /add comment/i });
  expect(addButton).toBeInTheDocument();

});

test('allows user to add a new comment', () => {
  render(<Comments />);

  const commentInput = screen.getByPlaceholderText(/enter comment/i);

  const addButton = screen.getByRole('button', { name: /add comment/i });

  fireEvent.change(commentInput, { target: { value: 'Awesome' } });
  fireEvent.click(addButton);

  expect(screen.getByText(/awesome/i)).toBeInTheDocument();
});

