import React, { useRef, useState } from "react";
import SongContext from "./SongContext";
import songsData from "../api/songsData.json";

const SongContextProvider = ({ children }) => {

    // for direct acess Audio element to control music 
    const musicRef = useRef();

    // set a current song index to play and change the current song
    const [currentSI, setCurrentSI] = useState(44);

    // change the play and pause state icon
    const [isPlaying, setIsPlaying] = useState(false);

    // for set & update current song duration and current time position
    const [duration, setDuration] = useState(0);
    const [ct, setCT] = useState(0);

    // automatically set the duration & current time position of the current song
    const onPlaying = () => {

        // find the current song duration and current time position
        const dur = parseInt(musicRef.current.duration);
        const ctime = parseInt(musicRef.current.currentTime);

        // set the duration & current time position of the current song to access globally
        setDuration(dur);
        setCT(ctime);

        // change the song  automatically after end the current song length
        if (ct == duration && songsData[currentSI + 1] !== undefined) setCurrentSI(currentSI + 1);
    }


    return (
        // send the props the all state for direct access any components that can change and use
        <SongContext.Provider value={{ musicRef, currentSI, setCurrentSI, isPlaying, setIsPlaying, onPlaying, duration, setDuration, ct, setCT }}>
            {children}
        </SongContext.Provider>
    )
}

export default SongContextProvider