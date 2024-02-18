import React from 'react'
import '../css/card.css'
import arun from './arun.jpg';
import karan from './karan.jpg';
import saurya from './shaurya.jpg';
import utk from './utk.png';
export default function Card(props) {
  return (
    <>
    <div style={{paddingBottom:"450px"}}>
    <div style={{textAlign:"center",textAlign:"center",fontSize:"30px",fontFamily:"poppins",fontWeight:"poppins",fontWeight:"700",width:"100%",paddingBottom:"40px"}}>About US</div>
    <div style={{display:"flex",gap:"100px",position:'absolute',width:"100%",left:"60px"}}>
      <div className="card"> 
        <div className="image"  style={{overflow:"hidden",height:"200px",position:'relative',left:"5px"}}>
            <img className='cardimage' width="188" height="250" src={arun} alt=""/>
        </div>
        <div className="capsules">
            <span className="a">Contact</span>
            <span className="a">About</span>
            <span className="a"><a href="https://www.linkedin.com/in/arun-rathaur-5995651b7/">Linkedin</a></span>
        </div>
        <div className="content">
            <h2>Arun Rathaur</h2>
        </div>
        <div className="button">
            <button>Read More</button>
        </div>
    </div>
    <div className="card"> 
        <div className="image"  style={{overflow:"hidden",height:"200px",position:'relative',left:'5px'}}>
            <img width="188" height="250"src={saurya} alt=""/>
        </div>

        <div className="capsules">
            <span className="a">Contact</span>
            <span className="a">About</span>
            <span className="a"><a  href="https://www.linkedin.com/in/shauryacious/">  Linkedin</a></span>
            
        </div>
        <div className="content">
            <h2>Shaurya Bansal</h2>

        </div>
        <div className="button">
            <button>Read More</button>
        </div>
    </div>
    <div className="card"> 
        <div className="image" style={{overflow:"hidden",height:"200px",position:'relative',left:"5px"}}>
            <img width="188" height="250" src={karan} alt=""/>
        </div>
        <div className="capsules">
            <span className="a">Contact</span>
            <span className="a">About</span>
            <span className="a"><a href="https://www.linkedin.com/in/karan-manglani-423915187?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Linkedin</a></span>
        </div>
        <div className="content">
            <h2>Karan Manglani</h2> 
        </div>
        <div className="button">
            <button>Read More</button>
        </div>
    </div>
    <div className="card"> 
        <div className="image" style={{position:'relative',left:"5px"}}>
            <img width="188" height="250" src={utk} alt=""/>
        </div>
        <div className="capsules">
            <span className="a">Contact</span>
            <span className="a">About</span>
            <span className="a"><a href="https://www.linkedin.com/in/utkarsh-kumar-upadhyay-18685b24a/">Linkedin</a></span>
        </div>
        <div className="content">
            <h2>Utkarsh Updy</h2>
        </div>
        <div className="button">
            <button>Read More</button>
        </div>
    </div>
    </div>
    </div>
    </>
  )
}
