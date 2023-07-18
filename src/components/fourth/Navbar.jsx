import React from "react"; 
import { AiOutlineHome } from "react-icons/ai";
import {IoIosMusicalNotes } from 'react-icons/io';
import './navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
    <div className="d-flex justify-content-center align-items-center pt-2">
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">

    
    <Link className="navbar-brand" to="/">
      <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top" />
      Y2Mate
    </Link>  
    
    <div className="collapse navbar-collapse active-nav" id="navbarNavDropdown">
      <ul className="navbar-nav fs">
        

        <li className="nav-item">
          <Link className="nav-link act" aria-current="page" to="/"> <AiOutlineHome /> Home </Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/mp3"> <IoIosMusicalNotes /> YouTube to MP3 </Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/mp4"> <i class="fa-sharp fa-solid fa-film"></i> YouTube to MP4 </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/shorts"> <i class="fa-sharp fa-solid fa-bolt"></i> YouTube Shorts </Link>
        </li>
        
        <li className="nav-item dropdown dm">
          <a style={{color:' white'}} className="nav-link dropdown-toggle" href="..." role="button" data-bs-toggle="dropdown" aria-expanded="false">
            English
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="..."> Deutsch </a></li>
            <li><a className="dropdown-item" href="..."> Espanol </a></li>
            <li><a className="dropdown-item" href="..."> Filipino </a></li>
            <li><a className="dropdown-item" href="..."> Francasic </a></li>
            <li><a className="dropdown-item" href="..."> Hindi / हिंदी</a></li>
            <li><a className="dropdown-item" href="..."> Indonesian </a></li>
            <li><a className="dropdown-item" href="..."> italiano </a></li>
            <li><a className="dropdown-item" href="..."> Malay </a></li>
            <li><a className="dropdown-item" href="..."> Pyccknn </a></li>
            <li><a className="dropdown-item" href="..."> العربية </a></li>
            <li><a className="dropdown-item" href="..."> Urdu / اردو </a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
  <hr />
   </>
  
  );
}

export default Navbar;