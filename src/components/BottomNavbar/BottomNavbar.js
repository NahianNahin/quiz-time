import React from 'react';
import { NavLink } from 'react-router-dom';

const BottomNavbar = () => {
    return (
        <div>
            <div className="btm-nav md:hidden">
                <NavLink to="/topics" className={({ isActive }) =>
                    isActive ? 'active text-primary' : undefined
                }>Topics</NavLink>
                <NavLink to="/statistics" className={({ isActive }) =>
                    isActive ? 'active text-primary' : undefined
                }>Statistic</NavLink>
                <NavLink to="/blogs" className={({ isActive }) =>
                    isActive ? 'active text-primary' : undefined
                }>Blogs</NavLink>
            </div>
        </div>
    );
};

export default BottomNavbar;