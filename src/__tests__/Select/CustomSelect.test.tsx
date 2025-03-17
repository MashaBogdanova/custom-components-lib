import { fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';

import CustomSelect from '../../components/Select/CustomSelect/CustomSelect';

jest.mock(
  '../../components/Select/CustomSelect/CustomSelect.module.scss',
  () => ({
    select: 'select',
    selected: 'selected',
    icon: 'icon',
    icon_rotate: 'icon_rotate',
  })
);

describe('CustomSelect Component', () => {
  test('renders CustomSelect component', () => {
    render(
      <CustomSelect
        isOpen={false}
        setOpen={jest.fn()}
        isSelected={false}
        selectedValue=""
      />
    );
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  test('opens on click', () => {
    const setOpen = jest.fn();
    render(
      <CustomSelect
        isOpen={false}
        setOpen={setOpen}
        isSelected={false}
        selectedValue=""
      />
    );
    fireEvent.click(screen.getByRole('combobox'));
    expect(setOpen).toHaveBeenCalledWith(true);
  });

  test('displays selected value when isSelected is true', () => {
    render(
      <CustomSelect
        isOpen={false}
        setOpen={jest.fn()}
        isSelected={true}
        selectedValue="Option 1"
      />
    );
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  test('rotates icon on click', () => {
    render(
      <CustomSelect
        isOpen={false}
        setOpen={jest.fn()}
        isSelected={false}
        selectedValue=""
      />
    );
    const icon = screen.getByText('▼');
    fireEvent.click(icon);
    expect(icon).toHaveClass('icon_rotate');
  });

  test('applies custom class name', () => {
    render(
      <CustomSelect
        isOpen={false}
        setOpen={jest.fn()}
        isSelected={false}
        selectedValue=""
        customClassName="custom-select"
      />
    );
    expect(screen.getByRole('combobox')).toHaveClass('custom-select');
  });
});
