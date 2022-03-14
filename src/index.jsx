import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyle } from './styles/global';
import { ThemeProvider } from 'styled-components';
import themes from './styles/themes';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import { Todo } from './pages/Todo';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={themes.light}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo/:id/:user" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
