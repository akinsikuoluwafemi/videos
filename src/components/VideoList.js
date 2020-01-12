import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    // destructure videos from props
    const renderedList = videos.map(video => <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect}/>)
    
    return <div className="ui relaxed divided list">{renderedList}</div>

};

export default VideoList;