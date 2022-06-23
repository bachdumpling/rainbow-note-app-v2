import React from 'react';
import { Link } from 'react-router-dom';

const NavBar =()=>{
    return(
        <div>
            <ul>
                <li>
                    <Link to="/App">Home</Link>
                </li>
                <li>
                    <Link to="/Note">Note</Link>
                </li>
                <li>
                    <Link to="/Login">Account</Link>
                </li>
            </ul>
        </div>
    )

}

export default NavBar;