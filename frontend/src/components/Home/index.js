import './home.css'
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import './home.css'


function Home({ children }) {
    const [activeItem, setActiveItem] = useState(0);
    const sessionUser = useSelector(state => state.session.user);

    return (
        <div className='content'>
            <h2>This is Dr. Fluffy</h2>
            <h2>Dr. Fluffy is our mascot</h2>
            <img className='fluffy' src='https://i.pinimg.com/originals/a3/ef/55/a3ef5504def30396a9b4bc6ead7d48a7.jpg'></img>
            <h2>whn you see Dr. Fluffy, something is wrong</h2>
            <h2>Can you find them all?</h2>
        </div>
    )
}

export default Home;
