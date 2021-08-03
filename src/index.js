import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BreweryProvider } from './store';

ReactDOM.render(
  <React.StrictMode>
    <BreweryProvider>
      <App />
    </BreweryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
