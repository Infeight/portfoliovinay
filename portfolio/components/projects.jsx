import React from 'react'
import './certifications.css'
import { Link } from 'react-router-dom'
import './projects.css'

const Projects = () => {
  return (
    <div className='projectspage'>
       
    <div className="certs1" id='projectsdisp'>

    <div className="nav">
     <div className="name">Vinay Mamidi</div>
     {/* <div className="project-btn">Home</div> */}
     <div className="project-btn"><Link to={'/'}>Home</Link></div>
   </div>
      
      <div className="heading" id='projects-head'>Projects</div>

       <div className="certs">
       <div className='certificate'>
       <video className='projectsvid' autoPlay muted loop><source src='video1.mp4' type='video/mp4' /></video> 
           <h2>12 Sept 2023</h2>
       </div>
       <div className='certificate'>
       <video className='projectsvid' autoPlay muted loop><source src='video2.mp4' type='video/mp4' /></video> 
           <h2>Gripper Design</h2>
       </div>
       <div className='certificate'>
       <video className='projectsvid' autoPlay muted loop><source src='video3.mp4' type='video/mp4' /></video> 
           <h2>Modular Design Tree Planter</h2>
       </div>
       <div className='certificate'>
       <video className='projectsvid' autoPlay muted loop><source src='video4.mp4' type='video/mp4' /></video> 
           <h2>Gripper Design 2</h2>
       </div>
       <div className='certificate'>
       <video className='projectsvid' autoPlay muted loop><source src='video5.mp4' type='video/mp4' /></video> 
           <h2>14 July 2023</h2>
       </div>

       <div className='certificate'>
           <iframe src="https://lottie.host/embed/ca0dbbb8-4d9f-4add-be06-e75be07927ba/UfxEBCJ4Vy.lottie" frameborder="0"></iframe>
       </div>
   
    </div>

    <div className="projectanim-img-cont">

<div className='certificate' id='projimg1'>
  <img src="projimg1.jpg" alt="" /> 
      <h2>Multi purpose BUOY</h2>
  </div>

 <div className="projectanim">
    <iframe src="https://lottie.host/embed/dfd4bc24-f7cc-4199-a6a8-4d09b7898b6a/OTCGh5HLsB.lottie" frameborder="0"></iframe>
 </div>

</div>

    </div>
   </div>
  )
}

export default Projects
