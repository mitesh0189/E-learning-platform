import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import '../css/Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [isloginned, setLoginStatus] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        setButton(window.innerWidth > 960);
    }

    const user = JSON.parse(localStorage.getItem('user-info'));

    const checkLogin = () => {
        const current = Math.round(Date.now() / 1000);
        if (user) {
            if (current > user.token.exp) {
                setLoginStatus(false);
                localStorage.removeItem('user-info');
            } else {
                setLoginStatus(true);
            }
        }
    }

    useEffect(() => {
        checkLogin();
        window.addEventListener('resize', showButton);
        return () => window.removeEventListener('resize', showButton); // Clean up event listener
    }, []);

    const myFunction = () => {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <Link to="/" className="navbar-logo">CreativeLive</Link>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            <i className="fas fa-home"></i> Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/courses' className='nav-links' onClick={closeMobileMenu}>
                            <i className="fas fa-book"></i> Courses
                        </Link>
                    </li>
                </ul>
                <div className='nav-menu-right'>
                    {/* <i className="fas fa-search"></i> */}
                    {/* <i className="far fa-bell"></i> */}
                    <Link to='/login' className='login-link'>
                        {button && !isloginned && <Button buttonStyle="btn--secondary" to="/login">Login</Button>}
                    </Link>
                    <Link to='/signup' className='signup-link'>
                        {button && !isloginned && <Button>Signup</Button>}
                    </Link>
                    <div className="dropdown">
                        {isloginned && <button className="circle" onClick={myFunction}>{user.token.data.name[0]}</button>}
                        {!isloginned && !button && <button className="circle" onClick={myFunction}><i className="fas fa-user"></i></button>}
                        <div id="myDropdown" className="dropdown-content">
                            {!isloginned && <Link to='/login' className='login-link'>Login</Link>}
                            {!isloginned && <Link to='/signup' className='login-link'>Sign Up</Link>}
                            {isloginned && <Link to='/instructor/mycourses' className='login-link'>Instructor</Link>}
                            {isloginned && <Link to='/myaccount' className='login-link'>My Account</Link>}
                            {isloginned && <Link to='/logout' className='login-link'>Logout</Link>}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
