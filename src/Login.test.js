import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AuthProvider,useAuth } from './components/Auth';

// Mocking the consumer component for testing useContext
const ConsumerComponent = () => {
  const { user, login, logout } = useAuth();

  return (
    <div>
      <span data-testid="user">{user}</span>
      <button onClick={() => login('test1')} data-testid="loginButton">Login</button>
      <button onClick={logout} data-testid="logoutButton">Logout</button>
    </div>
  );
};

describe('AuthContext', () => {
  test('provides the Auth context with initial values', () => {
    render(
      <AuthProvider>
        <ConsumerComponent />
      </AuthProvider>
    );

    const userElement = screen.getByTestId('user');
    const loginButton = screen.getByTestId('loginButton');
    const logoutButton = screen.getByTestId('logoutButton');

    expect(userElement.textContent).toBe('');
    expect(loginButton).toBeInTheDocument();
    expect(logoutButton).toBeInTheDocument();
  });

  test(' user login and logout', () => {
    render(
      <AuthProvider>
        <ConsumerComponent />
      </AuthProvider>
    );

    const userElement = screen.getByTestId('user');
    const loginButton = screen.getByTestId('loginButton');
    const logoutButton = screen.getByTestId('logoutButton');

   
    userEvent.click(loginButton);
    expect(userElement.textContent).toBe('test1');

   
    userEvent.click(logoutButton);
    expect(userElement.textContent).toBe('');
  });
});
