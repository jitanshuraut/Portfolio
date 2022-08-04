import React,{useEffect} from 'react'
import Spline from '@splinetool/react-spline';
import { useNavigate } from "react-router-dom";
function Project() {
    let navigate = useNavigate();
    useEffect(()=>{
    setTimeout(() => {
      navigate("/projects")
    }, 3000);
    },[])
    return (
      <>
       <Spline scene="https://prod.spline.design/YPePJ3YyMtzsMABr/scene.splinecode" />
     
      </>
    )
}

export default Project