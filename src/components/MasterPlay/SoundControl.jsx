import React, { useContext } from 'react'
import { BsVolumeDownFill } from 'react-icons/bs';
import Button from '../Button';
import songsData from "../../api/songsData.json";
import { SongContext, useFixedString } from '../Index';

const SoundControl = () => {

    const { currentSI } = useContext(SongContext);

    // set the Up Next  song state (...song || undefined)
    const song = songsData[`${currentSI + 1}`];

    // undefined
    var nextSong = "Last Song...";

    // ...Song
    if (song !== undefined) {
        nextSong = useFixedString(song.name, 8);
    }

    return (
        <div className='hidden md:flex items-center gap-5'>
            <button className='border rounded-full'>
                <BsVolumeDownFill size={20} />
            </button>

            <a href={`music/${currentSI + 1}.mp3`} download={songsData[currentSI].name}>
                <Button className='bg-transparent border border-red-700 py-[2px] text-[12px] font-bold '
                    textColor='text-gray-300'
                    hoverColor="">
                    Download Now
                </Button>
            </a>

            <div>
                <p className='text-gray-400 text-[10px] font-bold'>Up Next</p>
                <p className='text-slate-200 text-sm font-bold'>{nextSong}</p>
            </div>
        </div>
    )
}

export default SoundControl
