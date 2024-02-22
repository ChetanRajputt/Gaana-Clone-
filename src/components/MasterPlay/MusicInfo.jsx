import React, { useContext } from 'react'
import songsData from "../../api/songsData.json";
import { SongContext, useFixedString } from '../Index';
import { AiOutlineHeart } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

const MusicInfo = ({ }) => {

    const { currentSI } = useContext(SongContext);

    // fetch the current song info
    const song = songsData[`${currentSI}`];

    // mix the current song name with the current song from
    const st = `${song.name} (From" ${song.from}")`;

    // use the custom useFixedString hooks to set the music info
    const songName = useFixedString(song.name);
    const subTitle = useFixedString(st);

    return (

        <div className='flex items-center w-[70%] md:w-[25%] gap-2'>
            <div>
                <img className="cursor-pointer hover:opacity-80  w-[60px] md:w-[40px] rounded" src={song.images} />
            </div>
            <div>
                <h1 className='text-gray-200 text-[14px] md:text-base cursor-pointer font-bold'>{songName}</h1>
                <p className='cursor-pointer text-gray-500 text-[10px] font-bold'>{subTitle}</p>
            </div>
            <div className='items-center ml-6 gap-5 hidden md:flex'>
                <button className='text-gray-400'>
                    <AiOutlineHeart size={23} />
                </button>
                <button className='text-gray-200 mb-1'>
                    <BsThreeDotsVertical size={18} />
                </button>
            </div>
        </div>
    )
}

export default MusicInfo
