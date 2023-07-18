import React from 'react';
import img1 from '../assets/images/twitter.png';
import img2 from '../assets/images/facebook.png';
import img3 from '../assets/images/gmail.png';
import './ContactUs.css';

function ContactUs() {
  
    return (
    <> 
    <div className='container'>
        <div className='row'>
            <div className='col-md-12 text-center'>
                <h3> Contact Us </h3>

            </div>

            <div className='col-md-6'>
                <p> For Queries, Suggestions, Complaints, please feel free to contact us. </p>

            </div>

            <div className='col-md-6 d-flex justify-content-center'>
                <ul className='ulitems'>
                    <li>
                        <a href='https://twitter.com' target='blank'>
                            <img src={img1} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href='https://facebook.com' target='blank'>
                            <img src={img2} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href='https://mail.com' target='blank'>
                            <img src={img3} alt=""/>
                        </a>
                    </li>
                </ul>

            </div>

        </div>
        
    </div>
    </>
  )
}

export default ContactUs;