// Navbar.jsx
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

    return (
        <>
            <nav className="main-navigation">
                <div className="container">
                    <ul className="navbar-ul">

                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/posts'>Posts</Link></li>
                        <li><Link to='/profile'>Profile</Link></li>

                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar