import React from 'react'
import Video from '../Trail/Video';
import video_list from '../Data/data';
import '../Trail/VideoRows.css'

function VideoRows({Category_list}) {
  return (
    <div className='videorows-outer'>
    <div className='Category_list'>{Category_list}</div>
    <div className="videorows">
    {video_list.map(video=><Video
    key={video.id}
      id={video.id}
      title={video.title}
      view_count={video.view_count}
      time={video.time}
      ></Video>)}
    </div>
    </div>

  )
}

export default VideoRows;