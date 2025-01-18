import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Menu from './menu/menu.jsx';
import Register from './Component/Register.jsx';
import Admin from './Component/Admin.jsx';
import { AppProvider } from './AppContext';

const Main = () => {
  return (
    <StrictMode>
      <AppProvider>
        <Router>
          <Menu />
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Router>
      </AppProvider>
    </StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<Main />);

