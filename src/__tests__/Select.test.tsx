import { fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';

import Select, { Option } from '../components/Select/Select';

jest.mock('../components/Select/Select.module.scss', () => ({
  container: 'container',
  label: 'label',
  label_focused: 'label_focused',
  selectWrapper: 'selectWrapper',
}));

jest.mock('../components/Select/CustomSelect/CustomSelect.module.scss', () => ({
  select: 'select',
  selected: 'selected',
  icon: 'icon',
  icon_rotate: 'icon_rotate',
}));

jest.mock('../components/Select/OptionsList/OptionList.module.scss', () => ({
  optionsList: 'optionsList',
  option: 'option',
}));

describe('Select Component', () => {
  const options: Option[] = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ];

  test('renders select component with label', () => {
    render(<Select label="Test Label" options={options} />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  test('opens options list on select click', () => {
    render(<Select options={options} />);
    const select = screen.getByRole('combobox');
    fireEvent.click(select);
    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });

  test('closes options list when clicking outside', () => {
    render(<Select options={options} />);
    const select = screen.getByRole('combobox');
    fireEvent.click(select);
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    fireEvent.blur(select);
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  test('selects an option and calls onChange', () => {
    const handleChange = jest.fn();
    render(<Select options={options} onChange={handleChange} />);

    fireEvent.click(screen.getByRole('combobox'));
    fireEvent.click(screen.getByText('Option 2'));

    expect(handleChange).toHaveBeenCalledWith({
      value: '2',
      label: 'Option 2',
    });
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  test('applies custom class name to select', () => {
    render(<Select options={options} customSelectClassName="custom-select" />);
    expect(screen.getByRole('combobox')).toHaveClass('custom-select');
  });
});
