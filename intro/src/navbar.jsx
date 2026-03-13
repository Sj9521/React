import './navbar.css'
import './home.jsx'
import './about.jsx'
import './contact.jsx'
import './services.jsx'
function Navbar(){
    return(
        <div id="navbar">
            <h2>10000 coders</h2>

            <div id='nav'>
                <span onClick={() => window.location.href = "home.jsx"}>Home</span>
                <span onClick={() => window.location.href = "about.jsx"}>About</span>
                <span onClick={() => window.location.href = "contact.jsx"}>Contact</span>
                <span onClick={() => window.location.href = "services.jsx"}>Services</span>
            </div>
        </div>
    )
}
export default Navbar