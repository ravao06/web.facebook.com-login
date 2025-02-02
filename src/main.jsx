import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router
import './index.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/web.facebook.c0m/login" />} /> */}
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </StrictMode>
);
