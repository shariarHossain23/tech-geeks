import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import './header.css';

const Header = () => {
    const navigate = useNavigate()
    const {pathname} = useLocation()
    const [currentUser,setUser] = useState({});
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
                setUser({})
            }
          });
    },[])
    const handleLogout = () =>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
          navigate("/login")
    }
    return (
        <div style={pathname.includes('blog') ? {display:'none'}:{display:'flex'}} className='header'>
            <h1>Tech Geeks</h1>
            <nav className='navbar'>
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/videos'>Videos</CustomLink>
            {currentUser?.email ? <button className='logout' onClick={handleLogout}>Logout</button> :
                <CustomLink to='/login'>Login</CustomLink>
            }
            </nav>
        </div>
    );
};

export default Header;