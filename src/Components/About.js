import "../CSS/About.css";
import {useState} from "react";
import GitHubO from "../GitHubOrange.svg";
import GitHubW from "../GitHub_White.svg"
import LinkedInO from "../linked_in.svg"
import LinkedInW from "../linkedin_white.svg";
import Mail from "../mail-icon-white.svg";



const About = () => {
const [card, setCard] = useState(true)
const[git, setGit] = useState(`${GitHubW}`)
const[linkedIn, setLinkedIn] = useState(`${LinkedInW}`)
const[active, setActive] = useState(false)

const manageCard = () =>{
  setCard(!card)
}
const setColor=()=>{
setActive(!active)
}



  return(
    <section className="about" id="About">
      <div className="flip-card">
  <div className={card ? "flip-card-inner" : "flipped-card-inner"} onClick={manageCard}> 

      <div className="aboutBlackBoard">
        <h3>Welcome!</h3>
        <p>I am Michael Vanaman and this is my website. I am a software engineer and writer. My passion is finding unique solutions to problems and breaking down complicated subject matter into more easily understandable forms. I love coding, front-end design, and how the tech industry is constantly evolving.</p>
        <p>Flip this card for my contact info! </p>
    </div>

    <div className="aboutBlackBoardBack">
      <div>
        <a href="https://www.linkedin.com/in/michael-vanaman/" rel="noreferrer" target="_blank"><img src={linkedIn} alt="LinkedIn Logo" onMouseOver={()=>setLinkedIn(`${LinkedInO}`)} onMouseLeave={()=>setLinkedIn(`${LinkedInW}`)}/>
        <p>LinkedIn</p></a>
        </div>
        <div>
        <a href="https://github.com/muirisc" rel="noreferrer" target="_blank"><img src={git} href="https://github.com/muirisc" alt="GitHub Logo" onMouseOver={()=>setGit(`${GitHubO}`)} onMouseOut={()=>setGit(`${GitHubW}`)}/>
          <p>Github</p></a>
          </div>
          <div>
            <a href="mailto:muirisc07@gmail.com"><img src={Mail} alt="mail icon" /><p>Email</p></a>
            </div>
    </div>
</div>
  </div>

       
       
       {/* <li style={{backgroundColor: "#FFA500"}}>HTML</li>
        <li style={{backgroundColor: "#264de4"}}>CSS</li>
        <li style={{backgroundColor: "#FFFF00"}}>JavaScript</li>
        <li style={{backgroundColor: "#820c02"}}>Ruby</li>
        <li style={{backgroundColor: "#4B8BBE"}}>Python</li>
        <li style={{backgroundColor: "#40D0FB"}}>Adobe Photoshop</li>
        <li style={{backgroundColor: "#0064a5"}}>SQL</li>
        <li style={{backgroundColor: "#3178C6"}}>TypeScript</li>
        <li style={{backgroundColor: "#61DBFB"}}>React.js</li>
        <li style={{backgroundColor: "#CC0000"}}>Ruby on Rails</li>
        <li style={{backgroundColor: "#336633"}}>Node.js</li>
        <li style={{backgroundColor: "#ffffff"}}>GitHub</li> */}

    <div style={{backgroundcolor: "blue"}}>
      {/* <a href="src/Michael_Vanaman_Resume_NewFinal.pdf"><h3>Click Here For My Resume</h3></a> */}
      {/* <embed src="src/Michael_Vanaman_Resume_NewFinal.pdf" width=100% /> */}
      {/* <object data="src/Michael_Vanaman_Resume_NewFinal.pdf" type="application/pdf" width="100%" height="100%" alt="pdf "><h3>Click Here For My Resume</h3></object> */}
    </div>

    </section>
  )
}
export default About; 