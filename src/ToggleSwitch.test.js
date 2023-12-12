import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ToggleSwitch from './components/ToggleSwitch';

test('renders ToggleSwitch component with initial state', () => {
  render(<ToggleSwitch />);
  
  const initialSwitchState = screen.getByText('Switch is Off');
  const toggleButton = screen.getByText('Toggle');

  expect(initialSwitchState).toBeInTheDocument();
  expect(toggleButton).toBeInTheDocument();
});

test('toggles switch state when the button is clicked', () => {
  render(<ToggleSwitch />);

  const toggleButton = screen.getByText('Toggle');
  fireEvent.click(toggleButton);

  const updatedSwitchState = screen.getByText('Switch is On');

  expect(updatedSwitchState).toBeInTheDocument();
});

test('toggles switch state back when the button is clicked again', () => {
  render(<ToggleSwitch />);

  const toggleButton = screen.getByText('Toggle');
  fireEvent.click(toggleButton);

  const updatedSwitchState = screen.getByText('Switch is On');
  expect(updatedSwitchState).toBeInTheDocument();

  fireEvent.click(toggleButton);

  const revertedSwitchState = screen.getByText('Switch is Off');
  expect(revertedSwitchState).toBeInTheDocument();
});
