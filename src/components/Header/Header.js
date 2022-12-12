import React from 'react';
import logo from '../../logo/newLogo.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt=''></img>
            <nav className='menu'>
                <a href='/home'>Home</a>
                <a href='/shop'>Shop</a>
                <a href='/categories'>Categories</a>
                <a href='/faq'>FaQ</a>
            </nav>
        </div>

    );
};

export default Header;