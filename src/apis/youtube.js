import axios from 'axios';


const KEY = 'AIzaSyCINnco895U5Pi57mPRUgat69d_suY8e-g';


export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        type: "video",
        // order:"viewCount",
        key: KEY
        
    }
    
});



