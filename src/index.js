import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CompanyProvider } from './contexts/CompanyContext';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CompanyProvider>
      <App />
    </CompanyProvider>
  </React.StrictMode>
);
