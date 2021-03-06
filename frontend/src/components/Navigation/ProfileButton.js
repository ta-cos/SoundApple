import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './profile-button.css'

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <>
            <button onClick={openMenu}>
                <i id="profile-button" className="fas fa-user-circle" />
            </button>
            {showMenu && (
                <div id="profile-dropdown">
                    <p id="username">{user.username}</p>
                    <p id="email">{user.email}</p>
                    <button id="logout" onClick={logout}>Log Out</button>
                </div>
            )}
        </>
    );
}

export default ProfileButton;
