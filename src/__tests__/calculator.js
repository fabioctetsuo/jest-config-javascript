import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../calculator';

test('the clear button switcher from AC to C when where is an entry', () => {
  const { getByText } = render(<Calculator />)
  const clearButton = getByText('AC');

  fireEvent.click(getByText(/3/));
  expect(clearButton).toHaveTextContent('C');

  fireEvent.click(clearButton);
  expect(clearButton).toHaveTextContent('AC');
});