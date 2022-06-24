//import { getValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'


const Nav =()=>{
    return(
        <nav className="nav">
            <div className="header">
                <Header />
            </div>
            <ul>
                <li id="account" class='active'>
                    <Link to="/LoginContainer">Account</Link>
                </li>    
                <li id="note" className='active'>
                    <Link to="/note">Note</Link>
                </li>
                <li className='active'>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;