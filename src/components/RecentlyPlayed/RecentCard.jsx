import React, { useContext } from 'react'
import MusicInfo from '../MasterPlay/MusicInfo'
import { BsThreeDotsVertical } from "react-icons/bs";
import { SongContext } from '../Index';

const RecentCard = ({
    images,
    name,
    id,
    from
}) => {

    const { setCurrentSI, setIsPlaying } = useContext(SongContext);

    // set the current song state when click the recent card song
    const playRecentSong = () => {
        setCurrentSI(id);
        setIsPlaying(true);
        document.getElementById("currentAudioNavbar").style.bottom = "0";
    }


    return (
        <div onClick={playRecentSong} className=' bg-[#222428] p-2 w-[100%] md:w-[31%] flex justify-between '>
            <div className='flex items-center gap-2'>
                <div>
                    <img className="cursor-pointer hover:opacity-80  w-[50px]" src={images} alt={name} />
                </div>
                <div>
                    <h1 className='text-gray-200 cursor-pointer text-sm font-bold'>{name}</h1>
                    <p className='cursor-pointer text-gray-500 text-[12px] font-bold'>{from}</p>
                </div>
            </div>

            <button className='text-gray-200'>
                <BsThreeDotsVertical size={18} />
            </button>
        </div>
    )
}

export default RecentCard
