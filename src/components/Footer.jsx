import React from 'react'
import style from "../styles/footer.module.css"
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
function Footer() {
  return (
    <>
    <div className={style.footer}>
    <div className={style.button_icon}><a target="blank" href="https://github.com/jitanshuraut" className={style.res_link}> <AiFillGithub /></a> </div>
            <div className={style.button_icon}><a target="blank" href="https://twitter.com/Jitanshu_Raut" className={style.res_link}> <AiFillTwitterCircle /> </a></div>
            <div className={style.button_icon}><a target="blank" href="https://www.linkedin.com/in/jitanshu-raut-438b76246/" className={style.res_link}><AiFillLinkedin /></a> </div>
   

    </div>

    </>
  )
}

export default Footer