import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { CounterContextProvider } from './hooks/counter-context.tsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CounterContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CounterContextProvider>
  </React.StrictMode>
);
