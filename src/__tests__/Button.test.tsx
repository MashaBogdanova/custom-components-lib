import { fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';

import Button, { DEFAULT_BUTTON_PROPS } from '../components/Button/Button';

jest.mock('../components/Button/Button.module.scss', () => ({
  button: 'button',
  contained: 'contained',
  outlined: 'outlined',
  text: 'text',
  small: 'small',
  medium: 'medium',
  large: 'large',
  disabled: 'disabled',
  ripple: 'ripple',
}));

describe('Button component', () => {
  it('renders button with default props', () => {
    render(<Button />);

    const button = screen.getByRole('button', {
      name: DEFAULT_BUTTON_PROPS.value,
    });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', DEFAULT_BUTTON_PROPS.type);
    expect(button).toHaveClass('button', 'contained', 'medium');
  });

  it('renders button with custom props', () => {
    render(
      <Button value="Click Me" variant="outlined" size="large" type="submit" />
    );

    const button = screen.getByRole('button', { name: 'Click Me' });
    expect(button).toHaveAttribute('type', 'submit');
    expect(button).toHaveClass('button', 'outlined', 'large');
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} />);

    const button = screen.getByRole('button', {
      name: DEFAULT_BUTTON_PROPS.value,
    });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} disabled />);

    const button = screen.getByRole('button', {
      name: DEFAULT_BUTTON_PROPS.value,
    });
    fireEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it('applies disabled styles when disabled', () => {
    render(<Button disabled />);

    const button = screen.getByRole('button', {
      name: DEFAULT_BUTTON_PROPS.value,
    });
    expect(button).toBeDisabled();
    expect(button).toHaveClass('disabled');
  });

  it('applies autofocus when set', () => {
    render(<Button autofocus />);

    const button = screen.getByRole('button', {
      name: DEFAULT_BUTTON_PROPS.value,
    });
    expect(document.activeElement).toBe(button);
  });

  it('applies custom customStyles', () => {
    render(<Button customStyle={{ color: 'red' }} />);

    const button = screen.getByRole('button', {
      name: DEFAULT_BUTTON_PROPS.value,
    });

    expect(button).toHaveStyle({ color: 'red' });
  });

  it('applies customClassName correctly', () => {
    const { container } = render(<Button customClassName="my-custom-class" />);
    const button = container.querySelector('button');
    expect(button).toHaveClass('my-custom-class');
  });

  it('triggers ripple effect when clicked', () => {
    render(<Button />);

    const button = screen.getByRole('button', {
      name: DEFAULT_BUTTON_PROPS.value,
    });
    fireEvent.click(button);

    expect(button).toHaveClass('ripple');

    setTimeout(() => {
      expect(button).not.toHaveClass('ripple');
    }, 600);
  });
});
