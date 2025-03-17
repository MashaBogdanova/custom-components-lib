import { fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';

import Switch from '../components/Switch/Switch';

jest.mock('../components/Switch/Switch.module.scss', () => ({
  switch: 'switch',
  disabled: 'disabled',
  input: 'input',
  slider: 'slider',
  slider_checked: 'slider_checked',
}));

describe('Switch Component', () => {
  test('renders Switch component', () => {
    render(<Switch />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  test('renders with defaultChecked', () => {
    render(<Switch defaultChecked={true} />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  test('toggles state on click', () => {
    render(<Switch />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  test('does not toggle when disabled', () => {
    render(<Switch disabled={true} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  test('calls onChange when toggled', () => {
    const handleChange = jest.fn();
    render(<Switch onChange={handleChange} />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith(true);
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith(false);
  });

  test('applies custom class name', () => {
    render(<Switch customClassName="custom-switch" />);
    expect(screen.getByRole('checkbox').nextSibling).toHaveClass(
      'custom-switch'
    );
  });
});
