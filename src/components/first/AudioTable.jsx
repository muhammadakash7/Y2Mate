// import React, { useState, useEffect } from 'react';
// import { IoFilmOutline } from 'react-icons/io5';
// import axios from 'axios';
// import ProgressBar from 'react-bootstrap/ProgressBar';

// function AudioTable({ data }) {
//   const [downloadIndexes, setDownloadIndexes] = useState([]);
//   const [taskData, setTaskData] = useState({});
//   const [isLoadingIndex, setIsLoadingIndex] = useState(null);
//   const [intervalId, setIntervalId] = useState(null);
//   const [progress, setProgress] = useState(0);

//   const convertBytesToMB = (bytes) => {
//     const megabytes = bytes / (1024 * 1024);
//     return megabytes.toFixed(2);
//   };

//   const handleConvert = async (url, index) => {
//     try {
//       setIsLoadingIndex(index);
//       setProgress(100); // Reset the progress to 0 when starting a new conversion

//       const apiurl = 'https://srvcdn2.2convert.me/api/json';
//       const hash = url;
//       const formData = new FormData();
//       formData.append('hash', hash);

//       const headers = {
//         'XCRF-TOKEN': 'your-csrf-token-value',
//         'Content-Type': 'application/json',
//       };

//       const response = await axios.post(apiurl, formData, { headers });
//       const responseData = response.data;
//       const taskId = responseData.taskId;

//       if (taskId) {
//         const taskApiurl = 'https://srvcdn2.2convert.me/api/json/task';
//         const taskFormData = new FormData();
//         taskFormData.append('taskId', taskId);

//         const taskResponse = await axios.post(taskApiurl, taskFormData, { headers });
//         const taskData = taskResponse.data;

//         setTaskData((prevTaskData) => ({
//           ...prevTaskData,
//           [index]: taskData,
//         }));

//         setDownloadIndexes((prevIndexes) => [...prevIndexes, index]);

//         const checkTaskStatus = setInterval(async () => {
//           try {
//             const checkTaskApiurl = 'https://srvcdn2.2convert.me/api/json/task';
//             const checkTaskFormData = new FormData();
//             checkTaskFormData.append('taskId', taskId);
        
//             const checkTaskResponse = await axios.post(checkTaskApiurl, checkTaskFormData, { headers });
//             const checkTaskData = checkTaskResponse.data;
        
//             if (checkTaskData.status === 'completed') {
//               setTaskData((prevTaskData) => ({
//                 ...prevTaskData,
//                 [index]: checkTaskData,
//               }));
        
//               clearInterval(checkTaskStatus);
//             } else if (checkTaskData.convert_progress === 100 || checkTaskData.download) {
//               setTaskData((prevTaskData) => ({
//                 ...prevTaskData,
//                 [index]: checkTaskData,
//               }));
        
//               clearInterval(checkTaskStatus);
//             } else {
//               setProgress(checkTaskData.convert_progress);
//             }
//           } catch (error) {
//             console.log('Error Fetching Task Status', error);
//           }
//         }, 2000);
        
//         setIntervalId(checkTaskStatus);
//       }
//     } catch (error) {
//       console.log('Error Fetching Data', error);
//     } finally {
//       setIsLoadingIndex(null);
//     }
//   };

//   const handleDownload = (url) => {
//     window.location.href = url;
//   };

//   const isDownloaded = (index) => downloadIndexes.includes(index);

//   useEffect(() => {
//     return () => {
//       // Cleanup function to clear the interval on component unmount
//       clearInterval(intervalId);
//     };
//   }, [intervalId]);

//   return (
//     <>
//       {data.formats.audio.map((audioFormat, index) => (
//         <tr key={index}>
//           <td>(.{audioFormat.fileType}) {audioFormat.quality}</td>
//           <td>{convertBytesToMB(audioFormat.fileSize)} MB</td>
//           <td>
//             {isDownloaded(index) ? (
//               <>
//                 <button
//                   style={{ backgroundColor: '#ff0068', color: 'white' }}
//                   onClick={() => handleDownload(taskData[index]?.download)}
//                 >
//                   <IoFilmOutline /> Download
//                 </button>
//                 <div className="progress-bar-wrapper">
//                   <ProgressBar now={progress} label={`${progress}%`} srOnly />
//                 </div>
//               </>
//             ) : (
//               <button
//                 style={{ backgroundColor: '#ff0068', color: 'white' }}
//                 onClick={() => handleConvert(audioFormat.url, index)}
//               >
//                 {isLoadingIndex === index ? (
//                   <>
//                     <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
//                   </>
//                 ) : (
//                   <IoFilmOutline />
//                 )}
//                 Convert
//               </button>
//             )}
//           </td>
//         </tr>
//       ))}
//     </>
//   );
// }

// export default AudioTable;


import React, { useState, useEffect } from 'react';
import { IoFilmOutline } from 'react-icons/io5';
import axios from 'axios';
import ProgressBar from 'react-bootstrap/ProgressBar';

function AudioTable({ data }) {
  const [downloadIndexes, setDownloadIndexes] = useState([]);
  const [taskData, setTaskData] = useState({});
  const [isLoadingIndex, setIsLoadingIndex] = useState(null);
  const [intervalId, setIntervalId] = useState(null);
  const [progressMap, setProgressMap] = useState({});

  const [disable, setDisable] = useState(false);
  // const [disableConvert,]

  const convertBytesToMB = (bytes) => {
    const megabytes = bytes / (1024 * 1024);
    return megabytes.toFixed(2);
  };

  const handleConvert = async (url, index) => {
    try {
      // 
      setIsLoadingIndex(index);
      
      setDisable(true);
      setProgressMap((prevProgressMap) => ({
        ...prevProgressMap,
        [index]: 0, // Reset the progress to 0 when starting a new conversion
      }));

      const apiurl = 'https://srvcdn2.2convert.me/api/json';

      const hash = url;
      const formData = new FormData();
      formData.append('hash', hash);

      const headers = {
        'XCRF-TOKEN': 'your-csrf-token-value',
        'Content-Type': 'application/json',
      };

      const response = await axios.post(apiurl, formData, { headers });
      const responseData = response.data;
      const taskId = responseData.taskId;

      if (taskId) {
        const taskApiurl = 'https://srvcdn2.2convert.me/api/json/task';
        const taskFormData = new FormData();
        taskFormData.append('taskId', taskId);

        const taskResponse = await axios.post(taskApiurl, taskFormData, { headers });
        const taskData = taskResponse.data;
        
        setTaskData((prevTaskData) => ({
          ...prevTaskData,
          [index]: taskData,
        }));

        setDownloadIndexes((prevIndexes) => [...prevIndexes, index]);
        
        // code for again api call untill data fetched from API
        const checkTaskStatus = setInterval(async () => {
          try {
            setDisable(true)
            const checkTaskApiurl = 'https://srvcdn2.2convert.me/api/json/task';
            const checkTaskFormData = new FormData();
            checkTaskFormData.append('taskId', taskId);
        
            const checkTaskResponse = await axios.post(checkTaskApiurl, checkTaskFormData, { headers });
            const checkTaskData = checkTaskResponse.data;
        
            if (checkTaskData.status === 'completed') {
              setTaskData((prevTaskData) => ({
                ...prevTaskData,
                [index]: checkTaskData,
              }));
              
 
              clearInterval(checkTaskStatus);
              
            } else if (checkTaskData.convert_progress === 100 || checkTaskData.download) {
              setDisable(false)
              
              setTaskData((prevTaskData) => ({
                ...prevTaskData,
                [index]: checkTaskData,
              }));
        
              clearInterval(checkTaskStatus);
              
              setProgressMap((prevProgressMap) => {
                const updatedProgressMap = { ...prevProgressMap };
                delete updatedProgressMap[index];
                return updatedProgressMap;
              });

              
            } else {
              setProgressMap((prevProgressMap) => ({
                ...prevProgressMap,
                [index]: checkTaskData.convert_progress,
              }));
            }
          } catch (error) {
            console.log('Error Fetching Task Status', error);
          }
          // setDisable(false)
        }, 2000);
        
        setIntervalId(checkTaskStatus);
      }
    } catch (error) {
      console.log('Error Fetching Data', error);
    } finally {
      setIsLoadingIndex(null);
    }
  };

  const handleDownload = (url) => {
    window.location.href = url;
  };

  const isDownloaded = (index) => downloadIndexes.includes(index);

  useEffect(() => {
    return () => {
      // Cleanup function to clear the interval on component unmount
      clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    <>
      {data.formats.audio.map((audioFormat, index) => (
        <tr key={index}>
          <td>(.{audioFormat.fileType}) {audioFormat.quality}</td>
          <td>{convertBytesToMB(audioFormat.fileSize)} MB</td>
          <td>
            {isDownloaded(index) ? (
              <>
              {
                disable?<>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              </>:
              <button
              // disabled={disable}
              className='btn'
                style={{ backgroundColor: '#ff0068', color: 'white' }}
                onClick={() => handleDownload(taskData[index]?.download)}
      
              >
                <IoFilmOutline /> Download
              </button>
              }
                {/* <button
                // disabled={disable}
                className='btn'
                  style={{ backgroundColor: '#ff0068', color: 'white' }}
                  onClick={() => handleDownload(taskData[index]?.download)}
        
                >
                  <IoFilmOutline /> Download
                </button> */}
                {progressMap[index] >= 0 && (
                  <div className="progress-bar-wrapper">
                    <ProgressBar now={progressMap[index]} label={`${progressMap[index]}%`} srOnly />
                  </div>
                )}
              </>
            ) : (
              <button
                disabled={disable}
                className='btn'
                style={{ backgroundColor: '#ff0068', color: 'white' }}
                onClick={() => handleConvert(audioFormat.url, index)}
              >
                {isLoadingIndex === index ? (
                  <>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  </>
                ) : (
                  <IoFilmOutline />
                )}
                Convert
              </button>
            )}
          </td>
        </tr>
      ))}
    </>
  );
}

export default AudioTable;


