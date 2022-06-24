import { Link } from 'react-router-dom';
import Header from './Header';


const Nav =()=>{
    return(
        <nav className="nav">
            <div className="active">
               <Header />
            </div>
            <ul>
                <li id="account" className='active'>
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