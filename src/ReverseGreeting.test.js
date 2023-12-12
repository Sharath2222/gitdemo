import React from 'react';
import { render, screen } from '@testing-library/react';
import ReverseGreetings from './components/ReverseGreetings';
test('renders ReverseGreetings component with correct reversed greeting', () => {
  const testName = 'John';

  render(<ReverseGreetings name={testName} />);

  const greetingElement = screen.getByText(`Hello, nhoJ!`);

  expect(greetingElement).toBeInTheDocument();
});
