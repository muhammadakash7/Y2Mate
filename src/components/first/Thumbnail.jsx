import React from 'react';

function Thumbnail({ data }) {
  const convertSecondsToMinutes = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return { minutes, seconds: remainingSeconds };
  };

  console.log(data);
  return (
    <div>
      {data && (
        <>
          <img src={data.formats.thumbnail} alt="Video Thumbnail" style={{ marginTop: '5px', width: '500px', height: '300px' }} />
          <p style={{ fontWeight: 'bold' }}>{data.formats.title}</p>
          <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
          <span>Duration:</span> {convertSecondsToMinutes(data.formats.duration).minutes} Minutes {convertSecondsToMinutes(data.formats.duration).seconds} Seconds
          </p>
        </>
      )}
    </div>
  );
}

export default Thumbnail;
