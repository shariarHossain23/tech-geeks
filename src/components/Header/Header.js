import React from 'react';
import { useLocation } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './header.css';

const Header = () => {
    const {pathname} = useLocation()
    return (
        <div style={pathname.includes('blog') ? {display:'none'}:{display:'flex'}} className='header'>
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