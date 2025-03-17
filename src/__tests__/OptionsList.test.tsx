import { fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';

import OptionsList from '../components/Select/OptionsList/OptionsList';

jest.mock('../components/Select/OptionsList/OptionList.module.scss', () => ({
  optionsList: 'optionsList',
  option: 'option',
}));

describe('OptionsList Component', () => {
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ];
  const handleSelect = jest.fn();

  test('renders options list', () => {
    render(
      <OptionsList
        options={options}
        handleSelect={handleSelect}
        initialValue=""
      />
    );
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    expect(screen.getAllByRole('option')).toHaveLength(3);
  });

  test('renders custom class names', () => {
    render(
      <OptionsList
        options={options}
        handleSelect={handleSelect}
        initialValue=""
        customListClassName="custom-list"
        customListItemClassName="custom-item"
      />
    );
    expect(screen.getByRole('listbox')).toHaveClass('custom-list');
    expect(screen.getAllByRole('option')[0]).toHaveClass('custom-item');
  });

  test('calls handleSelect when an option is clicked', () => {
    render(
      <OptionsList
        options={options}
        handleSelect={handleSelect}
        initialValue=""
      />
    );
    fireEvent.click(screen.getByText('Option 2'));
    expect(handleSelect).toHaveBeenCalledWith({
      value: '2',
      label: 'Option 2',
    });
  });

  test('marks the initial selected value', () => {
    render(
      <OptionsList
        options={options}
        handleSelect={handleSelect}
        initialValue="2"
      />
    );
    expect(screen.getByText('Option 2')).toHaveAttribute(
      'aria-selected',
      'true'
    );
  });
});
