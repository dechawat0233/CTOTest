
import React from 'react';
import '../App.css'

import { NavLink } from 'react-router-dom';
function Menu() {
    return (
        <nav className="container mx-auto p-4 max-w-6xl">
            <ul className="list-none p-0 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-lg shadow-lg">
                <li className="inline-block mx-2 my-2 hover:bg-orange-600 hover:text-white rounded-lg transition-all duration-300 ease-in-out">
                    <NavLink
                        to="/register"
                        className={({ isActive }) =>
                            `px-4 py-2 block ${isActive ? 'bg-orange-600 text-white' : ''} rounded-lg`
                        }
                    >
                        เข้างาน
                    </NavLink>
                </li>
                <li className="inline-block mx-2 my-2 hover:bg-orange-600 hover:text-white rounded-lg transition-all duration-300 ease-in-out">
                    <NavLink
                        to="/admin"
                        className={({ isActive }) =>
                            `px-4 py-2 block ${isActive ? 'bg-orange-600 text-white' : ''} rounded-lg`
                        }
                    >
                        แอดมิน
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;
