import React from 'react'
import { BsArrowLeft } from "react-icons/bs";
import songsData from "../../api/songsData.json";
import { useState } from 'react';

const SearchBar = ({ setOpenSearch, openSearch }) => {

    const [searchText, setSearchText] = useState("");


    return (
        <div className='closeSearch openSearch z-50 absolute top-3 left-[16%] text-white bg-[#222428] rounded-md w-[55%] h-[80vh] '>
            <div className='flex items-center gap-2 rounded-md w-full bg-[#1B1B1B]'>
                <BsArrowLeft onClick={() => setOpenSearch(!openSearch)} size={25} className='z-50 cursor-pointer ml-2 text-gray-400' />
                <input
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className='w-full outline-none text-sm bg-[#1B1B1B] rounded-md p-3' type="text" placeholder='Search Artists, Songs, ALbums' />
            </div>
            <div>
                <div>
                    <h1>Top Results</h1>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar
