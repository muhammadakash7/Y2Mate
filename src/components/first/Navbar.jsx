import React, { useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoIosMusicalNotes } from 'react-icons/io';
import './navbar.css';
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/images/logo.png';
import id from './../../Records.json';

import { useTranslation, initReactI18next } from "react-i18next";



function Navbar(props) {

  const { t } = useTranslation();

  const numericId = id && id.id ? id.id : null;

  // const handleLanguageChange =(lang)=>{
  //   i18n.changeLanguage(lang);
  // }
  // const handleLanguageChange=()=>{
  //   console.log('clicked')
  // }
  return (
    <>

      <div className="d-flex justify-content-center align-items-center">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">

            <div className="d-flex justify-content-around align-items-center">

              <div>
                <Link className="navbar-brand" to={`/${numericId}/`} >
                  <img src={logo} alt="" width="40" height="30" style={{ marginRight: '5px' }} className="d-inline-block align-text-top" />
                  {t('trans.y2mate')}
                </Link>
              </div>

              <div className="collapse navbar-collapse active-nav" id="navbarNavDropdown">
                <ul className="navbar-nav fs">


                  <li className="nav-item">
                    <Link className="nav-link act" aria-current="page" to={`/${numericId}/`} > <AiOutlineHome /> {t('trans.home')} </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to={`/${numericId}/youtube-to-mp3`}> <IoIosMusicalNotes /> {t('trans.youtubemp3')} </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to={`/${numericId}/youtube-to-mp4`}  > <i className="fa-sharp fa-solid fa-film"></i> {t('trans.youtubemp4')}</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to={`/${numericId}/shorts`}> <i className="fa-sharp fa-solid fa-bolt"></i> {t('trans.shorts')} </Link>
                  </li>

                  <li >
                    {/* className="nav-item dropdown dm" */}
                    {/* <a style={{color:' white'}} className="nav-link dropdown-toggle" href="..." role="button" data-bs-toggle="dropdown" aria-expanded="false">
          {t('navbar.language')}
          </a> */}
                    <select style={{ color: ' black', width: "120px", marginTop: "5px", padding: "5px" }} onChange={props.onChange} >
                      <option value={'en'}> English </option>
                      <option value={'chi'}> Chinese/中國人 </option>
                      <option value={'ko'}> Korean/한국인 </option>
                      {/* <option value={'de'}> German </option>
                      <option value={'ur'}> Urdu/اردو </option> */}
                      <option value={'ar'}> Arabic/عربي </option>
                    </select>
                    {/* <ul className="dropdown-menu">
            <li><button className="dropdown-item"  onClick={() => handleLanguageChange('en')}> English </button></li>
            <li><button className="dropdown-item" onClick={() => handleLanguageChange('fr')}>Français</button></li>
            <li><button className="dropdown-item" onClick={() => handleLanguageChange('de')}>Chinese</button></li>
            <li><button className="dropdown-item" onClick={() => handleLanguageChange('ar')}>Arabic</button></li>
          </ul> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </nav>
      </div>
      <hr />
    </>

  );
}

export default Navbar;