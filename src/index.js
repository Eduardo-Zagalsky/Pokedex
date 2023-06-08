import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Pokedex from './pokedex';

const App = () => (
  <div>
    <Pokedex />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);