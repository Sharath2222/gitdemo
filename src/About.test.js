import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './components/About';

describe('About Component', () => {
  test('renders About Us heading', () => {
    render(<About />);
    const headingElement = screen.getByRole('heading', { name: /About Us/i });
    expect(headingElement).toBeInTheDocument();
  });

  test('renders Mission section', () => {
    render(<About />);
    const missionHeading = screen.getByRole('heading', { name: /Our Mission/i });
    const missionText = screen.getByText(/Our mission is to educate, inspire, and entertain our readers/i);
    
    expect(missionHeading).toBeInTheDocument();
    expect(missionText).toBeInTheDocument();
  });



 
// test('renders Contact Us section with contact information', () => {
//     render(<About />);
//     const contactHeading = screen.getByRole('heading', { name: /Contact Us/i });
//     const emailText = screen.getByText(/Email: info@example.com/i);
//     const phoneText = screen.getByText(/PhoneNumber: 123456789/i);
//     const addressText = screen.getByText(/Address:Goregaon,Mumbai/i);
  
//     expect(contactHeading).toBeInTheDocument();
//     expect(emailText).toBeInTheDocument();
//     expect(phoneText).toBeInTheDocument();
//     expect(addressText).toBeInTheDocument();
//   });
 
  
});
