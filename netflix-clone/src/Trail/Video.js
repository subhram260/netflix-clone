import React from "react";
import './Video.css';

function Video({channel_name="Code dost",title,view_count,time,id}) {

  return (
    <>
      <div className="video">
        <img className="video-image" src={`https://picsum.photos/640/360?random=${id}`} alt="imag"/>
        <div className="title">{title}</div>
        <div className="Channel-name">{channel_name}</div>
        <div className="video-view_count-time"> {view_count} Views <span>.</span>{time} </div>
        
        </div>
    </>
  );
}

export default Video;
