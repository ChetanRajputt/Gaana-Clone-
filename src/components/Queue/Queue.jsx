import React, { useContext, useRef } from 'react'
import { AiOutlineHeart } from "react-icons/ai";
import MusicControl from '../MasterPlay/MusicControl';
import { BsChevronDown } from "react-icons/bs";
import { Container, SongContext, useFixedString, Button } from '../Index';
import songsData from "../../api/songsData.json";
import QueueSongCard from './QueueSongCard';

const Queue = () => {

    // Close the queue screen when the user clicks on the close button
    const queueClose = () => {
        document.getElementById("queueBox").style.display = "none";
    }

    // direct access to the States and Functions
    const { duration, ct, currentSI, musicRef } = useContext(SongContext);

    // set the  queuelist array to show the user recommendations songs list
    let queueList = [];
    queueList = songsData.slice(currentSI);

    // after last 5 song to handle the queue list
    if (currentSI > 48) {
        queueList = queueList.concat(songsData.slice(0))
    }

    // set song name and  length for the queue
    const song = songsData[`${currentSI}`];

    // mix the song name and from for the queue
    const nameAndFromMix = `${song.name} (From" ${song.from}")`;

    // use Custom useFixedString (Hook) to fixed the song name
    const CSName = useFixedString(nameAndFromMix, 30);


    // for update the song current position after click the client song seekbar position
    const seekBarRef = useRef();

    const seekBarUpdate = (e) => {
        let width = seekBarRef.current.clientWidth;
        const offset = e.nativeEvent.offsetX;

        const divprogress = offset / width * 100;
        musicRef.current.currentTime = divprogress / 100 * duration;

    }



    return (
        <div id='queueBox' className='w-full hidden text-white h-full overflow-x-scroll z-[9999999999] fixed  lg:top-14 left-0 '>
            {/* main */}
            <Container>
                <div className='flex flex-col  lg:flex-row justify-between items-center  lg:my-[3%]'>
                    {/* left section  */}

                    <div className='w-[375px]  md:w-[770px] lg:w-[320px] lg:ml-40 flex flex-col items-center gap-3'>
                        <img className='w-full  rounded' src={songsData[currentSI].images} alt={songsData[currentSI].name} />
                        <button onClick={queueClose} className=' z-20 text-white absolute left-5 top-10 block  lg:hidden'>
                            <BsChevronDown size={30} />
                        </button>
                        <div className='flex items-center overflow-hidden justify-between gap-x-12'>
                            <h1>{CSName}</h1>
                            <button className='text-gray-400'>
                                <AiOutlineHeart size={23} />
                            </button>
                        </div>
                        <div className='flex items-center px-2 w-full gap-3 md:gap-2 text-[12px] justify-between'>
                            <p>00:{ct}</p>
                            <div className='h-[2px] w-full bg-gray-600 cursor-pointer' onClick={seekBarUpdate} ref={seekBarRef} >
                                <div style={{ width: `${ct * 100 / duration + "%"}` }} className='h-full bg-red-600'></div>
                            </div>
                            <p>00:{duration}</p>
                        </div>
                        <div>
                            <MusicControl className='hidden md:hidden' hideBtn='' playIconSize={45} />
                        </div>
                    </div>

                    {/* right section  */}

                    <div className='mt-6  lg:mt-0'>
                        <div className='flex  gap-x-5 md:gap-10 lg:gap-4 z-10'>
                            <h1 className='font-bold text-xl md:mr-40 lg:mr-40'>Queue</h1>
                            <Button
                                bgColor='bg-white'
                                hoverColor='hover:bg-gray-200'
                                textColor='text-black'
                            >
                                Save Playlist
                            </Button>
                            <Button className='bg-transparent border py-[2px] text-[12px] '
                                hoverColor="">
                                Clear List
                            </Button>
                            <button onClick={queueClose} className='hidden lg:block text-red-600'>
                                <BsChevronDown size={25} />
                            </button>
                        </div>

                        <div id='scrollDesign' className='w-full mt-1 h-[70vh] lg:overflow-y-auto flex flex-col  py-6'>
                            {
                                queueList.map((music, index) => {
                                    const { images, name, from, duration, id } = music;
                                    return (
                                        <QueueSongCard key={index}
                                            images={images}
                                            name={name}
                                            from={from}
                                            duration={duration}
                                            id={id}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Queue
