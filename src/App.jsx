import Hls from "hls.js";
import { useEffect, useRef,useState } from "react";
import './App.css';
import back_farward from "./assets/back-forward.svg";
import fast_farward from "./assets/fast-forward.svg";
import audio_selector from "./assets/audio-selector.svg";
import next from "./assets/next.svg";
import playlist from "./assets/playlist.svg";
import fullscreen from "./assets/fullscreen.svg";
function App() {

  const videoRef = useRef();
  const [value, setValue] = useState(0);
  const [volume, setVolume] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // 
 
  
  const togglePlayPause = () => {
    setIsPlaying(prevState => !prevState);
    videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause();
  };
  
  const handleChange = (event) => {
    const value = event.target.value
    setValue(value);
    videoRef.current.currentTime = (value / 100) * videoRef.current.duration;
  }

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  }

  const decodeDataURI = (dataURI) => {
    // Extract the part after the comma
    const urlEncodedData = dataURI.split(",")[1];

    // Decode URL-encoded data directly
    const decodedString = decodeURIComponent(urlEncodedData);

    return decodedString;
  };

  
  useEffect(() => {
    
    const hls = new Hls({
      // debug: true,
      maxBufferLength: 30,
      liveSyncDuration: 5,
    });
    if (Hls.isSupported() && videoRef.current) {
      hls.loadSource("/video/master.m3u8");
      hls.attachMedia(videoRef.current);
      hls.on(Hls.Events.ERROR, (err) => {
        console.log(err);
      });

      hls.on(Hls.Events.BUFFER_APPENDING, (event, data) => {
        // console.log('Buffering event...',event);
        // console.log('Buffering...',data);
      });
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        togglePlayPause();
        console.log('HLS Manifest loaded, ready to play!');

        videoRef.current.addEventListener('progress', () => {
          const buffered = videoRef.current.buffered;
          const duration = videoRef.current.duration;
          if (buffered.length > 0) {
              const bufferedEnd = buffered.end(buffered.length - 1); // End of the last buffered range
              const percentage = (bufferedEnd / duration) * 100;
              // Update the progress bar width
              document.getElementById('buffer').style.width = `${percentage}%`;
          }
        });
      });

      // Listen to audio track change event
      
      hls.on(Hls.Events.LEVEL_SWITCHED, (event, data) => {
        const level = hls.levels[data.level];
        console.log(`Switched to quality level: ${level.height}p`);
      });
    } else {
      console.log("load");
    }
    return () => {
      // cleanup (when component destroyed or when useEffect runs twice on StrictMode)
      // hls.destroy();
    };
    // videoRef.current.volume = volume / 100;
  }, []);

  return (
    <>
      <div className="video-container">
        <video
        poster="https://lh7-rt.googleusercontent.com/docsz/AD_4nXcBwvqAiJSWpXm80nClrmbfm9joxIRWk_NJE5UNlR5F12p1g9to-2UQqSJDeBCCte3XiYkj-e1a0AMmNt4io0bGSWJ96ccneKiSr2GabeGPKK7B7gRSIKP7oDBuKlOS-lOxXtz-N9C7gJzR2tfbyjCeOT8_?key=BHrHJrW947JQoyriBCBSZA"  
          id="video"
          ref={videoRef}
        />
      </div>
      <div className="controls">
        <div className="progresss">
          <div className="progress-container">
            <input type="range" id="slider" min="0" max="100" step="0.1" value={value} onChange={handleChange} />
            <div className="progress-bar">
              <div className="progress" id="progress" style={{width: `${value}%`}}></div>
              <div className="buffer" id="buffer" ></div>
            </div>
          </div>
        </div>
        <div className="controls-btn-div">
          <div className="d-flex gap-box">
            <div className="controls-play btn-icons" >
              <i className={`fa-solid play-pause ${isPlaying ? 'fa-pause' : 'fa-play'}`} onClick={togglePlayPause} ></i>
            </div>

            <div className="btn-icons " dangerouslySetInnerHTML={{ __html: decodeDataURI(back_farward) }} ></div>
            
            <div className="btn-icons "  dangerouslySetInnerHTML={{ __html: decodeDataURI(fast_farward) }}>
             
            </div>
            
            <div className="btn-icons inline-block volume-container">
              <i id="volume-icon" className="fa-regular fa-volume-high"></i>
              <div className="volume-div">
                <input className="volume-slider" type="range" min="0" max="100" step="0.1" value={volume} onChange={handleVolumeChange} />
                <div className="volume-bar">
                  <div className="volume-box" style={{width: `${volume}%`}}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex gap-box">
            <div className="btn-icons"  dangerouslySetInnerHTML={{ __html: decodeDataURI(next) }} ></div>

            <div className="btn-icons"  dangerouslySetInnerHTML={{ __html: decodeDataURI(playlist) }} ></div>
            
            <div className="btn-icons inline-block menu-container" >
              <div dangerouslySetInnerHTML={{ __html: decodeDataURI(audio_selector) }}></div>
              <div className="dropdown-menu" id="quality-menu">
               
              </div>
            </div>
            
            <div className="btn-icons"  dangerouslySetInnerHTML={{ __html: decodeDataURI(fullscreen) }} ></div>
          </div>
        </div>
      </div>
   </>
  );
}


export default App;