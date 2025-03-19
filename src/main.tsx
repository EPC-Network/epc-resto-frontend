import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './app';

import './styles/globals.css';

import { Providers } from '@/components/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>,
);
