import React from 'react';
import { Link } from 'react-router-dom';
import Quiz from '../../Quiz-time.png';
import './Header.css';

const Header = () => {
    return (
        <div className='w-11/12 m-auto'>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    {/* <img src={Quiz} alt="" /> */}
                    <Link to="/" className="btn btn-ghost normal-case text-xl">Quiz Time</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to="/">Topics</Link></li>
                        <li><Link to="/statistics">Statistics</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;