import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import PropType from 'prop-types';
import { render as rtlRender } from '@testing-library/react';
import {dark} from '../src/themes';

const render = (component, { theme = dark, ...props } = {}) => {
  const Wrapper = ({ children }) => (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
  
  Wrapper.propTypes = {
    children: PropType.node,
  };
  return rtlRender(component, { wrapper: Wrapper, ...props })
}

export * from '@testing-library/react';
export { render };