import React from 'react';
import './section2.css';

function Section2() {
    const iconStyle = {
        fontSize: '40px', 
    };
  
    return (
        <div className="container"> 
        <div className='row mt-5'>
        <div className='col-md-4 text-center'>
            <span> <i className="fa-regular fa-thumbs-up" style={iconStyle}> </i> </span>
            <h5> Unlimited Conversions </h5>
            <p>We offers unlimited conversions of youtube videos to mp3 and mp4.</p>

        </div>

        <div className='col-md-4 text-center'>
            <span><i className="fa-solid fa-cloud-arrow-up" style={iconStyle}></i></span>
            <h5> Auto Fetch from Youtube  </h5>
            <p>We automatically fetch data from Youtube, you just have to copy and paste the youtube URL.</p>

        </div>
        <div className='col-md-4 text-center'>
            <span><i className="fa-sharp fa-solid fa-download" style={iconStyle}></i></span>
            <h5> No Registration Required </h5>
            <p>You don't need to register to convert and download youtube videos to mp4 and mp3 format.</p>

        </div>
        <div className='col-md-4 text-center'>
            <span><i className="fa-sharp fa-solid fa-headphones" style={iconStyle}> </i> </span>
            <h5> Faster Video Conversion </h5>
            <p>We use the latest technologies for encoding system, so you don't have to wait much for the conversion.</p>

        </div>
        <div className='col-md-4 text-center'>
            <span><i className="fa-solid fa-ban" style={iconStyle}></i></span>
            <h5> Browser Compatibility  </h5>
            <p>Our web app is fully compatible with the latest browsers like Chrome, Firefox, Safari, Microsoft Edge, etc.</p>

        </div>
        <div className='col-md-4 text-center'>
            <span><i className="fa-solid fa-circle-check" style={iconStyle}></i></span>
            <h5> Completely Mobile friendly  </h5>
            <p>Our site can be used on any device to download your favorite youtube videos to mp4 and mp3.</p>

        </div>
        
    </div>
    </div>
  )
}

export default Section2;