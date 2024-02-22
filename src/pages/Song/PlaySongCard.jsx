import { FaPlay } from "react-icons/fa";

const PlaySongCard = ({ images, name, singer }) => {
    return (
        <div className="relative w-[160px] md:w-[150px] lg:md:w-[150px]  group duration-300 m-1 md:mr-10 ">
            <div>
                <img className='w-full rounded group-hover:opacity-70 cursor-pointer' src={images} alt={name} />
            </div>
            <div className="w-full  absolute top-12  flex  items-center justify-center">
                <button className="text-gray-100 p-2 duration-500 rounded-full hidden group-hover:inline">
                    <FaPlay size={35} />
                </button>
            </div>
            <div>
                <h2 className='font-bold text-sm cursor-pointer text-gray-200 '>{name} </h2>
                <h2 className='font-bold text-[12px] cursor-pointer text-gray-400 '>{"Singer"} </h2>
            </div>
        </div>
    )
}

export default PlaySongCard
