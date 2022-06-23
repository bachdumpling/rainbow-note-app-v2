import React from 'react';
// import { Link } from 'react-router-dom';
import Header from './Header'


const Nav =()=>{
    return(
        <nav className="nav">
            <div className="navbar-logo">
            </div>
            <div className="menu-icon">
            </div>
            <ul>
                <li>
                    <a href="/Header" className="site-title">
                    <Header />
                    </a>
                </li>
                <li className='active'>
                    <a href="/note">Note</a>
                </li>
                <li className='active'>
                    <a href="/about">About</a>
                </li>
            </ul>
           
        </nav>
    )
}

export default Nav;