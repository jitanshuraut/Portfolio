import React, { useEffect, useState,useRef } from 'react'
import Spline from '@splinetool/react-spline';
import styles from "../styles/header.module.css"
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';

function Header() {
  

  const [height, setheight] = useState("")
const [con_height, setcon_height] = useState("")
  useEffect(() => {
    setheight(window.innerHeight - 300);
    setcon_height(window.innerHeight-(3/4)*window.innerHeight);
  }, [])


  return (
    <>
 
      <div className={styles.three_d} style={{ height: { height } }}>
      <Spline scene="https://prod.spline.design/yM1gha5CpNsuRsVx/scene.splinecode" />
      </div>

      <div className={styles.cont_head} style={{"bottom":{con_height}}}  >

        <div>
          <h1>Hi, I am <span>Jitanshu</span>,
            Creative Technologist</h1>
          <p>I am a Computer Science and Engineering Undergraduate student at IIIT Surat with expertise in  JavaScript, React, python, Html 5, Css3 and C++.</p>
        </div>

        <div>
          <img src="pro.png" className={styles.cont_img} alt="" />
        </div>
      </div>


      <Zoom bottom>
     <Skills/>
  <Footer/>
  </Zoom>
    </>
  )
}

export default Header