import { Link } from 'react-router-dom'
import './Icons.css'

function Icons() {
    return (
        <div className="icons-container">
            {/* <button onClick={('/www.github.com/ta-cos', '_blank')}> <i className="devicon-github-original-wordmark colored" /> </button> */}
            <Link className='github' to={location => window.open('https://github.com/ta-cos')}> <i class="fab fa-github-square"></i> </Link>
            <Link className='linkedin' to={location => window.open('https://linkedin.com/in/nathan-treadaway')}> <i className="fab fa-linkedin"></i> </Link>


        </div>
    )
}

export default Icons;
