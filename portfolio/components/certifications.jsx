import React from 'react'
import './certifications.css'
import { Link } from 'react-router-dom';


const Certifications = () => {
  return (
    <div>
       
     <div className="certs1">

     <div className="nav">
      <div className="name">Vinay Mamidi</div>
      {/* <div className="project-btn">Home</div> */}
      <div className="project-btn"><Link to={'/'}>Home</Link></div>
    </div>
       
       <div className="heading">Certifications</div>

        <div className="certs">
        <div className='certificate'>
            <img src="cert1.jpg" alt="" />
            <h2>12 Sept 2023</h2>
        </div>
        <div className='certificate'>
            <img src="cert2.jpg" alt="" />
            <h2>23 Feb 2023</h2>
        </div>
        <div className='certificate'>
            <img src="cert3.jpg" alt="" />
            <h2>7 June 2023</h2>
        </div>
        <div className='certificate'>
            <img src="cert4.jpg" alt="" />
            <h2>25-27 July 2023</h2>
        </div>
        <div className='certificate'>
            <img src="cert5.jpg" alt="" />
            <h2>14 July 2023</h2>
        </div>

        <div className='certificate'>
            <iframe src="https://lottie.host/embed/ca0dbbb8-4d9f-4add-be06-e75be07927ba/UfxEBCJ4Vy.lottie" frameborder="0"></iframe>
        </div>
     </div>
     </div>
    </div>
  )
}

export default Certifications
