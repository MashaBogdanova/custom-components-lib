import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import Checkbox from '../components/Checkbox/Checkbox';

jest.mock('../components/Checkbox/Checkbox.module.scss', () => ({
  checkbox: 'mock-checkbox',
  input: 'mock-input',
  label: 'mock-label',
}));

describe('Checkbox Component', () => {
  it('renders with label', () => {
    render(<Checkbox label="Test Checkbox" />);
    expect(screen.getByText('Test Checkbox')).toBeInTheDocument();
  });

  it('renders as checked when checked is true', () => {
    render(<Checkbox checked={true} />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('renders as unchecked when checked is false', () => {
    render(<Checkbox checked={false} />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('disables the checkbox when disabled is true', () => {
    render(<Checkbox disabled={true} />);
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });

  it('calls onChange when clicked', () => {
    const handleChange = jest.fn();
    render(<Checkbox onChange={handleChange} />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('does not call onChange when disabled', () => {
    const handleChange = jest.fn();
    render(<Checkbox disabled={true} onChange={handleChange} />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(handleChange).not.toHaveBeenCalled();
  });
});
