import React , {useState}from 'react'
import YouTube from 'react-youtube';
import './player.css'

export default function Player() {
    let opts = {
        height: '180',
        width: '320',
        playerVars: {
          autoplay: 1,
        },
    };
    if (window.screen.width < 600) {
        opts = {
            height: '100',
            width: '200',
        };
    }
    const onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    return (
        <div className='player'>
            <YouTube videoId="8IYm8OFbzOE" opts={opts} onReady={(e) => {
            onReady(e)}} />
        </div>
    )
}
