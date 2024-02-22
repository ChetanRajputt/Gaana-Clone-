import React, { useContext, useEffect, useRef, useState } from 'react'
import MusicInfo from './MusicInfo'
import MusicControl from './MusicControl'
import SoundControl from './SoundControl'
import AboutMusic from './AboutMusic'
import { SongContext } from '../Index';
import songsData from "../../api/songsData.json";

function MasterPlay() {

    // all songs data are loaded 
    const [songs, setSong] = useState(songsData);

    // set current song index
    //using context api to get all references
    const { musicRef, currentSI, duration, onPlaying, ct } = useContext(SongContext);

    // bydefault off music beacuse audio elements is played
    useEffect(() => {
        musicRef.current.pause();
    }, [])

    // for update the song current position after click the client song seekbar position
    const seekBarRef = useRef();

    const seekBarUpdate = (e) => {
        let width = seekBarRef.current.clientWidth;
        const offset = e.nativeEvent.offsetX;

        const divprogress = offset / width * 100;
        musicRef.current.currentTime = divprogress / 100 * duration;

    }


    return (
        <div id='currentAudioNavbar' className='w-full fixed bottom-[-12%] transition-all duration-300 left-0  h-[70px] md:h-[73px] z-[1000] bg-[#222428]
        text-gray-300 shadow-2xl'>
            <div className='w-full cursor-pointer bg-gray-500' onClick={seekBarUpdate} ref={seekBarRef}>
                <div style={{ width: `${ct * 100 / duration + "%"}` }} className='h-[2px] bg-red-600'></div>
            </div>
            <audio className=' absolute hidden' onTimeUpdate={onPlaying} autoPlay ref={musicRef} id='masterSongPlay' src={songs[`${currentSI}`].song} controls></audio>
            <div className='flex items-center justify-between px-6 mt-3 md:mt-4'>
                <MusicInfo />
                <MusicControl />
                <SoundControl />
                <AboutMusic />
            </div>
        </div>
    )
}

export default MasterPlay
