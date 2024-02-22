import React from 'react'
import Button from '../../components/Button'
import { AiOutlineHeart } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import PlaySongCard from './PlaySongCard';
import SongBoxContainer from "../../components/SongBox/SongBoxContainer";
import { useParams } from 'react-router-dom';

const Song = () => {

    const { songId } = useParams();
    // console.log(songId);

    return (
        <div className='px-14 '>
            <div className='text-white flex gap-7  '>
                <img className='w-[23%] rounded' src="src/assets/images/1.webp" alt="" />
                <div className='mt-6'>
                    <h2 className='text-2xl font-semibold my-8'>Leke Prabhu Ka Naam (From"Tiger 3") Song | Pritam </h2>
                    <h1 className='text-3xl font-bold my-5'>Leke Prabhu Ka Naam (From"Tiger 3")</h1>
                    <p  ><span className='text-sm text-sky-500 ' >Leke Prabhu Ka Naam (From"Tiger 3")</span> <b className=' mb-3 text-2xl px-1 font-bold'>.</b> <span className='text-slate-400'>2023</span> <b className=' mb-3 text-2xl px-1 font-bold'>.</b>   <Button bgColor='bg-white' textColor='text-black' className='shadow-2xl text-sm' hoverColor=''>3 min 35 sec</Button> </p>
                    <p className='text-sm py-3 text-slate-400'>Pritam, Arjit Singh, Nikita Gandhi</p>
                    <div className='flex items-center gap-4'>
                        <Button className='px-9 py-[6px] h-auto font-bold'>Play Song</Button>
                        <button className='border rounded-full p-1' ><AiOutlineHeart size={18} /></button>
                        <button className='border rounded-full p-1' > <BsThreeDotsVertical size={18} /></button>
                    </div>
                </div>
            </div>

            <div className='flex mt-8'>
                <div>

                    {/* <div >
                    <PlaySongCard images={"src/assets/images/1.webp"} singer={"singer"} name={"Leke Prabhu Ka Naam"} />
                </div>

                <div> <PlaySongCard images={"src/assets/images/2.jpg"} singer={"singer"} name={"Leke Prabhu Ka Naam"} /></div>

                <div> <PlaySongCard images={"src/assets/images/3.webp"} singer={"singer"} name={"Leke Prabhu Ka Naam"} /></div>

                <div> <PlaySongCard images={"src/assets/images/4.jpg"} singer={"singer"} name={"Leke Prabhu Ka Naam"} /></div>
                
                <div> <PlaySongCard images={"src/assets/images/5.jpg"} singer={"singer"} name={"Leke Prabhu Ka Naam"} /></div>
                
            <div> <PlaySongCard images={"src/assets/images/6.jpg"} singer={"singer"} name={"Leke Prabhu Ka Naam"} /></div> */}
                </div>

                <SongBoxContainer />
            </div>

        </div>
    )
}

export default Song
