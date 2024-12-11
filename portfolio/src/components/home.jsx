import React from 'react'
import '../components/home.css'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    
    <div className="home">
    <div className="nav">
      <div className="name">Vinay Mamidi</div>
      <div className="project-btn"><Link to={'/projects'}>Projects</Link></div>
    </div>
    <div className="section1" id='block1'>
        <div className="intro">
            <div className="head">Innovative CAD Designs: <br /> Transforming Concepts into Reality</div>
            <div className="exp">
            Transform your ideas into reality with precision and creativity! As a skilled CAD designer, I deliver detailed, accurate, and visually stunning designs tailored to your needs. From product development to architectural blueprints, I ensure seamless collaboration and exceptional results. Let’s bring your vision to life!
            </div>
            <div className="social-btns">
            <div className="resume-btn"><Link to={'/resume'}>Resume</Link></div>
            <div><a href="https://www.instagram.com/vinay._mamidi?igsh=MXM4cm52dm9pbjR6Zg=="><FaInstagram className='logos'/></a></div>
            <div><a href="https://www.linkedin.com/in/vinay-mamidi-78836a266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin  className='logos'/></a></div>
            <div className="resume-btn"><Link to={'/certifications'}>Certifications</Link></div>

            </div>
        </div>
        <div className="profilepic">
            <div className="profilepic1">
            <img src="vinay.png" alt="" />
            </div>
        </div>
    </div>
    <div className="section2" id='block2'>
      <div className="animimg">
        <iframe src="https://lottie.host/embed/02d41fc8-e4e6-439d-b5ee-b1b3f1b516aa/38I9fziCuV.lottie" frameborder="0"></iframe>
      </div>
      <div className="quote">
        <div className="quote-p">Designing products, shaping possibilities.</div>
        <div className="contactme">"Have questions or need assistance? I’m here to help! Feel free to reach out, and let’s discuss how I can bring your ideas to life with precision and expertise."</div>
        <div className="contactlink"><a href="#contactdet">Contact Me</a></div>
      </div>
    </div>

{/* Skillset code */}
 <div className="skillset">
        <div className="skill">
          <h3>3D Modeling</h3>
          <p>Expertise in creating detailed and accurate 3D models for products, architecture, and engineering designs. </p>
        </div>
        <div className="skill">
          <h3>Drafting</h3>
          <p>Skilled in producing precise technical drawings and blueprints, ensuring adherence to engineering standards and project specifications for seamless implementation.</p>
        </div>
        <div className="skill">
          <h3>Visualization</h3>
          <p>Proficient in generating high-quality, photorealistic renderings to bring designs to life, providing clients with a clear and visually compelling representation of the final product.</p>
        </div>
      </div>

      {/* Block3 code */}

    <div className="section1" id='block3'>
        
        <div className="projects">
          <div className="prj"><video autoPlay muted loop><source src='video1.mp4' type='video/mp4' /></video> </div>
          <div className="prj"><video autoPlay muted loop><source src='video2.mp4' type='video/mp4' /></video> </div>
          <div className="prj" style={{gridColumn:'1/span2'}}><video autoPlay muted loop><source src='video3.mp4' type='video/mp4' /></video> </div>
          {/* <div className="prj"><video autoPlay muted loop><source src='video1.mp4' type='video/mp4' /></video> </div> */}

         
        </div>
        <div className="workcaption">
          <h3>Explore Me In My Work.</h3>
        </div>

    </div>

    {/* Block 4 code */}
    <div className="section2" id='block4'>
      <div className="pastproject">
        <div className="projectpastdes">
          <h4>Internship at Fantek  Aug 2023 - Sept 2023</h4>
          <p>"Successfully completed a summer internship at Fantek in the Design department, specializing in the development of dust-collecting ducts and process planning. Played a pivotal role in bridging research and production, enhancing communication and coordination between teams. Demonstrated strong problem-solving skills by identifying and implementing improvements in manufacturing processes. Actively collaborated with cross-functional teams to streamline operations and optimize production efficiency."</p>
        </div>
        <div className="projectpastdes">
          <h4>Robotics March 2023 - Aug 2024</h4>
          <p>"Served as the Mechanical Lead for Technocrats Robotics, the official student robotics team of VIT Chennai, from March 2023 to August 2024. Led the design and manufacturing department, focusing on the creation and assembly of prototype robots. The team actively participated in prestigious national competitions like ABU Robocon and IRC, competing with top university teams across the country. Played a key role in designing, manufacturing, and ensuring seamless assembly of high-performance robots, demonstrating technical expertise and effective leadership in a collaborative, competitive environment."</p>
        </div>
      </div>
      <div className="exphead">Let's work together to turn your vision into reality with precision, innovation, and excellence.</div>

    </div>
   <div id="contactdet">
     <div className="phno">Phone: +91 7842231460</div>
     <div className="phno">E mail: vinaymamidi05@gmail.com</div>
   </div>
    </div>

    </>
  )
}

export default Home
