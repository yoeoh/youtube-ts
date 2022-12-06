import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CssBaseline } from '@mui/material';

import router from './router';

const queryProvider = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <CssBaseline />
    <QueryClientProvider client={queryProvider}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
