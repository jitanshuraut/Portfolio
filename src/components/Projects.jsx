import React from 'react'
import style from "../styles/project.module.css"
import Footer from "../components/Footer"
function Projects() {
  return (
    <>
   <div style={{backgroundColor:"black"}}>
    <h1 className={style.head}>Projects</h1>
    <hr className={style.hr} />
    <div className={style.box}>
       
        <div className={style.skill}>
            <img src="project-1.jpg" className={style.img} alt="" />
            <div>
              <h2 className={style.h2}>project 1</h2>
              <div className={style.tag_box}>
          <p className={style.tag}>node js</p>
          <p className={style.tag}>react js</p>
          <p className={style.tag}>F DB</p>
        </div>
            </div>
        </div>
        <div className={style.skill}>
            <img src="project-2.png" className={style.img} alt="" />
            <h2 className={style.h2}>project 2</h2>
            <div className={style.tag_box}>
         
          <p className={style.tag}>react js</p>
       
        </div>
        </div>
        <div className={style.skill}>
            <img src="project-3.jpg" className={style.img} alt="" />
            <h2 className={style.h2}>project 3</h2>
            <div className={style.tag_box}>
          <p className={style.tag}>HTML</p>
          <p className={style.tag}>CSS</p>
          <p className={style.tag}>JS</p>
        </div>
        </div>
        <div className={style.skill}>
            <img src="project-4.png" className={style.img} alt="" />
        <h2 className={style.h2}>project 4</h2>
        <div className={style.tag_box}>
          <p className={style.tag}>node js</p>
          <p className={style.tag}>react js</p>
          <p className={style.tag}>M DB</p>
        </div>
        </div>
        <div className={style.skill}>
            <img src="project-5.png" className={style.img} alt="" />
        <h2 className={style.h2}>project 5</h2>
        <div className={style.tag_box}>
          <p className={style.tag}>node js</p>
          <p className={style.tag}>react js</p>
          <p className={style.tag}>M DB</p>
        </div>
        </div>
        <div className={style.skill}>
            <img src="project-6.png" className={style.img} alt="" />
        <h2 className={style.h2}>project 6</h2>
        <div className={style.tag_box}>
          <p className={style.tag}>node js</p>
          <p className={style.tag}>react js</p>
          <p className={style.tag}>M DB</p>
        </div>
        </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Projects