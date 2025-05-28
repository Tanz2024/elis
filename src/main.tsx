import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './i18n';

// Optional: Add Router if using react-router-dom
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root');

if (!root) throw new Error('Root element not found');

ReactDOM.createRoot(root).render(
  // 🔄 You can temporarily remove StrictMode if animations lag
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
