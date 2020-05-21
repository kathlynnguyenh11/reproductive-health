import React from "react";

import Video from './Video';

class VideoPage extends React.Component{

  render(){
    return(
      <div className="container-fluid container__margin text-center">
        <div className="container-fluid ">
            <h3 className="mont-font">Sexual and Reproductive Anatomy</h3>
            <p className="">Reproductive and sexual anatomy includes your genitals and your internal sex and reproductive organs. Everyone’s reproductive and sexual anatomy looks a little different.</p>
        </div>
        <Video />
      </div>
    )
  }
}

export default VideoPage;
