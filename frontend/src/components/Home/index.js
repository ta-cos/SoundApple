import './home.css'
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';


export const HomeItem = ({ children, width }) => {
    return (
        <div className='home-item' style={{ width: width }}>
            {children}
        </div >
    )
}

function Home({ children }) {
    const [activeItem, setActiveItem] = useState(0);
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <h2 className='my-songs-header'>My Songs:</h2>
        );
    }

    function updateItem(newItem) {
        const max = React.Children.count(children)
        if (newItem < 0) newItem = max - 1;
        else if (newItem > max - 1)
            newItem = 0
        setActiveItem(newItem)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            updateItem(activeItem + 1)
        }, 3000)

        return () => {
            if (interval) {
                clearInterval(interval)
            }
        }
    })

    return (
        <div className='carousel'>
            <div className='inner' style={{ transform: `translateX(-${activeItem * 100}%)` }}>
                {React.Children.map(children, (child, idx) => {
                    return React.cloneElement(child, { width: "100%" })
                })}
            </div>
            <div className='indicators'>
                <button
                    onClick={() => updateItem(activeItem - 1)}> <i className="fas fa-angle-left"></i>
                </button>
                <button
                    onClick={() => updateItem(activeItem + 1)}> <i className="fas fa-angle-right"></i>
                </button>
            </div>
            {sessionLinks}
        </div>
    )
}

export default Home;
