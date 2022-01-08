import React from 'react';
import { NavLink, Route } from 'react-router-dom';
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
            <input type="text" placeholder='Search' />
            <NavLink exact to="/"><i className="fas fa-home"></i> Home </NavLink>
            <NavLink exact to="/"><i className="fas fa-stream"></i> Stream</NavLink>
            <NavLink exact to="/"><i className="fas fa-book-open"></i> Library</NavLink>

            {/* {isLoaded && sessionLinks} */}
            <hr />



        </div>
    );
}

export default LeftMenu;
