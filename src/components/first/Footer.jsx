import React from 'react';
import './footer.css';
import {Link} from 'react-router-dom';

const Footer = () => {

  const p = {
    fontSize: '13px',
    marginBottom: "0rem",
  };
  
  return (
    <div>
      <footer className="footer">
      <div className="container">
        <p style={p}> © 2023 Y2Mate.is - Your favorite video converter. </p>
        <div className="footer-content">
            <Link to='/faq' style={{textDecoration: 'none'}}> <span> F.A.Q. </span> </Link>   
            <Link to='/terms' style={{textDecoration: 'none'}}> <span> Terms of Service</span> </Link> 
            <Link to='/privacy' style={{textDecoration: 'none'}}> <span> Privacy Policy  </span> </Link> 
            <Link to='/contact' style={{textDecoration: 'none'}}> <span> Contact Us </span> </Link>  
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;