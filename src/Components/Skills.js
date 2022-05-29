import { useState } from "react";
import CodeLogos from "../logo_everything_code.png";

const Skills = () => {
  const [active, setActive] = useState(false);

  return (
    <div id="Skills"className="skills">
      <h3> Skills</h3>
      <div className="skillList">
        <div className="divLogos">
          <img
            className="logos"
            src={CodeLogos}
            alt="coding based logos collage"
          />
        </div>
        <div className="skillBoxes">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Ruby</li>
            <li>Python</li>
            <li>Photoshop</li>
            <li>SQL</li>
            <li>TypeScript</li>
            <li>React.js</li>
            <li>Rails</li>
            <li>Node.js</li>
            <li>GitHub</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Skills;
