import React,{useEffect} from "react";
import './section.css';
import {MdOutlineEast} from 'react-icons/md';
import { useParams,useNavigate } from "react-router-dom";

function Home(props) {
  const navigate = useNavigate();
  const paramId = useParams();
  const ID = props.id;
  
  useEffect(()=>{
      if(ID && paramId){
        if(ID !== paramId){
          navigate(`/${ID}/shorts`)
        }
      }else {
        if(!ID){
          navigate('/');
        }
      }
  },[]);
 
  const iconStyle = {
    fontSize: '40px',
  }

  return (
    <>   
    <div className="container bord">
      <div className="row">
        <h3 className="mt-4" style={{textAlign: "center"}}> Youtube Downloader </h3>
        <div style={{textAlign: "center"}}> 
        <input type="text" style={{width: "600px", height: "40px", marginTop: "20px", border: '2px solid black', padding: "2px"}} placeholder="Paste Youtube link" /> <button style={{backgroundColor: " #ff0068", color: "white",height: "40px"}}> Start <MdOutlineEast /> </button> 
        <p className="mt-4 mb-4" style={{textAlign: "center"}} > By using our service you are accepting our terms of service. </p>
        </div>     
      </div>
    </div>
    
    <div className="container">
      <div className="row"> 
          <h2 className="mt-3 mb-3" style={{textAlign: "center"}}> Best Youtube Video Shorts </h2>
          <p> Y2Mate is the fastest Youtube Downloader tool that allows you to easily convert and download videos and audio from youtube for free and in the best available quality. Y2Mate is the ultimate tool for downloading unlimited youtube videos without any need for registration. You can quickly convert and download hundreds of videos and music files directly from youtube and other social media websites. We support all audio and video formats like MP3, MP4, M4V, FLV, WEBM, 3GP, WMV, AVI, etc.; the most fantastic thing is that it's completely free. </p> 
        </div>
    </div>

    <hr />
    <div className='container'>
      <div className="row">
    <div className="col-md-6">
      <h5> How to Convert Youtube to MP3 with Y2Mate? </h5>
      <div className="feature">
        <ul className="itemstyle">
            <li> Open Youtube and copy the video URL you want to download in MP3. </li>
            <li> Paste the video URL in the Search box, Tool will fetch video info. </li>
            <li>Select the Audio quality you need and click the "Convert" button. </li>
            <li>After the conversion is successfully completed, click the "Download" button. </li>
            <li>Once the Audio is downloaded, you can play it whenever and wherever you want. </li>
        </ul>
      </div>
    </div>
    <div className="col-md-6">
      <h5> Why use our Youtube to MP3 Downloader? </h5>
      <div className="feature">
        <ul className="itemstyle">
            <li> Unlimited MP3 Conversions, so you can convert all your videos. </li>
            <li> We use High-Speed encoders to convert Youtube videos to music files. </li>
            <li> We offer Unlimited Downloads, convert as much as you can. </li>
            <li> No Signup/Registration required, our service is totally free. </li>
            <li> We support multiple qualities, e.g., 64kbps, 128kbps, and 160kbps.</li>
        </ul>
      </div>
    </div>
  </div>
   </div>
    

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

  </>
  );
}

export default Home;
