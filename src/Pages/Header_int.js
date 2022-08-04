import React, { useEffect } from 'react'
import Spline from '@splinetool/react-spline';
import { useNavigate } from "react-router-dom";
function Header_int() {
  let navigate = useNavigate();
  useEffect(()=>{
  setTimeout(() => {
    navigate("/main")
  }, 3000);
  },[])
  return (
    <>
     <Spline scene="https://prod.spline.design/11U6WqtmiPEc62AL/scene.splinecode" />
   
    </>
  )
}

export default Header_int




