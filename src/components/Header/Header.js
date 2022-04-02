import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './header.css';

const Header = () => {
    return (
        <div className='header'>
            <h1>Tech Geeks</h1>
            <nav className='navbar'>
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/videos'>Videos</CustomLink>
            <CustomLink to='/login'>Login</CustomLink>
            </nav>
        </div>
    );
};

export default Header;