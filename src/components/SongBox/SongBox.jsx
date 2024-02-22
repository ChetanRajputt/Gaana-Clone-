import React from 'react'
import SongCard from './SongCard'
import { Container } from '../Index'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const SongBox = ({ id, data }) => {

    // for left scroll cards
    function scrollLeft() {
        document.getElementById(`${id}`).scrollLeft -= 1000;
    }

    // for Right scroll cards
    function scrollRight() {
        document.getElementById(`${id}`).scrollLeft += 1000;
    }


    return (
        <div className='text-white my-12 relative'>
            <div className='flex justify-between'>
                <h1 className='ml-4 md:ml-0 md:text-2xl font-bold text-gray-200'>{id}</h1>
                <button className=" mr-4 md:mr-0 text-[12px] text-red-500 hover:text-red-800">See All</button>
            </div>
            <Container>
                <div id={id} className='slider w-full  mt-3 md:mt-5 flex flex-wrap md:flex-nowrap lg:flex-nowrap items-center 
                justify-between  md:justify-start md:overflow-x-auto lg:md:overflow-x-auto scroll-smooth '>
                    {
                        data.map((music) => {
                            const { id, images, name } = music;
                            return (
                                <div key={id}>
                                    <SongCard images={images} name={name} id={id} />
                                </div>
                            )
                        })
                    }

                </div>
            </Container>

            <div>
                <button onClick={scrollLeft} className='p-3 bg-gray-300 text-black rounded-full hidden md:inline absolute top-[50%] left-0 z-40  shadow-2xl '>
                    <FaChevronLeft size={12} />
                </button>
                <button onClick={scrollRight} className='p-3 bg-gray-300 text-black rounded-full hidden md:inline absolute top-[50%] right-0 z-40 shadow-2xl '>
                    <FaChevronRight size={12} />
                </button>
            </div>
        </div >
    )
}

export default SongBox
