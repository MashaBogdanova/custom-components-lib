import { fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';

import TextField from '../components/TextField/TextField';

jest.mock('../components/TextField/TextField.module.scss', () => ({
  textfield: 'textfield',
  outlined: 'outlined',
  filled: 'filled',
  standard: 'standard',
  error: 'error',
  label: 'label',
  label_focused: 'label_focused',
  input: 'input',
}));

describe('TextField Component', () => {
  test('renders TextField component with label', () => {
    render(<TextField label="Test Label" />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  test('renders placeholder only when focused', () => {
    render(<TextField placeholder="Enter text..." />);
    const input = screen.getByRole('textbox');
    expect(input).not.toHaveAttribute('placeholder', 'Enter text...');
    fireEvent.focus(input);
    expect(input).toHaveAttribute('placeholder', 'Enter text...');
    fireEvent.blur(input);
    expect(input).not.toHaveAttribute('placeholder', 'Enter text...');
  });

  test('updates value on input change', () => {
    const handleChange = jest.fn();
    render(<TextField onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Hello' } });
    expect(handleChange).toHaveBeenCalledWith('Hello');
    expect(input).toHaveValue('Hello');
  });

  test('applies error class when error is true', () => {
    render(<TextField error={true} />);
    expect(screen.getByRole('textbox').parentElement).toHaveClass('error');
  });

  test('applies custom class names', () => {
    render(
      <TextField
        customTextFieldClassName="custom-textfield"
        customInputClassName="custom-input"
        customLabelClassName="custom-label"
      />
    );
    expect(screen.getByRole('textbox').parentElement).toHaveClass(
      'custom-textfield'
    );
    expect(screen.getByRole('textbox')).toHaveClass('custom-input');
    expect(screen.getByTestId('textfield-label')).toHaveClass('custom-label');
  });

  test('focuses label when input is focused or has value', () => {
    render(<TextField label="Test Label" />);
    const label = screen.getByTestId('textfield-label');

    expect(label).not.toHaveClass('label_focused');

    fireEvent.focus(screen.getByRole('textbox'));
    expect(label).toHaveClass('label_focused');

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Some text' },
    });
    expect(label).toHaveClass('label_focused');
  });
});
