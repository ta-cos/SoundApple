import './home.css'
import React, { useState } from 'react';


export const HomeItem = ({ children, width }) => {
    return (
        <div className='home-item' style={{ width: width }}>
            {children}
        </div >
    )
}

function Home({ children }) {
    const [activeItem, setActiveItem] = useState(0);

    function updateItem(newItem) {
        const max = React.Children.count(children)
        if (newItem < 0) newItem = max;
        else if (newItem > max - 1)
            newItem = 0
        console.log(newItem)
        setActiveItem(newItem)
    }

    return (
        <div className='carousel'>
            <div className='inner' style={{ transform: `translateX(-${activeItem * 100}%)` }}>
                {React.Children.map(children, (child, idx) => {
                    return React.cloneElement(child, { width: "100%" })
                })}
            </div>
            <div className='indicators'>
                <button
                    onClick={() => updateItem(activeItem - 1)}> Prev
                </button>
                <button
                    onClick={() => updateItem(activeItem + 1)}> Next
                </button>
            </div>
        </div>
    )
}

export default Home;
