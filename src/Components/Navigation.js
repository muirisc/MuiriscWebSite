import "../CSS/Navigation.css"; 
import {useState} from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import GitHubO from "../GitHubOrange.svg";
import GitHubW from "../GitHub_White.svg"
import LinkedInO from "../linked_in.svg"
import LinkedInW from "../linkedin_white.svg";
import { Email, RecentActors, Clear } from "@mui/icons-material";

const Navigation = () => {


  const[git, setGit] = useState(`${GitHubO}`)
  const[linkedIn, setLinkedIn] = useState(`${LinkedInO}`)
  const[mail, setMail] = useState('#da6c1a')
  const[resume, setResume] = useState('#da6c1a')
  const[nav, setNav] = useState(true)


  const mailColor = () => {
    setMail('white')
  }
  const mailBack = () =>{
    setMail('#da6c1a')
  }
  const resumeColor = () =>{
    setResume('white')
  }
  const resumeBack = () => {
    setResume('#da6c1a')
  }

  const navActive = () =>{
    setNav(!nav)
  }


  return(
 
    <nav>
   <div className="NavBar">
   {nav ? <div className="burger-container">
    <div className= "burger-box" onClick={navActive}>
    <span></span>
    <span></span>
    <span></span>
    </div>
  </div> 
  : <a className="burger-X"><Clear onClick={navActive} ></Clear></a> 
  }
      <ul>
        <li><a id="NavBar"href="/">Home</a></li>
        <li><a href="About">About</a></li>
        <li><a id="gallery"href="#gallery">Work</a></li>
        <li><a href="/Contact">Contact</a></li>
      </ul>
      <div className="socialMedia">
      <a href="https://github.com/muirisc" rel="noreferrer" target="_blank"><img src={git} href="https://github.com/muirisc" alt="GitHub Logo" onMouseOver={()=>setGit(`${GitHubW}`)} onMouseOut={()=>setGit(`${GitHubO}`)}/></a>
      <a href="https://www.linkedin.com/in/michael-vanaman/" rel="noreferrer" target="_blank"><img src={linkedIn} alt="LinkedIn Logo" onMouseOver={()=>setLinkedIn(`${LinkedInW}`)} onMouseLeave={()=>setLinkedIn(`${LinkedInO}`)}/></a>
      <a href="mailto:muirisc07@gmail.com"><Email  style={{color: `${mail}`}} onMouseEnter={mailColor} onMouseLeave={mailBack} ></Email></a>
      <a href="https://docs.google.com/document/d/1zvg8ddl1lz2QW0hsqdo-kL_Vlpo3rS2R/edit?usp=sharing&ouid=106939024295929421039&rtpof=true&sd=true"><RecentActors style={{color: `${resume}`}} onMouseEnter={resumeColor} onMouseLeave={resumeBack}></RecentActors></a>
      </div>
      </div>
      <div className="sideBar">
      {/* <a href="/">
        <span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
        About us
      </a>
      <a href="/">
        <span role="img" aria-label="price">&#x1f4b8;</span>
        Pricing
        </a>
      <a href="/">
        <span role="img" aria-label="contact">&#x1f4e9;</span>
        Contact
        </a> */}
    </div>
    </nav>
  )
}

export default Navigation;
