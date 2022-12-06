import React from 'react';
import ReactDOM from 'react-dom/client';

// Config routing
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Config redux
import { Provider } from 'react-redux';
import { store } from './redux/configStore';

// Component
import Template from './Template/Template';
import Burger from './Page/Burger/Burger';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Template />}>
          <Route index element={<Burger />}></Route>
          <Route path='*' element={<Navigate to="/" />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>

);


