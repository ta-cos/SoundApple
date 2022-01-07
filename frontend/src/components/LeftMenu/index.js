import React from 'react';
import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import './LeftMenu.css';

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
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/">Stream</NavLink>
            <NavLink exact to="/">Library</NavLink>

            {/* {isLoaded && sessionLinks} */}
            <hr />
        </div>
    );
}

export default LeftMenu;
