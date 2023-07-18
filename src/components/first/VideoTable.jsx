
import React, { useState, useEffect } from 'react';
import { IoFilmOutline } from 'react-icons/io5';
import axios from 'axios';
import ProgressBar from 'react-bootstrap/ProgressBar';
function VideoTable({ data }) {
  const [downloadIndexes, setDownloadIndexes] = useState([]);
  const [taskData, setTaskData] = useState({});
  const [isLoadingIndex, setIsLoadingIndex] = useState(null);
  const [intervalId, setIntervalId] = useState(null);
  const [progressMap, setProgressMap] = useState({});

  const convertBytesToMB = (bytes) => {
    const megabytes = bytes / (1024 * 1024);
    return megabytes.toFixed(2);
  };

  const handleConvert = async (url, index) => {
    try {
      setIsLoadingIndex(index); // Set the index for the currently loading button

      setProgressMap((prevProgressMap) => ({
        ...prevProgressMap,
        [index]: 0, // Reset the progress to 0 when starting a new conversion
      }));

      const videoQuality = reverseVideoFormate[index].needConvert;
      if (videoQuality === false){

        handleDownload(url);
        setDownloadIndexes((prevIndexes)=>[...prevIndexes,index]);
      }

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
        console.log(taskData);

        setTaskData((prevTaskData) => ({
          ...prevTaskData,
          [index]: taskData,
        }));

        setDownloadIndexes((prevIndexes) => [...prevIndexes, index]);

        const checkTaskStatus = setInterval(async () => {
          try {
            const checkTaskApiurl = 'https://srvcdn2.2convert.me/api/json/task';
            const checkTaskFormData = new FormData();
            checkTaskFormData.append('taskId', taskId);
        
            const checkTaskResponse = await axios.post(checkTaskApiurl, checkTaskFormData, { headers });
            const checkTaskData = checkTaskResponse.data;
            console.log(checkTaskData);
        
            if (checkTaskData.status === 'completed') {
              setTaskData((prevTaskData) => ({
                ...prevTaskData,
                [index]: checkTaskData,
              }));
        
              clearInterval(checkTaskStatus); // Stop the interval
            } else if (checkTaskData.convert_progress === 100 || checkTaskData.download) {
              setTaskData((prevTaskData) => ({
                ...prevTaskData,
                [index]: checkTaskData,
              }));
        
              clearInterval(checkTaskStatus); // Stop the interval
            } else {
              setProgressMap((prevProgressMap) => ({
                ...prevProgressMap,
                [index]: checkTaskData.convert_progress,
              }));
            }
          } catch (error) {
            console.log('Error Fetching Task Status', error);
          }
        }, 2000); // Check every 2 seconds
        
        setIntervalId(checkTaskStatus); // Store the interval ID  
      }
    } catch (error) {
      console.log('Error Fetching Data', error);
    } finally {
      setIsLoadingIndex(null); // Reset the loading index back to null
    }
  };

  const handleDownload = (url) => {
    window.location.href = url;
  };

  const isDownloaded = (index) => downloadIndexes.includes(index);

  useEffect(() => {
    setDownloadIndexes([]);
    setTaskData({});
    setIsLoadingIndex(null);
    clearInterval(intervalId); // Clear the interval on component unmount or when data changes
  }, [data]);

  const reverseVideoFormate = [...data.formats.video].reverse();

  return (
    <>
      {reverseVideoFormate.map((videoFormat, index) => (
        <tr key={index}>
          <td>(.{videoFormat.fileType}) {videoFormat.quality}</td>
          <td>{convertBytesToMB(videoFormat.fileSize)} MB</td>
          <td>
            {isDownloaded(index) ? (
              <>
              <button
                style={{ backgroundColor: '#ff0068', color: 'white' }}
                onClick={() => handleDownload(taskData[index]?.download)}
              >
                <IoFilmOutline /> Download
              </button>
               {progressMap[index] > 0 && (
                <div className="progress-bar-wrapper">
                  <ProgressBar now={progressMap[index]} label={`${progressMap[index]}%`} srOnly />
                </div>
               )}
              </>
            ) : (
              <button
                style={{ backgroundColor: '#ff0068', color: 'white' }}
                onClick={() => {
                  handleConvert(videoFormat.url,index)}}
              >
                {isLoadingIndex === index ? (
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
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

export default VideoTable;

