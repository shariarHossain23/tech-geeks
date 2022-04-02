import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './header.css';

const Header = () => {
    return (
        <div>
            <nav className='header'>
            <CustomLink to='/'>Home</CustomLink>
            </nav>
        </div>
    );
};

export default Header;