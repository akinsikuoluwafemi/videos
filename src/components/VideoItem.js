import React, { useEffect, useState } from 'react';
import './VideoItem.css';




// const VideoItem = ({ video, onVideoSelect}) => {
//     // destructure onVideoSelect and video from props
//     return (
//         <div onClick={() => onVideoSelect(video)} className="video-item item">
//             <img className="ui image"
//                 src={video.snippet.thumbnails.medium.url}
//                 alt={video.snippet.title}
//             /> 
//             <div className="content">
//                 <div className="header">{video.snippet.title}</div>
//             </div>
    
//         </div>
//     )
// }

// export default VideoItem;



const VideoItem = ({ video, onVideoSelect}) => {
    
    return (
        <div onClick={() =>onVideoSelect(video)} className="video-item item">
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    )
}

export default VideoItem;