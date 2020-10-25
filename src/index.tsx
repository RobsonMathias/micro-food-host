import React from 'react';
import ReactDOM from 'react-dom';
import { start } from 'single-spa';
import App from './App';

declare global {
  interface Window {
    System: any;
    singleSpaNavigate: any;
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

start();
