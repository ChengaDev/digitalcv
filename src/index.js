import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import theme from './theme/theme';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,

  document.querySelector('#root')
);
