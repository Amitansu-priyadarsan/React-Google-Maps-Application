// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18+
import './index.css';
import App from './App';
import { MapProvider } from './components/MapContext'; // Import MapProvider

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root
root.render(
  <MapProvider>
    <App />
  </MapProvider>
);
