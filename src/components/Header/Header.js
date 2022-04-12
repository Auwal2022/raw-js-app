import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <h2>Welcome to our React routes app!</h2>
            <nav>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/Friends">Friends</CustomLink>
                <CustomLink to="/About">About</CustomLink>
                <CustomLink to="/Posts">Posts</CustomLink>
            </nav>
        </div>
    );
};

export default Header;