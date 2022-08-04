import logo from './logo.svg';
import styles from "../src/styles/header.module.css"
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Blog from './components/Blog';
import Projects from './components/Projects';
import Header from './components/Header';
import Header_int from './Pages/Header_int';
import Project from './Pages/Project';
import Zoom from 'react-reveal/Zoom';
function App() {
  return (
   <>
   
     <BrowserRouter>
     <nav className={styles.nav}>
        <div>
          <ul className={styles.ul}>
            <li className={styles.button_icon}><a target="blank" href="https://github.com/jitanshuraut" className={styles.res_link}> <AiFillGithub /></a> </li>
            <li className={styles.button_icon}><a target="blank" href="https://twitter.com/Jitanshu_Raut" className={styles.res_link}> <AiFillTwitterCircle /> </a></li>
            <li className={styles.button_icon}><a target="blank" href="https://www.linkedin.com/in/jitanshu-raut-438b76246/" className={styles.res_link}><AiFillLinkedin /></a> </li>
          </ul>
        </div>
        <ul className={styles.ul}>
          <li className={styles.button}><Link to='/main' className={styles.link}>About</Link></li>
          <li className={styles.button}><Link to='/projects_an' className={styles.link}>Projects</Link></li>
          <li className={styles.button}> <a className={styles.res_link} href="https://drive.google.com/file/d/1hRFA6OvaxM3qN5OvkitYva7Km7LvYo0E/view?usp=sharing" target="blank" > Resume</a></li>
        </ul>
      </nav>
 
      <Routes>
      
          <Route path="/" element={<Header_int/>} />
          
          <Route path="/main" element={<Header/>}/>

          <Route path="/about" element={<Blog/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/projects_an" element={<Project/>} />
          
         
        </Routes>
     

        
    </BrowserRouter>
   </>
  );
}

export default App;
