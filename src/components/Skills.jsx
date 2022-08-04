import React, { useEffect } from 'react'
import style from "../styles/skill.module.css"

function Skills() {
    
    useEffect(()=>{
       
    },[])
  return (
    <>
          <div className={style.fade}></div>
<div className={style.cont}>
    <h1 className={style.head_con}>My Skills</h1>
    <hr className={style.hr} />
    <div className={style.box}>
        <div className={style.box_1}>
            <p>
I Am A Keen Learner Having Skills And Proficiency To Work Well With Current Technology As Well As Flexible In Adopting Newer. Currently I'm Much Involved In Competitive Programming And Development Using Javascript,NodeJS,ExpressJS MongoDB As Well As Other Technologies.</p>
        </div>

        <div className={style.box_2}>
            <div className={style.main_cont}>
                <h1 className={style.name}>HTML</h1>
                <div className={style.value} ><h6>95%</h6></div>
            </div>
            <div className={style.main_cont}>
                <h1 className={style.name}>CSS</h1>
                <div className={style.value}><h6>95%</h6></div>
            </div>
            <div className={style.main_cont}>
                <h1 className={style.name}>REACT JS</h1>
                <div className={style.value}><h6>80%</h6></div>
            </div>
            <div className={style.main_cont}>
                <h1 className={style.name}>SEO</h1>
                <div className={style.value}><h6>100%</h6></div>
            </div>
           
        </div>
    </div>
</div>

    </>
  )
}

export default Skills