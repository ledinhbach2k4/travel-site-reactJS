import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Button from './Button';
import './Navbar.scss';

function Navbar() {
  // states
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  // following function will handle toggling the click state variable value.
  const handleHamburgerClick = () => {
    return setClick(!click); // toggle menu
  };
  
  const closeMobileMenu = () => {
    return setClick(false); // close menu
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  
  window.addEventListener('resize', showButton); // execute on resize.

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            TRAVEL-SITE <i className="fab fa-typo3"></i>
          </Link>
          
          {/* Hamburger Icon for Mobile */}
          <div className="menu-icon">
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} onClick={handleHamburgerClick}></i>
          </div>
          
          {/* Navigation Links */}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Trang chủ 
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                Dịch vụ
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                Sản phẩm
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/destinations" className="nav-links" onClick={closeMobileMenu}>
                All Destinations
              </Link>
            </li>
            {/* Sign Up Dropdown Menu */}
            <li className="nav-item dropdown">
              <span className="nav-links dropdown-toggle" onClick={(e) => e.preventDefault()}>
                Tài khoản <i className="fas fa-caret-down"></i>
              </span>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/login" className="dropdown-link" onClick={closeMobileMenu}>
                    Đăng nhập
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="dropdown-link" onClick={closeMobileMenu}>
                    Đăng kí
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
       
        </div>
      </nav>
    </>
  );
}

export default Navbar;
