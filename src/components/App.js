import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


// class App extends React.Component {
    
//     state = {
//         videos: [],
//         selectedVideo: null
//     }

//     componentDidMount(){
//         let arr = ['Building', 'Ethical hacking', 'Vanhack', 'Technology', 'internet of things', 'cyber security', 'Canada', 'Mexico'];
//         let n = Math.floor(Math.random(arr) * arr.length-1)
//         this.onTermSubmit(n)
//     }
    
//    onTermSubmit = async term => {
//       const response = await youtube.get('/search', {
//            params: {
//                q: term

//            }
//       })  
//        this.setState({
//            videos: response.data.items,
//            selectedVideo:response.data.items[0] 

//        });
       
//    }
    
//     onVideoSelect = (video) => {
//         this.setState({ selectedVideo: video })
//         console.log(this.state.selectedVideo);
//     }
   

//     render(){
//         return (
//             <div className="ui container">
//                 <SearchBar onFormSubmit={this.onTermSubmit} />
//                 <div className="ui grid">
//                     <div className="ui row">
//                         <div className="eleven wide column">
//                             <VideoDetail video={this.state.selectedVideo} />
//                         </div>
//                         <div className="five wide column">
//                             <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
//                         </div>
//                     </div>    
//                 </div>

//             </div>
//         )
//     }
// }


// export default App;


const App = () => {
    
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setselectedVideo] = useState(null);
    
    useEffect(() => {
        onTermSubmit('javascript');
    },[]);

    const onTermSubmit = async (term) => {
        const response =  await youtube.get('/search', {
                params: {
                    q: term
                }
        })
        setVideos(response.data.items);
        setselectedVideo(response.data.items[0]);
    }

    const onVideoSelect = (video) => {
            setselectedVideo(video); 
            
        console.log(selectedVideo);

    }

    

    return (
        <div className="ui container">
            <SearchBar onFormSubmit={onTermSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />

                    </div>
                    <div className="five wide column">
                        <VideoList videos={videos} onVideoSelect={onVideoSelect} />
                    </div>

                </div>
                
            </div>
            
        </div>
    )
}

export default App;