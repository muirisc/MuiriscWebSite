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
   <div className="NavBar" id="Nav">
   {nav ? <div className="burger-container">
    <div className= "burger-box" onClick={navActive}>
    <span></span>
    <span></span>
    <span></span>
    </div>
  </div> 
  : <a className="burger-X"><Clear onClick={navActive} ></Clear></a> 
  }
  {nav  ?       <ul className="classicNav">
        <li><a href="#Nav">Home</a></li>
        <li><a href="#Skills">Skills</a></li>
        <li><a href="#gallery">Work</a></li>
      </ul> : 
<div className="smallNav">
<ul className="dropwdown">
  <div className="dropdown-content">
  <li><a href="#Nav">Home</a></li>
  <li><a href="#Skills">Skills</a></li>
        <li><a href="#gallery">Work</a></li>
        </div>
      </ul>
  </div>}

      <div className="socialMedia">
      <a href="https://github.com/muirisc" rel="noreferrer" target="_blank"><img src={git} href="https://github.com/muirisc" alt="GitHub Logo" onMouseOver={()=>setGit(`${GitHubW}`)} onMouseOut={()=>setGit(`${GitHubO}`)}/></a>
      <a href="https://www.linkedin.com/in/michael-vanaman/" rel="noreferrer" target="_blank"><img src={linkedIn} alt="LinkedIn Logo" onMouseOver={()=>setLinkedIn(`${LinkedInW}`)} onMouseLeave={()=>setLinkedIn(`${LinkedInO}`)}/></a>
      <a href="mailto:muirisc07@gmail.com"><Email  style={{color: `${mail}`}} onMouseEnter={mailColor} onMouseLeave={mailBack} ></Email></a>
      <a href="https://app.luminpdf.com/viewer/628fd28db3f59ff19b895439"><RecentActors style={{color: `${resume}`}} onMouseEnter={resumeColor} onMouseLeave={resumeBack}></RecentActors></a>
      </div>
      </div>
    </nav>
  )
}

export default Navigation;
