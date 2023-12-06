import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { CounterContextProvider } from './hooks/counter-context.tsx';
import { SessionContextProvider } from './hooks/session-context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CounterContextProvider>
      <SessionContextProvider>
        <App />
      </SessionContextProvider>
    </CounterContextProvider>
  </React.StrictMode>
);
