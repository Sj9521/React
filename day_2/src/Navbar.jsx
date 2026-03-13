import "./Navbar.css";
function Navbar({data}){
    return(
        <div id='nav'>
            <h1>Navbar {data}</h1> /**here i used props */
            <div id='links'>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Project</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    )
}
export default Navbar