import React from 'react';
import { NavLink } from 'react-router-dom';

const BottomNavbar = () => {
    return (
        <div>
            <div className="btm-nav md:hidden">
                <NavLink to="/" className={({ isActive }) =>
                    isActive ? 'active text-primary' : undefined
                }>Topics</NavLink>
                <NavLink to="/statistics" className={({ isActive }) =>
                    isActive ? 'active text-primary' : undefined
                }>Statistic</NavLink>
                <NavLink to="/blog" className={({ isActive }) =>
                    isActive ? 'active text-primary' : undefined
                }>Blog</NavLink>
            </div>
        </div>
    );
};

export default BottomNavbar;