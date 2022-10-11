
import { Link } from 'react-router-dom';
import Quiz from '../../Quiz-time.png';
import './Header.css';
const Header = () => {
    return (
        <div className='bg-slate-100'>
            <div className="navbar w-11/12 m-auto">
                <div className="flex-1">
                    {/* <img src={Quiz} alt="" /> */}
                    <Link to="/" className="normal-case text-2xl">Quiz Time</Link>
                </div>
                <div className="flex-none hidden md:block">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to="/">Topics</Link></li>
                        <li><Link to="/statistics">Statistics</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;