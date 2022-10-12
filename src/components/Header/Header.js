
import { Link } from 'react-router-dom';
import './Header.css';
import { HomeIcon } from '@heroicons/react/24/solid';
const Header = () => {
    return (
        <div className='bg-slate-100'>
            <div className="navbar w-11/12 m-auto">
                <div className="flex-1 items-center">
                    
                    <Link to="/" className="normal-case text-3xl font-semibold text-primary">Quiz Time</Link>
                </div>
                <div className="flex-none hidden md:block">
                    <ul className="menu menu-horizontal p-0 ">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/topics">Topics</Link></li>
                        <li><Link to="/statistics">Statistics</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                    </ul>
                </div>
                <div>
                    <Link to="/"><HomeIcon className="h-6 w-6 text-primary md:hidden" /></Link>
                </div>

            </div>
        </div>
    );
};

export default Header;