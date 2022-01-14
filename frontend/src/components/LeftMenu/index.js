import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import './LeftMenu.css';
import appleLogo from '../../images/soundApple.jpeg'

function LeftMenu({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (

            <NavLink activeClassName='active' to="/my-music"><i className="fas fa-play"></i>  My Music </NavLink>
        );
    }

    return (
        <div className='navOptions'>
            <img className='menuImg' alt="logo" src={appleLogo} />
            <input className='inputLeftMenu' type="text" placeholder='Search' />
            <NavLink exact activeClassName='active' to="/"><i className="fas fa-home"></i>  Home </NavLink>
            <NavLink activeClassName='active' to="/library"><i className="fas fa-book-open"></i>  Library</NavLink>

            {isLoaded && sessionLinks}
            <hr />

            <p className='SalesPitch'>Thank you for listening, sign up or demo for more fun </p>
            <hr />
            <div className='external-links'>
                <a href='https://github.com/ta-cos' target='_blank'> <i className="fab fa-github-square"></i> </a>
                <a href='https://linkedin.com/in/nathan-treadaway' target='_blank'> <i className="fab fa-linkedin"></i> </a>
            </div>
        </div>
    );
}

export default LeftMenu;
