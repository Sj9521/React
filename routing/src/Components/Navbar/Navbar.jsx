import './Navbar.css'
import Products from '../Products/Products'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbar'>
            <h1 className='logo'>MySite</h1>

            <div className='nav-links'>
                <Link to="/" className='nav-item'>Home</Link>
                <Link to="/about" className='nav-item'>About</Link>
                <Link to="/contact" className='nav-item'>Contact</Link>
                <Link to="/Products" className='nav-item'>Products</Link>
            </div>
        </div>
    )
}

export default Navbar