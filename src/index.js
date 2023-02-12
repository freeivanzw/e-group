import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './store';
import {ThemeProvider} from 'styled-components';
import {theme} from './theme/theme';
import {Global} from './components/App/AppStyled';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const BASE_URL = process.env.PUBLIC_URL;

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Global/>
        <App />
      </Provider>
    </ThemeProvider>
  </BrowserRouter>
);
