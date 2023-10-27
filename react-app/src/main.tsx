import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.scss';
import Greeting from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Greeting />
  </React.StrictMode>
);
