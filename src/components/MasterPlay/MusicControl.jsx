import React, { useContext, useEffect, useState } from 'react'
import { IoMdRepeat, IoMdShuffle } from "react-icons/io";
import { ImPrevious2, ImNext2 } from "react-icons/im";
import { BsPlayCircleFill, BsPauseCircleFill } from "react-icons/bs";
import { SongContext } from '../Index';
import songsData from "../../api/songsData.json";


const MusicControl = ({ className = "", playIconSize = "35", hideBtn = "hidden" }) => {

    // access all states and functions
    const { musicRef, isPlaying, setIsPlaying, setCurrentSI, currentSI, duration, ct } = useContext(SongContext);

    // play and pause the music
    const playPause = () => {
        if (isPlaying) {
            musicRef.current.pause();
        } else {
            musicRef.current.play();
        }
        setIsPlaying(!isPlaying)
    }

    // change the previous song
    const prevSong = () => {
        if (currentSI > 0) {
            setCurrentSI(currentSI - 1);
            setIsPlaying(true);
        }
    }

    // change the next song
    const nextSong = () => {
        if (currentSI < songsData.length - 1)
            setCurrentSI(currentSI + 1);
        setIsPlaying(true)
    }

    return (
        <div className='flex items-center gap-6 text-white'>

            <button className={`hidden md:inline px-3 rounded-full w-[110px] overflow-hidden h-[28px] text-gray-300 bg-transparent border py-[2px] text-sm cursor-default delay-200 ${className}`}>
                00:{ct} / 00:{duration}
            </button>

            <button className={`md:inline ${hideBtn}`} >
                <IoMdRepeat size={20} />
            </button>
            <button className={`md:inline ${hideBtn}`} onClick={prevSong}>
                <ImPrevious2 size={25} />
            </button>
            <button className=' text-red-600 bg-white overflow-hidden rounded-full'
                onClick={playPause}>
                {isPlaying ? <BsPauseCircleFill size={playIconSize} /> : <BsPlayCircleFill size={playIconSize} />}
            </button>
            <button className={`md:inline ${hideBtn}`} onClick={nextSong}>
                <ImNext2 size={25} />
            </button>
            <button className={`md:inline ${hideBtn}`} >
                <IoMdShuffle size={18} />
            </button>
        </div>
    )
}

export default MusicControl
