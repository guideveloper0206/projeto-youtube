import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { OpenMenu } from './contexts/OpenMenu';
import { CategoryProvider } from './contexts/searchCategories';
import { SearchProvider } from './contexts/searchContext';
import { ThemeProvider } from 'styled-components';
import { Theme } from './theme';


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <OpenMenu>
        <CategoryProvider>
          <SearchProvider>
              <App />
          </SearchProvider>
        </CategoryProvider>
      </OpenMenu>
    </ThemeProvider>
  </React.StrictMode>
);