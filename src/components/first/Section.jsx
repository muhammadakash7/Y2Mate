import React, { useEffect, useState } from "react";
import './section.css';
import { MdOutlineEast } from 'react-icons/md';
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation, } from "react-i18next";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import Table from "./Table";



function Home(props) {
  const [responseData, setResponseData] = useState(null);
  const [youtubeurl, setYoutubeUrl] = useState('');
  const [showClearIcon, setShowClearIcon] = useState(false);    // for delete icon

  
  const { t } = useTranslation();
  const navigate = useNavigate();
  const paramId = useParams();
  const ID = props.id;

  useEffect(() => {
    if (ID && paramId) {
      if (ID !== paramId) {
        navigate(`/${ID}`)
      }
    } else {
      if (!ID) {
        navigate('/');
      }
    }
  }, []);

  const iconStyle = {
    fontSize: '40px',
  }

  const FetchApiData = async () => {
    try {
      const apiurl = 'https://en.y2mate.is/analyze';
      // const youtubeurl = 'https://youtu.be/vtdk3QzlLmo';

      const formData = new FormData();
      formData.append('url', youtubeurl);

      const headers = {
        'XCRF-TOKEN': 'your-csrf-token-value',
        'Content-Type': 'application/json'
      };
      const response = await axios.post(apiurl, formData, { headers });
      const data = response.data;
      setResponseData(data);
      // const taskId = data.taskId; // Assuming the task ID is available in the response

      // return taskId;
      // console.log(setResponseData);

    } catch (error) {
      console.log('Error Fetching Data', error);
    }
  }

  // const handleUrlChange = (event) => {
  //   setYoutubeUrl(event.target.value);
  // }
  const handleUrlChange = (e) => {
    const url = e.target.value;
    setYoutubeUrl(url);
    setShowClearIcon(url !== "");
  };

  const handleClearUrl = () => {
    setYoutubeUrl("");
    setShowClearIcon(false);
  };


  return (
    <>
      {/* <p>Id {props.id}</p> */}
      <div className="container bord">
        <div className="row">
          <h3 className="mt-4" style={{ textAlign: "center" }}> Youtub Download </h3>
          <div style={{ textAlign: "center" }}>
            <input type="text" style={{
              width: "600px",
              height: "40px", marginTop: "20px",
              border: '2px solid black',
              padding: "2px"
            }} placeholder={t('trans.placeholder')}
            value={youtubeurl}
            onChange={handleUrlChange}
            />

            {/* // for delete icon */}
            <span style={{border: '2px soliid black'}}> 
          {
            showClearIcon && (
              <MdDelete className ="clear-icon" onClick={handleClearUrl} style={{
               fontSize: "50px",
               color: "#888",
               cursor: "pointer",
            }} />

          )}
          </span>
            <button
              style={{
                backgroundColor: " #ff0068",
                color: "white",
                height: "40px"
              }} onClick={FetchApiData} > {t('trans.start')} <MdOutlineEast /> </button>
            <p className="mt-4 mb-4" style={{ textAlign: "center" }} > {t('trans.serv')} </p>
            {/* api data  */}
            {/* <div className="container">
              <div className="row">
                <div className=" col-md-6 ">
                  {
                    responseData && (
                      <>

                        <img src={responseData.formats.thumbnail} alt="Video Thumbnail" style={{ marginTop: '5px', width: '500px', height: '400px' }} />
                        <p>  {responseData.formats.title} </p>
                        <p><span>Duration:</span> {responseData.formats.duration} </p>

                      </>
                    )}
                </div>
                <div className="col-md-6">
                  {
                    responseData && (
                      <>
                        <div className="tab">
                          <button>Video</button>
                          <button>Audio</button>
                        </div>
                        <table className="table table-bordered " style={{ marginTop: "5px" }}>
                          <thead>
                            <tr>
                              <th>Quality</th>
                              <th>File size</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td> (.{responseData.formats.video[5].fileType}) {responseData.formats.video[5].quality} </td>
                              <td> {convertBytesToMB(responseData.formats.video[5].fileSize)} MB </td>
                              <td><button style={{ backgroundColor: "#ff0068", color: "white" }}><IoFilmOutline /> Convert</button></td>
                            </tr>
                            <tr>
                              <td> (.{responseData.formats.video[4].fileType})  {responseData.formats.video[4].quality} </td>
                              <td> {convertBytesToMB(responseData.formats.video[4].fileSize)} MB </td>
                              <td><button style={{ backgroundColor: "#ff0068", color: "white" }}> <IoFilmOutline /> Convert</button></td>
                            </tr>
                            <tr>
                              <td> (.{responseData.formats.video[3].fileType}) {responseData.formats.video[3].quality} </td>
                              <td> {convertBytesToMB(responseData.formats.video[3].fileSize)} MB </td>
                              <td><button style={{ backgroundColor: "#ff0068", color: "white" }}> <IoFilmOutline /> Convert</button></td>
                            </tr>
                            <tr>
                              <td> (.{responseData.formats.video[2].fileType}) {responseData.formats.video[2].quality} </td>
                              <td> {convertBytesToMB(responseData.formats.video[2].fileSize)} MB </td>
                              <td><button style={{ backgroundColor: "#ff0068", color: "white" }}> <IoFilmOutline /> Convert</button></td>
                            </tr>
                            <tr>
                              <td> (.{responseData.formats.video[1].fileType}) {responseData.formats.video[1].quality} </td>
                              <td> {convertBytesToMB(responseData.formats.video[1].fileSize)} MB </td>
                              <td><button style={{ backgroundColor: "#ff0068", color: "white" }}> <IoFilmOutline /> Convert</button></td>
                            </tr>
                            <tr>
                              <td> (.{responseData.formats.video[0].fileType}) {responseData.formats.video[0].quality} </td>
                              <td> {convertBytesToMB(responseData.formats.video[0].fileSize)} MB </td>
                              <td><button style={{ backgroundColor: "#ff0068", color: "white" }}> <IoFilmOutline /> Convert</button></td>
                            </tr>
                          </tbody>
                        </table>
                      </>
                    )}
                </div>

              </div>


            </div> */}
              {responseData && <Table data={responseData} type="all"/>}
              
              


          </div>
        </div>
      </div>
      <div>


      </div>
      <div className="container">
        <div className="row">
          <h2 className="mt-3 mb-3" style={{ textAlign: "center" }}> {t('trans.sec1-title')} </h2>
          <p> {t('trans.sec1-cont')} </p>
        </div>
      </div>

      <hr />

      <div className='container'>
        <div className="row">
          <div className="col-md-6">
            <h5> {t('trans.sec2-title1')} </h5>
            <div className="feature">
              <ul className="itemstyle">
                <li>{t('trans.sec2-cont1')} </li>
                <li>{t('trans.sec2-cont11')} </li>
                <li> {t('trans.sec2-cont12')} </li>
                <li>{t('trans.sec2-cont13')}</li>
                <li>{t('trans.sec2-cont14')} </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <h5> {t('trans.sec2-title2')} </h5>
            <div className="feature">
              <ul className="itemstyle">
                <li> {t('trans.sec2-cont2')} </li>
                <li> {t('trans.sec2-cont21')} </li>
                <li> {t('trans.sec2-cont22')} </li>
                <li> {t('trans.sec2-cont23')}</li>
                <li> {t('trans.sec2-cont24')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <hr style={{ width: '1050px' }} />
      </div>

      <div className="container">
        <div className='row mt-5'>
          <div className='col-md-4 text-center'>
            <span><i className="fa-solid fa-arrows-rotate" style={iconStyle}></i></span>
            <h5> {t('trans.sec3-title1')}  </h5>
            <p> {t('trans.sec3-cont1')} </p>

          </div>

          <div className='col-md-4 text-center'>
            <span><i className="fa-sharp fa-solid fa-download" style={iconStyle}></i></span>
            <h5> {t('trans.sec3-title2')} </h5>
                 {t('trans.sec3-cont2')}

          </div>
          <div className='col-md-4 text-center'>
            <span><i className="fa-solid fa-user" style={iconStyle}></i></span>
            <h5> {t('trans.sec3-title3')}</h5>
            {t('trans.sec3-cont3')}  

          </div>
          <div className='col-md-4 text-center'>
            <span><i className="fa-solid fa-bolt" style={iconStyle}> </i> </span>
            <h5> {t('trans.sec3-title4')}</h5>
            {t('trans.sec3-cont4')}

          </div>
          <div className='col-md-4 text-center'>
            <span><i className="fa-solid fa-check" style={iconStyle}></i></span>
            <h5> {t('trans.sec3-title5')} </h5>
            {t('trans.sec3-cont5')}

          </div>
          <div className='col-md-4 text-center'>
            <span><i className="fa-solid fa-mobile" style={iconStyle}></i></span>
            <h5> {t('trans.sec3-title6')} </h5>
            {t('trans.sec3-cont6')}

          </div>

        </div>
      </div>

    </>
  );
}

export default Home;
