import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router.js';
import { SWRConfig } from 'swr';
import { fetcher } from './hooks/fetcher.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SWRConfig value={{ fetcher }}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </SWRConfig>
  </React.StrictMode>
);
