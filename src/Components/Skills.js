import {useState} from "react";
import CodeLogos from "../logo_everything_code.png"

const Skills = () => {

  const[active, setActive] = useState(false)
  


  return(
    <div className="skills">
    <h3> Skills</h3>
    <div className="skillList">
      <div>
      <img className="logos" src={CodeLogos} alt="coding based logos collage"/>
       </div> 
       <div className="skillBoxes">
         <ul>
      <li>HTML</li> 
       {/* {active ? <li onMouseEnter={setColor} style={{backgroundColor: "#264de4"}}>HTML</li> : <li onMouseLeave={setColor} style={{backgroundColor: "#fff"}}>HTML</li>} */}
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Ruby</li>
        <li>Python</li>
        <li>Adobe Photoshop</li>
        <li>SQL</li>
        <li>TypeScript</li>
        <li>React.js</li>
        <li>Ruby on Rails</li>
        <li>Node.js</li>
        <li>GitHub</li>
         </ul>
        </div>
        </div>
        </div>
  )
}
export default Skills;