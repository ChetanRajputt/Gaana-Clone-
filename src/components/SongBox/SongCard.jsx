import { FaPlay } from "react-icons/fa";
import { SongContext } from "../Index";
import { useContext } from "react";

const SongCard = ({ id, images, name }) => {

    const { setCurrentSI, setIsPlaying } = useContext(SongContext);

    // set the current song state after click the song card and open the master song popup
    const sendSongIndex = () => {
        setCurrentSI(id);
        setIsPlaying(true);
        document.getElementById("currentAudioNavbar").style.bottom = "0";
    }


    return (
        <div onClick={sendSongIndex} className="relative w-[140px] sm:w-[160px] md:w-[156px] lg:md:w-[156px]  group duration-300 mb-3 md:mr-10 ">
            <div>
                <img className='w-full rounded group-hover:opacity-70 cursor-pointer' src={images} alt={name} />
            </div>
            <div className="w-full  absolute top-12  flex  items-center justify-center">
                <button className="text-gray-100 p-2 duration-500 rounded-full md:hidden group-hover:inline">
                    <FaPlay size={35} />
                </button>
            </div>
            <div>
                <h2 className='font-bold text-sm cursor-pointer text-gray-200 '>{name} </h2>
            </div>
        </div>
    )
}

export default SongCard
