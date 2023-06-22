import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const menuItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/skill'>Skills</Link></li>
        <li><Link to='/service'>Services</Link></li>
        <li><Link to='/project'>Projects</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
    </>

    return (
        <div className="navbar fixed z-10 max-w-6xl bg-cyan-900 text-sky-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">Asaduzzaman <span className='text-amber-500 ms-2'>Asad</span></Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItem}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;