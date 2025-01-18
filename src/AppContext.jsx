import React, { createContext, useContext, useState } from 'react';

// สร้าง Context
const AppContext = createContext();

// สร้าง Provider
export const AppProvider = ({ children }) => {
    const [users, setUsers] = useState([
        { Fname: 'John', Lname: 'Doe', phone: '1234567895' },
        { Fname: 'Jane', Lname: 'Smith', phone: '9876543210' },
    ]);
    const [seats, setSeats] = useState(10);

    return (
        <AppContext.Provider value={{ users, setUsers, seats, setSeats }}>
            {children}
        </AppContext.Provider>
    );
};

// สร้าง Custom Hook เพื่อใช้งาน Context
export const useAppContext = () => {
    return useContext(AppContext);
};
