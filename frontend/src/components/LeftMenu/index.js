import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import './LeftMenu.css';
import appleLogo from '../../images/soundApple.jpeg'
import Home from '../Home';

function LeftMenu({ isLoaded }) {
    // const sessionUser = useSelector(state => state.session.user);

    // let sessionLinks;
    // if (sessionUser) {
    //     sessionLinks = (
    //         <ProfileButton user={sessionUser} />
    //     );
    // } else {
    //     sessionLinks = (
    //         <>
    //             <LoginFormModal />
    //             <SignUpFormModal />
    //         </>
    //     );
    // }

    return (
        <div className='navOptions'>
            <img src={appleLogo} />
            <input className='inputLeftMenu' type="text" placeholder='Search' />
            <NavLink exact activeClassName='active' to="/"><i className="fas fa-home"></i> Home </NavLink>
            <NavLink activeClassName='active' to="/stream"><i className="fas fa-stream"></i> Stream</NavLink>
            <NavLink activeClassName='active' to="/library" ><i className="fas fa-book-open"></i> Library</NavLink>

            {/* {isLoaded && sessionLinks} */}
            <hr />

            <p className='SalesPitch'>Thank you for listening, sign up or demo for more fun </p>
        </div>
    );
}

export default LeftMenu;
