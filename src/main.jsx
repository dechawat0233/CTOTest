import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Menu from './menu/menu.jsx';
import Register from './Component/Register.jsx';
import Admin from './Component/Admin.jsx';

const Main = () => {
  const [users, setUsers] = useState([
    { Fname: 'John', Lname: 'Doe', phone: '1234567895' },
    { Fname: 'Jane', Lname: 'Smith', phone: '9876543210' },
  ]);
    const [seats, setSeats] = useState(10); 

  return (
    <StrictMode>
      <Router>
        <Menu />
        <Routes>
          {/* ส่ง users และ setUsers เป็น props ให้ Register */}
          <Route path="/register" element={<Register users={users} setUsers={setUsers} seats={seats} />} />
          <Route path="/admin" element={<Admin users={users} seats={seats} setSeats={setSeats}/>} />
        </Routes>
      </Router>
    </StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<Main />);

