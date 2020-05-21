import React, { useState } from 'react';
import YouTube from 'react-youtube';

import {VideoPlaylist} from '../asset/VideoData';

function Video() {
    const [currentVideo, setCurrentVideo] = useState('');
    const [player, setPlayer] = useState(null);
    const [videoStart, setVideoStart] = useState(false);

    const onReady = (event) => {
        setPlayer(event.target);
    };

    const onPlayVideo = () => {
        player.playVideo();
    };

    const onPauseVideo = () => {
        player.pauseVideo();
    };

    const onChangeVideo = () => {
        currentVideo===VideoPlaylist[0] ? setCurrentVideo(VideoPlaylist[1]) : setCurrentVideo(VideoPlaylist[0]);
    };

    return videoStart ? 
        <div className="bg-2 container-fluid container__margin"> 
            <h3 className="mont-font text-center text-white">{currentVideo.name}</h3>
            <div className="embed-responsive embed-responsive-16by9">
                <YouTube class="embed-responsive-item" videoId={currentVideo.videoId} onReady={onReady} />
            </div>
            <div className="button__bar"> 
                <button className="btn btn-light" type="button" onClick={onPlayVideo} disabled={!player}>
                    Play
                </button>
                <button className="btn btn-light" type="button" onClick={onPauseVideo} disabled={!player}>
                    Pause
                </button>
                <button className="btn btn-light" type="button" onClick={onChangeVideo} disabled={!player}>
                    Watch your counterpart video
                </button>
            </div>
        </div> 

    :
        <div className=" bg-0 container-fluid container__margin ">
            <h4 className="mont-font text-center">Are you female or male?</h4>
            <div 
                className="ui floating message options"
                onClick={() => {
                    setVideoStart(true);
                    setCurrentVideo(VideoPlaylist[0]);
                    }
                }
            >
                Female
            </div>
            <div 
                className="ui floating message options"
                onClick={() => {
                    setVideoStart(true);
                    setCurrentVideo(VideoPlaylist[1]);
                    }
                }
            >
             Male</div>
        </div>
}

export default Video;