import React, { useContext } from 'react'
import { SongContext, Button } from '../Index';
import songsData from "../../api/songsData.json";
import { IoIosDownload } from "react-icons/io";

const QueueSongCard = ({ images, name, from, duration, id }) => {

    const { setCurrentSI, setIsPlaying } = useContext(SongContext);

    const playListSong = () => {
        setCurrentSI(id);
        setIsPlaying(true);
    }

    return (
        <div onClick={playListSong}>
            <div className='w-full h-[1px] bg-gray-600'></div>
            <div className=' py-5 flex justify-between px-3 '>
                <div className='flex items-center gap-3 md:w-[500px] lg:w-full'>
                    <div>
                        <img className="cursor-pointer hover:opacity-80 rounded-md w-[40px]" src={images} alt={name} />
                    </div>
                    <div>
                        <h1 className='text-gray-200 cursor-pointer text-sm font-bold'>{name}</h1>
                        <p className='cursor-pointer text-gray-500 text-sm font-bold'>{from}</p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <p className='font-semibold '>0{duration}</p>
                    <a href={`music/${id + 1}.mp3`} download={songsData[id].name}>
                        <IoIosDownload size={30} />
                    </a>
                </div>
            </div>
            <div className='w-full h-[1px] bg-gray-600'></div>
        </div>
    )
}

export default QueueSongCard
