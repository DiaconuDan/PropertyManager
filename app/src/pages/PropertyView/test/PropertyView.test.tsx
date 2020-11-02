import React from 'react';
import { render, screen } from '@testing-library/react';
 
import PropertyView from '../PropertyView';
 
describe('PageView', () => {
  test('renders  correctly', () => {
    render(<PropertyView />);
 
    // Title
    expect(screen.getByText('Applicants')).toBeInTheDocument();

    // The boxes from PageHeader
    expect(screen.getByText('Total')).toBeInTheDocument();
    expect(screen.getByText('New')).toBeInTheDocument();
    expect(screen.getByText('Viewed')).toBeInTheDocument();
    expect(screen.getByText('Appointment')).toBeInTheDocument();
    expect(screen.getByText('Others')).toBeInTheDocument();

    // Buttons
    expect(screen.getByText('Bids')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();

    // SearchInput
    expect(screen.getByPlaceholderText('Search for applicant')).toBeInTheDocument();

  });
});