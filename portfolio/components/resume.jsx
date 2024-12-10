import React from 'react'
import './resume.css'
import { Link } from 'react-router-dom'

const Resume = () => {
    return (
        <>
            <div className="resume">

                <div className="nav">
                    <div className="name">Vinay Mamidi</div>
                    <div className="project-btn"><Link to={'/'}>Home</Link></div>
                </div>
                <div className="heading">Resume</div>

                {/* Resume Start */}

                <div className="aboutme">
                    <div className="myintro">
                        Energetic B.Tech Mechanical Engineering student with proven leadership capabilities and adept at collaborating
                        within a team. Actively pursuing an internship opportunity to enhance skills and add value to a fast-paced
                        professional setting.
                    </div>

                    <div className="projects" id='resume-projects'>
                        <div className="prj1">

                            <h4>Summer Internship at Fantek Aug 2023 - Sept 2023</h4>
                            <p>
                                <h5>Designed and Developed:</h5> Specialized in the design of dust-collecting ducts, ensuring technical precision and adherence to manufacturing standards.  <br />
                                <h5>Process Planning:</h5> Facilitated process planning and established seamless connections between research and production departments to bridge operational gaps.  <br />
                                <h5>Team Coordination:</h5> Played a pivotal role in the Design department, contributing to efficient coordination of processes and enhancing communication between cross-functional teams.  <br />
                                <h5>Problem-Solving:</h5> Demonstrated initiative and strong problem-solving skills, identifying and implementing improvements in manufacturing processes.  <br />
                                <h5>Collaboration and Efficiency:</h5> Actively collaborated with diverse teams to streamline operations, optimize production efficiency, and achieve project goals.
                            </p>
                        </div>

                        {/* project2 */}
                        <div className="prj1">

                            <h4>Mechanical Lead – Technocrats Robotics, VIT Chennai
                                March 2023 – August 2024</h4>
                            <p>
                                <h5> Leadership Role:</h5> Served as the Mechanical Lead for Technocrats Robotics, the official robotics team of VIT Chennai. <br />
                                <h5>Design and Manufacturing Expertise:</h5> Spearheaded the design and manufacturing processes for prototype robots, ensuring high precision and functionality. <br />
                                <h5>Team Mission:</h5> Contributed to a multidisciplinary team that focuses on the design, assembly, and prototyping of robots for prestigious national competitions, including ABU Robocon and IRC. <br />
                                <h5>Competitions and Achievements:</h5> Played a critical role in competing with top university teams nationwide, showcasing technical excellence and innovative solutions in robotics. <br />
                                <h5>Cross-functional Collaboration:</h5> Coordinated with team members across various disciplines to optimize robot performance and meet project deadlines effectively.
                            </p>
                        </div>

                        {/* project3 */}

                        <div className="prj1">
                            <h4>Marine Buoy – Power Generation Improvement Project</h4>
                            <p>
                                <h5> Project Focus:</h5> Designed and optimized a Marine Buoy for enhanced power generation by integrating tidal and wind energy systems. <br />
                                <h5>Software Expertise:</h5> Utilized SolidWorks for 3D modeling and Ansys for structural and flow analysis, ensuring robust and efficient design. <br />
                                <h5>Design Optimization:</h5> Achieved significant weight reduction and turbine efficiency by incorporating analysis-driven improvements. <br />
                                <h5>Structural Stability:</h5> Enhanced the buoy's overall stability, achieving an optimal factor of safety through rigorous testing and simulation. <br />
                                <h5>Sustainable Innovation:</h5> Delivered a design that merges renewable energy sources to maximize power output while maintaining durability and operational reliability.
                            </p>
                        </div>
                        {/* project4 */}
                        <div className="prj1">
                            <h4>
                                Hands on Experience in Manufacturing
                            </h4>
                            <p>
                                Hands on experience in manufacturing which includes TIG welding, notching and cutting of tubes of the chassis
                            </p>
                        </div>
                    </div>

   <div className="skillslist">
      <div className="skillanim">
        <iframe src="https://lottie.host/embed/923208aa-e1c0-4736-8cb9-e163091243f0/ccoICH031k.lottie" frameborder="0"></iframe>
      </div>
      <div className="skill-li">
          <li>Solidworks  CAD designer (80%)</li>
          <li>PTC Creo - 3D Modelling and Simulation (60%)</li>
          <li>Autodesk Fusion 360 (40%)</li>
          <li>AutoCad Drafting (60%)</li>
          <li>Ansys Simulation (40%)</li>
          <li>GD&T (40%)</li>
          <li>Python Coding (40%)</li>
      </div>
   </div>

{/* Education det */}

   <div className="education">
        <div className="educationdet">
            <li>
            VIT CHENNAI <br /> Mechanical Engineering <br /> 8.35 CGPA </li>
            <li>
            Sri Chaitanya Techno School <br /> MPC <br /> 95.4% </li>
            <li>Carmel English School <br /> 92.6%</li>
        </div>
        <div className="educationanim">
            <iframe src="https://lottie.host/embed/95bf1142-b07f-4451-bdb3-d104abdc69db/Y0FCn2DPfr.lottie" frameborder="0"></iframe>
        </div>
  </div>

    {/* Languagescode */}
    <div className="ending">
    <div className="languages">
       <div className="langanim">
        <iframe src="https://lottie.host/embed/3a39480b-23cb-4240-a554-23a22f6bcddb/Nw79xl1932.lottie" frameborder="0"></iframe>
       </div>
       <div className="langdet">
       <li>English: Fluent</li>
        <li>Hindi: Native/Fluent</li>
        <li>Spanish: Intermediate/Conversational</li>
       </div>
    </div>

    {/* \thankyou */}
      <div className="thankyou">
      I sincerely appreciate you taking the time to review my resume. Your feedback and insights mean a great deal to me, and I’m grateful for your effort in helping me showcase my skills and experiences effectively.
      </div>
    </div>
     
                </div>
            </div>
        </>
    )
}

export default Resume
