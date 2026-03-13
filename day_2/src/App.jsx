import Navbar from "./Navbar"
import "./App.css"
function App(){
    let name='sanjeev'
  return(
    <div>
      <Navbar data={name} />   /**Here i used props */

      <section id="home">
        <h1>Hi, I'm Sanjeeva Reddy</h1>
        <p>Aspiring Jr. Software Engineer | React JS & Front-End Developer</p>
        <a href="mailto:sanjeevareddy99852@gmail.com" class="btn">Get In Touch</a>
    </section>

    <section id="about">
        <h2>About Me</h2>
        <p>I am a B.Tech graduate in Computer Science and Engineering from Dr.Mgr Educational and Research Institute. I specialize in building responsive web applications using JavaScript, HTML, and CSS.</p>
    </section>

    <section id="skills">
        <h2>Technical Skills</h2>
        <div class="skill-container">
            <span>HTML5</span> <span>CSS</span> <span>Bootstrap</span> <span>React.js</span> 
            <span>Python</span> <span>SQL</span> <span>Flask/Django</span>
        </div>
    </section>

    <section id="projects">
        <h2>Projects</h2>
        <div class="project-card">
            <h3>E-learning Platform with Emotion-Based Feedback</h3>
            <p>Developed a full-stack application integrating machine learning to analyze student feedback.</p>
            <ul>
                <li>Designed responsive UI with HTML5/CSS3.</li>
                <li>Implemented secure user authentication.</li>
            </ul>
        </div>
    </section>

    <section id="contact">
        <h2>Contact Me</h2>
        <p>Email: reddysanjeev304@gmail.com</p>
        <p>Phone: +91 9989945058</p>
        <a href="https://www.linkedin.com/in/sanjeev-reddy-91147231a" target="_blank">LinkedIn Profile</a>
    </section>

    <footer>
        <p>&copy; 2026 Sanjeeva Reddy</p>
    </footer>
      
    </div>
  )
}
export default App