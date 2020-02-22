import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import theme from './theme/theme';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.prod';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.querySelector('#root')
);
