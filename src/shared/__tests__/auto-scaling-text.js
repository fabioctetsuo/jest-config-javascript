import React from 'react';
import { render } from '@testing-library/react';
import AutoScalindText from '../auto-scaling-text';

test('Must render AutoScalingText', () => {
  const { debug } = render(<AutoScalindText />);
  console.log(debug());
})