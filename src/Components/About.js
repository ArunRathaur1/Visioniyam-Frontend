import React from 'react'
import about1 from '../animations/about1.json'
import about2 from '../animations/about2.json';
import about3 from '../animations/about3.json';
import '../css/about.css'
import Lottie from 'lottie-react';
export default function About() {
  return (
    <div>
      <div style={{textAlign:"center", fontFamily:"poppins",fontSize:"25px",fontWeight:"900"}}>About</div>
      <div style={{display:"flex",justifyContent:"center",marginTop:"25px",marginBottom:"50px"}}>
      <div style={{display:"flex",gap:"15%"}}>
        <div className='aboutbox'>
            <div className='boxheading'>Use Your Mouse Without Hands</div>
            <div style={{display:"flex",justifyContent:"center",paddingTop:"30px"}}><Lottie animationData={about1} style={{width:"200px"}}></Lottie></div>
            <div className='boxdescription' style={{paddingTop:'30px'}}>uses the camera tracker and to move mouse pointer to where you looking</div>
        </div>
        <div className='aboutbox'>
            <div className='boxheading'>Speed And Precision</div>
            <div style={{display:"flex",justifyContent:"center"}}><Lottie animationData={about2} style={{width:"200px"}}></Lottie></div>
            <div className='boxdescription'>Experience seamless control with our Python program: navigate with the precision of your gaze, at the speed of thought</div>
        </div>
        <div className='aboutbox'>
            <div className='boxheading'>Supports Multi Os</div>
            <div style={{display:"flex",justifyContent:"center"}}><Lottie animationData={about3}style={{width:"200px"}}></Lottie></div>
            <div className='boxdescription'>Empower your interaction across all operating systems with our versatile Python program: seamlessly control your mouse with eye movements, regardless of your device's platform.</div>
        </div>
      </div>
    </div>
    </div>
  )
}
